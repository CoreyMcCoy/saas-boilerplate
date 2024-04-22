'use client';

import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { createCheckoutSession } from '@/lib/actions/createCheckoutSession';

const PricingPage = () => {
  const { userId } = useAuth();
  const isAuth = !!userId;

  // Handle the checkout process. Authenticate the user, create a Checkout Session, and redirect them to the Stripe Checkout page.
  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!isAuth) {
      const modal = document.getElementById('my_modal_2');
      modal.showModal();
    } else {
      const formData = new FormData(e.target); // e.target is the form
      const priceId = formData.get('priceId'); // Extracts 'priceId' from the form data
      console.log('priceId', priceId);
      const checkoutURL = await createCheckoutSession({ priceId }); // Adjust this call as needed
      window.location.assign(checkoutURL);
    }
  };

  return (
    <div className="w-3/4">
      {/* One time payment option 1 */}
      <form onSubmit={handleCheckout}>
        <h2 className="text-xl font-semibold mb-5">Starter</h2>
        <h3 className="text-2xl mb-3">
          <span>$18</span>
          <span className="font-normal text-lg">/one-time</span>
        </h3>

        <p className="mb-5">Mixtape chillwave tumeric</p>
        <input
          type="hidden"
          name="priceId"
          value="price_1NZlqSDmlUUr9uNW13LqdNIE" // Replace with your price ID
        />
        <button
          type="submit"
          className="btn bg-brandPrimary hover:bg-brandPrimary text-white w-60"
        >
          Buy now
        </button>
      </form>
      <dialog id="my_modal_2" className="modal text-center">
        <div className="modal-box">
          <p className="mb-3">Must be signed in to make a purchase.</p>
          <Link
            href="/sign-in"
            className="btn bg-brandPrimary hover:bg-brandPrimary text-white w-full"
          >
            Sign in
          </Link>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
export default PricingPage;
