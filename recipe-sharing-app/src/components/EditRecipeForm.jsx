import { useState } from 'react'
import { useRecipeStore } from './recipeStore'

const EditRecipeForm = () => {
  const recipes = useRecipeStore((state) => state.recipes)
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)

  const [selectedTitle, setSelectedTitle] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const handleSelect = (e) => {
    const title = e.target.value
    setSelectedTitle(title)

    const recipe = recipes.find((r) => r.title === title)
    if (recipe) {
      setNewTitle(recipe.title)
      setNewDescription(recipe.description || '')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!selectedTitle) {
      alert('Please select a recipe to edit')
      return
    }

    updateRecipe({
      title: selectedTitle,
      newTitle,
      description: newDescription,
    })

    // Optional: Reset form
    setSelectedTitle('')
    setNewTitle('')
    setNewDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Select a Recipe to Edit:</label>
      <select value={selectedTitle} onChange={handleSelect}>
        <option value="">-- Choose Recipe --</option>
        {recipes.map((recipe) => (
          <option key={recipe.title} value={recipe.title}>
            {recipe.title}
          </option>
        ))}
      </select>

      {selectedTitle && (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="New Title"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="New Description"
          />
          <button type="submit">Update Recipe</button>
        </>
      )}
    </form>
  )
}

export default EditRecipeForm
