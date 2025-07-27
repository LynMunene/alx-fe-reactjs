import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = () => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === '') {
      alert('Please enter a title to delete');
      return;
    }

    deleteRecipe(title); // Call the zustand action
    setTitle('');
    navigate('/'); // Redirect to homepage or recipe list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter recipe title to delete"
        required
      />
      <button type="submit">Delete Recipe</button>
    </form>
  );
};

export default DeleteRecipeButton;
