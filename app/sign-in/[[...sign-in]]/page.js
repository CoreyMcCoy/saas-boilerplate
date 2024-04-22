import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <SignIn />
      <div className="mt-3">
        <p>
          Forgot Password?
          <Link href="/forgot-password" className="ml-2 text-primary">
            Reset Password
          </Link>
        </p>
      </div>
    </>
  );
}
