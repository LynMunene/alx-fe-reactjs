import React from "react";
import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validateForm()) return;

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("User registered successfully!");
        setFormData({ username: "", email: "", password: "" });
        setErrors({});
      } else {
        alert("Something went wrong!");
      }
    } catch {
      alert("Failed to register user");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-6 p-6 bg-white shadow-md rounded-xl border"
    >
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-700">
        Controlled Registration Form
      </h2>

      {/* Username */}
      <div className="mb-4">
        <label className="block text-gray-600">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-600">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-gray-600">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-200"
      >
        Register
      </button>

      {successMessage && (
        <p className="text-green-600 text-center mt-3">{successMessage}</p>
      )}
    </form>
  );
};

export default RegistrationForm;
