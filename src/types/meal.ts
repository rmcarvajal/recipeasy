export interface Ingredient {
  name: string;
  quantity: string;
  measure: string;
}

export interface Step {
  text: string;
  image?: string;
}

export interface MealAPI {
  idMeal: string;
  strMeal: string;     
  strMealThumb: string;
  strCategory: string;
  strInstructions?: string;
  timeEstimate?: string;
  ingredients?: Ingredient[];
  steps?: Step[];
  description?: string;
}