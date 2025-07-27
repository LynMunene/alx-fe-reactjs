import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  if (!filteredRecipes || filteredRecipes.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe, index) => (
        <div key={recipe.id || index}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
