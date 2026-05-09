import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { MealAPI } from '../../types/meal';
import { getMeals } from '../../services/mealService';
import { getCustomRecipes, saveRecipe, deleteRecipe, clearAllRecipes } from '../../services/recipeService';

interface RecipesState {
  items: MealAPI[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
}

const initialState: RecipesState = {
  items: [],
  loading: false,
  error: null,
  searchTerm: '',
};

export const fetchRecipesAsync = createAsyncThunk(
  'recipes/fetchRecipes',
  async (search: string = '') => {
    const apiMeals = await getMeals(search);
    const localRecipes = getCustomRecipes();
    
    const filteredLocal = localRecipes.filter(r => 
      r.strMeal.toLowerCase().includes(search.toLowerCase())
    );

    return [...filteredLocal, ...apiMeals];
  }
);

export const addRecipeAsync = createAsyncThunk(
  'recipes/addRecipe',
  async (recipe: MealAPI) => {
    saveRecipe(recipe);
    return recipe; // Return so we can add it to state locally
  }
);

export const deleteRecipeAsync = createAsyncThunk(
  'recipes/deleteRecipe',
  async (id: string) => {
    deleteRecipe(id);
    return id; // Return ID to remove from state
  }
);

export const clearRecipesAsync = createAsyncThunk(
  'recipes/clearRecipes',
  async () => {
    clearAllRecipes();
    return;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // fetchRecipesAsync
      .addCase(fetchRecipesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchRecipesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch recipes';
      })
      .addCase(addRecipeAsync.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(deleteRecipeAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.idMeal !== action.payload);
      })
      .addCase(clearRecipesAsync.fulfilled, (state) => {
        state.items = state.items.filter(item => item.idMeal.length <= 10);
      });
  },
});

export const { setSearchTerm } = recipesSlice.actions;
export default recipesSlice.reducer;
