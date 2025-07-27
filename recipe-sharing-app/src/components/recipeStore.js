import { create } from 'zustand'

export const useRecipeStore = create((set) => ({
  // Initial state
  recipes: [],

  // Actions
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipes) => set({ recipes }),
}))



