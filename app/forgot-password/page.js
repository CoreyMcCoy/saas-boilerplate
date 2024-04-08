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
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-8 rounded shadow-lg w-96">
        <h1 className="text-3xl text-center font-semibold mb-8">
          {successfulCreation && !complete ? 'New Password' : 'Forgot Password'}
          ?
        </h1>
        <form onSubmit={!successfulCreation ? create : reset}>
          {!successfulCreation && !complete && (
            <>
              <label htmlFor="email">
                Enter your email address, and we'll help you reset it.
              </label>
              <input
                className="input w-full mb-4 bg-slate-200 my-4"
                type="email"
                placeholder="e.g john@doe.com"
                required
              />

              <button className="btn btn-primary w-full mt-2">
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
              <input
                className="input w-full mb-4 bg-slate-200 my-4"
                type="text"
              />

              <label htmlFor="password">Enter your new password</label>
              <input
                className="input w-full mb-4 bg-slate-200 my-4"
                type="password"
              />

              <button className="btn btn-primary w-full mt-2">Reset</button>
              {error && <p>{error}</p>}
            </>
          )}

          {secondFactor && (
            <p>2FA is required, but this UI does not handle that</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
