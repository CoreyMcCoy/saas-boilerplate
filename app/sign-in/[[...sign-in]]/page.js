import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="md:w-4/6 flex flex-col items-center mx-auto">
      <SignIn />
      <div className="text-sm mt-4 flex mx-auto">
        <p>Forgot Password?</p>
        <Link
          href="/forgot-password"
          className="text-center text-secondary ml-2"
        >
          Reset Password
        </Link>
      </div>
    </div>
  );
}
