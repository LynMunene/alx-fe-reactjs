import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  const displayRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  if (displayRecipes.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <div>
      {displayRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
