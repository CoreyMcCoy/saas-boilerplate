'use client';
import React, { useState } from 'react';
import { useAuth, useSignIn } from '@clerk/nextjs';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const ForgotPasswordPage = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [code, setCode] = useState('');
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [complete, setComplete] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();

  if (!isLoaded) {
    return null;
  }

  // If the user is already signed in,
  // redirect them to the home page
  if (isSignedIn) {
    router.push('/');
  }

  // Send the password reset code to the user's email
  async function create(e) {
    e.preventDefault();
    const email = e.target[0].value;
    await signIn
      ?.create({
        strategy: 'reset_password_email_code',
        identifier: email,
      })
      .then((_) => {
        setSuccessfulCreation(true);
        setError('');
      })
      .catch((err) => {
        console.error('error', err.errors[0].longMessage);
        setError(err.errors[0].longMessage);
      });
  }

  // Reset the user's password.
  // Upon successful reset, the user will be
  // signed in and redirected to the home page
  async function reset(e) {
    e.preventDefault();
    const password = e.target[0].value;
    const code = e.target[1].value;
    await signIn
      ?.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password,
      })
      .then((result) => {
        // Check if 2FA is required
        if (result.status === 'needs_second_factor') {
          setSecondFactor(true);
          setError('');
        } else if (result.status === 'complete') {
          // Set the active session to
          // the newly created session (user is now signed in)
          setActive({ session: result.createdSessionId });
          setError('');
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        console.error('error', err.errors[0].longMessage);
        setError(err.errors[0].longMessage);
      });
  }

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-5">
        {successfulCreation && !complete ? 'New Password' : 'Forgot Password'}?
      </h2>
      <form
        onSubmit={!successfulCreation ? create : reset}
        className="flex flex-col items-center"
      >
        {!successfulCreation && !complete && (
          <>
            <label htmlFor="email">
              Enter your email address, and we'll help you reset it.
            </label>
            <input
              className="input my-3"
              type="email"
              placeholder="e.g john@doe.com"
              required
            />
            <button
              type="submit"
              className="btn bg-brandPrimary hover:bg-brandPrimary text-white w-60"
            >
              Send password reset code
            </button>
            {error && <p>{error}</p>}
          </>
        )}

        {successfulCreation && (
          <>
            <label htmlFor="password">
              Enter the password reset code that was sent to your email
            </label>
            <input className="input mb-2" type="text" />

            <label htmlFor="password">Enter your new password</label>
            <input className="input mb-2" type="password" />

            <button className="btn bg-brandPrimary hover:bg-brandPrimary text-white w-60">
              Reset
            </button>
            {error && <p>{error}</p>}
          </>
        )}

        {secondFactor && (
          <p>2FA is required, but this UI does not handle that</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
