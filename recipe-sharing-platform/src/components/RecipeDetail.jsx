import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  // Load recipe based on ID from params
  useEffect(() => {
    const foundRecipe = recipesData.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Recipe Not Found</h1>
        <Link to="/">
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
            Go Back Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold text-green-700 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        {/* Ingredients */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🛒 Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-lg">{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Cooking Instructions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">👩‍🍳 Instructions</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ol>
        </div>

        {/* Back Button */}
        <Link to="/">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition">
            ⬅ Back to Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
