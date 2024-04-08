'use client';

import { currentUser, useUser } from '@clerk/nextjs';

export default function Home() {
  // const {isLoaded, isSignedIn, user} = useUser(); ** client-side **
  // const user = await currentUser(); ** server-side **
  const user = useUser();
  // const newUserName =
  //   user.user.username.slice(0, 1).toUpperCase() + user.user.username.slice(1);
  return (
    <div className="md:w-4/6 mx-auto">
      {user.user ? (
        <>
          <div>
            <h1 className="text-3xl font-bold mb-8">
              Welcome back,{' '}
              {user.user.firstName ||
                user.user.username.slice(0, 1).toUpperCase() +
                  user.user.username.slice(1)}
              !
            </h1>
            <p className="mb-8">
              You're signed in as {user.user.primaryEmailAddress.emailAddress}.
            </p>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-8">SaaS App Boilerplate</h1>

          <p className="mb-8">
            This is a boilerplate application for building a SaaS application
            using Next.js, React.js, Clerk, MongoDB, Tailwind CSS, and DaisyUI.
          </p>
        </>
      )}
    </div>
  );
}
