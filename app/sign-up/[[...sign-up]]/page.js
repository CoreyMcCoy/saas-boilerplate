import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="md:w-4/6 flex flex-col items-center mx-auto">
      <SignUp />
    </div>
  );
}