import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch mock recipe data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
        🍴 Our Delicious Recipes
      </h1>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Recipe Details */}
            <div className="p-5 flex flex-col justify-between h-52">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {recipe.summary}
                </p>
              </div>

              {/* View Recipe Button */}
              <Link
                to={`/recipes/${recipe.id}`}
                className="inline-block text-center bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition duration-300"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
