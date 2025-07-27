import { useState } from 'react'
import { useRecipeStore } from './recipeStore'

const DeleteRecipeButton= () => {
  const deleteByTitle = useRecipeStore((state) => state.deleteByTitle)
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.trim() === '') {
      alert('Please enter a title to delete')
      return
    }

    deleteByTitle(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter recipe title to delete"
      />
      <button type="submit">Delete Recipe</button>
    </form>
  )
}

export default DeleteRecipeButton
