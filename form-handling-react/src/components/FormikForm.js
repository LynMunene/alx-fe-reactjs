import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one lowercase letter, one uppercase letter, and one number"
      ),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("User registered:", values);
    resetForm();
    setSubmitting(false);
  };

  return React.createElement(
    "div",
    { className: "flex justify-center items-center min-h-screen bg-gray-100" },
    React.createElement(
      Formik,
      {
        initialValues: { username: "", email: "", password: "" },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
      },
      ({ isSubmitting, errors, touched }) => 
        React.createElement(
          Form,
          { className: "bg-white shadow-lg rounded-xl p-8 w-full max-w-md" },
          React.createElement(
            "h2",
            { className: "text-2xl font-bold text-center mb-6" },
            "User Registration"
          ),
          
          // Username Field
          React.createElement(
            "div",
            { className: "mb-4" },
            React.createElement(
              "label",
              { htmlFor: "username", className: "block mb-2 text-gray-700" },
              "Username"
            ),
            React.createElement(Field, {
              type: "text",
              name: "username",
              className: `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${
                errors.username && touched.username ? "border-red-500" : ""
              }`,
              placeholder: "Enter your username"
            }),
            React.createElement(ErrorMessage, {
              name: "username",
              component: "p",
              className: "text-red-500 text-sm mt-1"
            })
          ),

          // Email Field
          React.createElement(
            "div",
            { className: "mb-4" },
            React.createElement(
              "label",
              { htmlFor: "email", className: "block mb-2 text-gray-700" },
              "Email"
            ),
            React.createElement(Field, {
              type: "email",
              name: "email",
              className: `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${
                errors.email && touched.email ? "border-red-500" : ""
              }`,
              placeholder: "Enter your email"
            }),
            React.createElement(ErrorMessage, {
              name: "email",
              component: "p",
              className: "text-red-500 text-sm mt-1"
            })
          ),

          // Password Field
          React.createElement(
            "div",
            { className: "mb-6" },
            React.createElement(
              "label",
              { htmlFor: "password", className: "block mb-2 text-gray-700" },
              "Password"
            ),
            React.createElement(Field, {
              type: "password",
              name: "password",
              className: `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${
                errors.password && touched.password ? "border-red-500" : ""
              }`,
              placeholder: "Enter your password"
            }),
            React.createElement(ErrorMessage, {
              name: "password",
              component: "p",
              className: "text-red-500 text-sm mt-1"
            })
          ),

          // Submit Button
          React.createElement(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition duration-300"
            },
            isSubmitting ? "Registering..." : "Register"
          )
        )
    )
  );
};

export default formikForm;