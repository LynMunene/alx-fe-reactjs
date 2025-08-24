import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        React Form Handling with Tailwind
      </h1>
      <RegistrationForm />
      <div className="my-6 border-t border-gray-300" />
      <FormikForm />
    </div>
    </>
    
  );
}

export default App;
