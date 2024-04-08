import Link from 'next/link';

const PricingPage = () => {
  return (
    <div>
      <div className="md:w-4/6 mx-auto">
        <h1 className="text-4xl font-bold mb-8 ">Pricing</h1>
        <p>
          Voluptatem aut, quis molestias iure saepe corrupti architecto sapiente
          voluptatibus nostrum dolores placeat quasi blanditiis reiciendis
          error!
        </p>
      </div>
      <section>
        <div className="mt-12">
          <div className="flex flex-wrap justify-center">
            <div className="p-4">
              <div className="p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
                <h2 className="text-sm title-font mb-4 font-medium">STARTER</h2>
                <h3 className="text-4xl font-semibold pb-4 mb-4 border-b border-gray-700">
                  <span>$18</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">
                    /one-time
                  </span>
                </h3>
                <p className="flex items-center mb-2">
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
                  Vexillologist pitchfork
                </p>
                <p className="flex items-center mb-2">
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
                  Tumeric plaid portland
                </p>
                <p className="flex items-center mb-6">
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
                <button className="btn btn-secondary flex items-center mt-auto w-full focus:outline-none rounded">
                  Button
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
              </div>
            </div>
            <div className="p-4">
              <div className="p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
                <span className="bg-primary text-base-300 font-semibold px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <h2 className="text-sm tracking-widest title-font mb-4 font-medium">
                  PRO
                </h2>
                <h3 className="text-4xl font-semibold pb-4 mb-4 border-b border-gray-700">
                  <span>$38</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">
                    /one-time
                  </span>
                </h3>
                <p className="flex items-center mb-2">
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
                  Vexillologist pitchfork
                </p>
                <p className="flex items-center mb-2">
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
                  Tumeric plaid portland
                </p>
                <p className="flex items-center mb-6">
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
                <button className="btn btn-primary text-base-300 flex items-center mt-auto w-full focus:outline-none rounded">
                  Button
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PricingPage;
