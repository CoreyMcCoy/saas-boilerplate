'use client';

// import { useUser } from '@clerk/nextjs';

export default function Home() {
  // const user = useUser(); // This is the user object that Clerk provides to work with the user's data
  return (
    <>
      <h1 className="text-xl font-semibold mb-5">SaaS App Boilerplate</h1>
      <p className="">
        This is a boilerplate application for building a SaaS application using
        Next.js, React.js, Clerk, MongoDB, Tailwind CSS, and DaisyUI.
      </p>
    </>
  );
}
