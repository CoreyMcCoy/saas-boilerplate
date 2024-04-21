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
    <>
      <section className="md:w-4/6 mx-auto">
        <div>
          <h1 className="text-2xl font-semibold mb-8 ">Pricing</h1>
          <p>
            Voluptatem aut, quis molestias iure saepe corrupti architecto
            sapiente voluptatibus.
          </p>
        </div>

        {/* One time payment option 1 */}

        <div className="flex flex-wrap justify-center">
          <form
            onSubmit={handleCheckout}
            className="my-10 p-6 rounded-lg flex flex-col shadow-2xl bg-white"
          >
            <h2 className="text-xl text-info-content mb-4 font-medium">
              Starter
            </h2>
            <h3 className="text-2xl text-info-content font-semibold pb-4 mb-4 border-b border-gray-400">
              <span>$18</span>
              <span className="text-lg ml-1 font-normal text-gray-600">
                /one-time
              </span>
            </h3>

            <p className="flex items-center mb-6 text-sm text-info-content">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Mixtape chillwave tumeric
            </p>
            <input
              type="hidden"
              name="priceId"
              value="price_1NZlqSDmlUUr9uNW13LqdNIE"
            />
            <button
              type="submit"
              className="btn flex text-center items-center w-full focus:outline-none rounded my-6"
            >
              Buy now
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-8">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </form>
        </div>
        <dialog id="my_modal_2" className="modal text-center">
          <div className="modal-box h-2/5 flex flex-col justify-center items-center">
            <h3 className="font-medium mb-6">Please sign in.</h3>
            <Link href="/sign-in" className="btn btn-success w-72">
              Sign in
            </Link>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </section>
    </>
  );
};
export default PricingPage;
