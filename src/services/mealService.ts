import type { MealAPI } from '../types/meal';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const getMeals = async (searchTerm: string = ''): Promise<MealAPI[]> => {
  try {
    const response = await fetch(`${API_URL}${searchTerm}`);
    const data = await response.json();
    
    return data.meals || []; 
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};