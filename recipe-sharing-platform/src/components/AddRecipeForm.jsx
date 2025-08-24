import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation logic
  const validateForm = () => {
    let formErrors = {};

    if (!title.trim()) {
      formErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientsArray = ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

      if (ingredientsArray.length < 2) {
        formErrors.ingredients = "Please enter at least two ingredients.";
      }
    }

    if (!steps.trim()) {
      formErrors.steps = "Preparation steps are required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        steps,
      };

      console.log("Recipe Submitted:", newRecipe);

      // Clear form after successful submission
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
      alert("Recipe added successfully!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Container with responsive layout */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Add a New Recipe
        </h2>

        {/* Responsive two-column layout on medium+ screens */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Recipe Title */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              placeholder="e.g. Chocolate Cake"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Ingredients{" "}
              <span className="text-gray-500">(comma-separated)</span>
            </label>
            <textarea
              placeholder="e.g. Flour, Sugar, Eggs, Milk"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              }`}
              rows="5"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Preparation Steps */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Preparation Steps
            </label>
            <textarea
              placeholder="Write step-by-step instructions..."
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.steps ? "border-red-500" : "border-gray-300"
              }`}
              rows="5"
            ></textarea>
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button - full width on mobile, right-aligned on desktop */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <button
              type="submit"
              className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
