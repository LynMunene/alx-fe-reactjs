import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);
  const recommendations = useRecipeStore(state => state.recommendations);
  const setRecommendations = useRecipeStore(state => state.setRecommendations);

  const generateRecommendations = () => {
    const newRecommendations = recipes
      .filter(recipe => !favorites.includes(recipe.id))
      .sort(() => 0.5 - Math.random()) // shuffle
      .slice(0, 5); // pick top 5

    setRecommendations(newRecommendations);
  };

  return (
    <div>
      <h2>Recommended For You</h2>
      <button onClick={generateRecommendations}>Get New Recommendations</button>

      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
