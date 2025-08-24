import React from "react";
import { useState } from "react";

const RegistrationForm = () => {
  // State variables for controlled inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation logic
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    // Clear error and simulate successful form submission
    setError("");
    console.log("User registered:", { username, email, password });

    // Reset form fields after successful submission
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          User Registration
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        {/* Username Field */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Username</label>
          <input
            type="text"
            value={username}            // ✅ REQUIRED for controlled component
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your username"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            value={email}               // ✅ REQUIRED for controlled component
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Password</label>
          <input
            type="password"
            value={password}            // ✅ REQUIRED for controlled component
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
