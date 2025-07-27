import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavouritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page with recipe list and add form */}
        <Route path="/" element={
          <>
          <SearchBar />
            <RecipeList />
            <AddRecipeForm />
            <FavoritesList />
            <RecommendationsList />
          </>
        } />
        
        {/* Recipe details page */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        
        {/* Edit recipe page */}
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;