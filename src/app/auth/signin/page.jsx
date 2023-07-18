'use client'
import React, { useState } from 'react';
import { FaGoogle, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
const Page = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGoogle = () => {
    // Add your Google sign-in logic here
    // This is just a placeholder function
    console.log('Signing in with Google...');
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);

  };

  const handleBackToHomeClick = () => {
    setShowSignupForm(false);
  };

  const validateEmail = () => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    // Password validation criteria
    const minPasswordLength = 6;
    return password.length >= minPasswordLength;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateEmail() && validatePassword()) {
      // Perform form submission logic here
      console.log('Form submitted successfully');
      window.location.href="/"
    } else {
      // Handle validation errors
      console.log('Form validation failed');
    }
  };

  return (
    <div className="container py-[5%] h-auto flex justify-center fixed left-[35%] top-[10%] items-center bg-cyan-200  w-[30%]">
      <div className="w-80 ">
        <h1 className="text-3xl mb-8 text-center font-bold text-black w-[120%] ml-[-10%]">
          Welcome to One Scope
        </h1>
        <div className="flex justify-start mb-8  rounded-md py-3 px-2 bg-black space-x-10">
          <button onClick={signInWithGoogle}>
            <FaGoogle size={32} className="text-red-600 bg-slate-50 py-1 px-1 rounded-sm" />
          </button>
          <p>Sign in with Google</p>
        </div>

        {showSignupForm ? (
          <>
            <form onSubmit={handleFormSubmit}>
              {/* Signup form elements */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 mb-4 border text-gray-950 border-gray-300 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-2 mb-4 border text-gray-950 ${
                  validateEmail() ? 'border-gray-300' : 'border-red-500'
                } rounded`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className={`w-full p-2 mb-4 border text-gray-900 ${
                  validatePassword() ? 'border-gray-300' : 'border-red-500'
                } rounded`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 mb-4 text-gray-900 border border-gray-300 rounded"
                required
              />
              <input
                type="submit"
                value="Sign Up"
                className="w-full bg-green-500 text-gray-900 py-2 px-4 rounded cursor-pointer"
              />
            </form>
            <p className="text-center">
              Already have an account?{' '}
              <span className="text-blue-500 cursor-pointer" onClick={handleBackToHomeClick}>
                Back to login
              </span>
            </p>
          </>
        ) : (
          <>
            <form onSubmit={handleFormSubmit}>
              {/* Login form elements */}
              <div className="flex justify-center mx-0 px-0">
                <div className="line-through-text w-[20%]"></div>
                <div className="text-lg mb-4 text-gray-800 px-1">Or login with email</div>
                <div className="line-through-text w-[20%]"></div>
              </div>
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-2 mb-4 text-gray-950 border ${
                  validateEmail() ? 'border-gray-300' : 'border-red-500'
                } rounded`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className={`w-full p-2 mb-4 text-gray-950 border ${
                  validatePassword() ? 'border-gray-300' : 'border-red-500'
                } rounded`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="submit"
                value="Sign In"
                className="w-full bg-green-500   py-2 px-4 rounded cursor-pointer"
              />
            </form>
            <div className="flex text-center justify-center gap-3 mt-3">
              <p className="text-center ">
                <span className="text-blue-500 cursor-pointer" onClick={handleSignupClick}>
                  Sign up
                </span>
              </p>
              <span className="text-gray-900"> |</span>
              <p className="text-center ">
                <span className="text-blue-500 cursor-pointer" onClick={handleBackToHomeClick}>
                  Forgot your password?
                </span>
              </p>
            </div>
          </>
        )}

        <div className="text-center mt-4 flex justify-center">
          <FaArrowLeft
            size={24}
            className="text-blue-500 cursor-pointer"
            onClick={handleBackToHomeClick}
          />
          <Link href="/" className="text-blue-500 cursor-pointer ml-2" onClick={handleBackToHomeClick}>
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
