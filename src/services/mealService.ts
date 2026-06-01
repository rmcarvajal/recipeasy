import type { MealAPI } from '../types/meal';
import { supabase } from '../supabase/client';

//const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const getMeals = async (searchTerm: string = ''): Promise<MealAPI[]> => {
  try {
    const supResponse = await supabase.from('Recipe').select('*').ilike("strMeal",`%${searchTerm}%`)
//    const response = await fetch(`${API_URL}${searchTerm}`);
    const data = supResponse.data;
    console.log(supResponse)

    return data || []; 
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};