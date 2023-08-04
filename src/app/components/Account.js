'use client'
import React, { useState, useEffect } from "react";

const Account = () => {
  const [accounts, setAccounts] = useState([]);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    // Fetch data from accountData.json using a URL path
    fetch("/accountData.json")
      .then((response) => response.json())
      .then((data) => setAccounts(data.users))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Find the user based on the provided email and password
    const user = accounts.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Successfully logged in
      console.log("Successfully logged in");
      setLoginError(false);
      e.target.reset(); // Clear the form fields
    } else {
      // Failed to log in
      console.log("Invalid email or password");
      setLoginError(true);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your register logic here
    console.log("Register button clicked");
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Login
          </button>
        </form>
        {loginError && (
          <p className="text-red-500 mt-2">Invalid email or password</p>
        )}
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <button
            onClick={handleRegister}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Account;
