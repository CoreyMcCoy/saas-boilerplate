import Link from 'next/link';
import Image from 'next/image';
import { UserButton, auth } from '@clerk/nextjs';

const Navbar = async () => {
  // const { isLoaded, userId, sessionId, getToken } = useAuth(); (for client-side auth)
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className="navbar bg-base-100 px-6 lg:px-24">
      <div className="navbar-start">
        {/* Mobile view */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] space-y-2 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {!isAuth ? (
              <>
                <Link href="/pricing" className="font-medium">
                  <li>Pricing</li>
                </Link>
                <Link href="/sign-in" className="font-medium">
                  <li>Login</li>
                </Link>
                <Link href="/sign-up" className="font-medium">
                  <li>Sign-up</li>
                </Link>
              </>
            ) : (
              <>
                <Link href="/pricing" className="font-medium">
                  <li>Pricing</li>
                </Link>
                <Link href="/profile" className="font-medium">
                  <li>Profile</li>
                </Link>
                <li>
                  <UserButton afterSignOutUrl="/" />
                </li>
              </>
            )}
          </ul>
        </div>
        {/* End mobile view */}

        {/* Desktop view */}
        <Link href="/" className="font-semibold pl-2 lg:p-0">
          {/* display the Image: saas-icon.png if screen is smaller than large */}
          <div className="hidden lg:flex">
            <span className="text-lg text-white font-semibold">
              SaaS Boilerplate
            </span>
          </div>
          <div className="lg:hidden">
            <Image
              src="/saas-app-icon.png"
              alt="SaaS Icon"
              width={40}
              height={40}
            />
          </div>
        </Link>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {!isAuth ? (
            <>
              <Link href="/pricing" className="font-medium">
                <li>Pricing</li>
              </Link>
              <Link href="/sign-in" className="font-medium">
                <li>Login</li>
              </Link>
              <Link href="/sign-up" className="font-medium">
                <li>Sign-up</li>
              </Link>
            </>
          ) : (
            <>
              <div className="md:flex md:items-center gap-4">
                <Link href="/pricing" className="font-medium">
                  <li>Pricing</li>
                </Link>
                <Link href="/profile" className="font-medium">
                  <li>Profile</li>
                </Link>
                <li>
                  <UserButton afterSignOutUrl="/" />
                </li>
              </div>
            </>
          )}
        </ul>
      </div>
      {/* End desktop view */}

      {/* Image and button */}
      {/* <div className="navbar-end">
        {status === 'authenticated' ? (
          <>
            <Link href="#" onClick={() => signOut()} className="btn">
              Logout
            </Link>
          </>
        ) : (
          <Link href="/login" className="btn">
            Login
          </Link>
        )}
      </div> */}
    </div>
  );
};
export default Navbar;
