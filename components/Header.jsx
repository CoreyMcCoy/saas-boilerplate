import Link from 'next/link';
import Image from 'next/image';
import { UserButton, auth } from '@clerk/nextjs';

const Navbar = async () => {
  // const { isLoaded, userId, sessionId, getToken } = useAuth(); (for client-side auth)
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <>
      <nav className="py-4 px-6 flex justify-between mb-5">
        <div>
          <Link href="/" className="font-semibold">
            {/* display the Image: saas-icon.png if screen is smaller than medium */}
            <div>
              <span className="text-lg">SaaS Boilerplate</span>
            </div>
          </Link>
        </div>

        <div>
          <ul className="flex space-x-3">
            {!isAuth ? (
              <>
                <Link href="/pricing">
                  <li>Pricing</li>
                </Link>
                <Link href="/sign-in">
                  <li>Login</li>
                </Link>
                <Link href="/sign-up">
                  <li>Sign-up</li>
                </Link>
              </>
            ) : (
              <>
                <Link href="/pricing">
                  <li>Pricing</li>
                </Link>
                <Link href="/profile">
                  <li>Profile</li>
                </Link>
                <li>
                  <UserButton afterSignOutUrl="/" />
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
