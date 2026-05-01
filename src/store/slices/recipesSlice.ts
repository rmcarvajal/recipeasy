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
      // addRecipeAsync
      .addCase(addRecipeAsync.fulfilled, (state, action) => {
        // Option 1: fetch everything again (or dispatch fetchRecipesAsync again)
        // Option 2: Add it to the top of the list locally
        state.items.unshift(action.payload);
      })
      // deleteRecipeAsync
      .addCase(deleteRecipeAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.idMeal !== action.payload);
      })
      // clearRecipesAsync
      .addCase(clearRecipesAsync.fulfilled, (state) => {
        // Removes only local ones from state, keeping API ones
        // Easiest is to just rely on next fetch, or filter them out here.
        // Assuming ID > 10 chars is local based on Recipes.tsx logic
        state.items = state.items.filter(item => item.idMeal.length <= 10);
      });
  },
});

export const { setSearchTerm } = recipesSlice.actions;
export default recipesSlice.reducer;
