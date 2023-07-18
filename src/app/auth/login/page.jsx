'use client'
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add your login logic here
    setIsRegistered(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[rgba(2,2,23,0.33)] via-[rgba(114,113,159,0.83)] to-#9897CD">
      <h1 className="text-3xl font-bold mb-4">Login Page</h1>
      <form className="flex-col  flex flex-wrap gap-1.5 p-10 items-start content-start" onSubmit={handleSubmit}>
        <label htmlFor="email" className="font-medium">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
          required
        />

        <label htmlFor="password" className="font-medium">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      {!isRegistered && (
        <p className="mt-4 text-red-500">
          You have not registered yet. Please sign up first.
        </p>
      )}
    </div>
  );
}

export default App;
