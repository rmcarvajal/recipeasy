import type { MealAPI } from '../types/meal';

const LOCAL_STORAGE_KEY = 'recipeasy_custom_recipes';

export const getCustomRecipes = (): MealAPI[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('Error parsing custom recipes from localStorage:', error);
    return [];
  }
};

export const saveRecipe = (recipe: MealAPI): void => {
  const currentRecipes = getCustomRecipes();
  const updatedRecipes = [...currentRecipes, recipe];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedRecipes));
};

export const deleteRecipe = (id: string): void => {
  const currentRecipes = getCustomRecipes();
  const updatedRecipes = currentRecipes.filter(r => r.idMeal !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedRecipes));
};

export const clearAllRecipes = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
