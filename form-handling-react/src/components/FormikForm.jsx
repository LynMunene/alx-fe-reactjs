import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus({ success: "User registered successfully!" });
        resetForm();
      } else {
        setStatus({ error: "Something went wrong!" });
      }
    } catch {
      setStatus({ error: "Failed to register user" });
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status }) => (
        <Form className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl border">
          <h2 className="text-2xl font-bold mb-5 text-center text-gray-700">
            Formik Registration Form
          </h2>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-600">Username</label>
            <Field
              name="username"
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <Field
              name="password"
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-200"
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>

          {status?.success && (
            <p className="text-green-600 text-center mt-3">{status.success}</p>
          )}
          {status?.error && (
            <p className="text-red-500 text-center mt-3">{status.error}</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
