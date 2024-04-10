import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className="md:w-4/6 text-center mx-auto">
      <h1 className="text-4xl font-bold mb-4">Success</h1>
      <p className="text-lg mb-4">Thank you for your purchase!</p>
      <p className="text-lg mb-4">
        You will receive an email confirmation shortly.
      </p>
      <button className="btn bg-yellow-400 text-base-300 hover:bg-yellow-500 flex items-center mt-auto w-full focus:outline-none rounded">
        <Link href="/">Back to home page</Link>
      </button>
    </div>
  );
};
export default SuccessPage;
