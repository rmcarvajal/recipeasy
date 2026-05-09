import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  email: string;
  profilePic: string | null;
  diet: string;
  skillLevel: string;
}

const initialState: UserState = {
  name: localStorage.getItem('user_name') || 'Sarah Martinez',
  email: 'sarah.martinez@email.com',
  profilePic: localStorage.getItem('user_profile_pic') || null,
  diet: localStorage.getItem('user_diet') || 'Any',
  skillLevel: localStorage.getItem('user_skill_level') || 'Beginner',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<{ name: string; profilePic: string | null; diet: string; skillLevel: string }>) => {
      state.name = action.payload.name;
      state.profilePic = action.payload.profilePic;
      state.diet = action.payload.diet;
      state.skillLevel = action.payload.skillLevel;
      
      localStorage.setItem('user_name', action.payload.name);
      localStorage.setItem('user_diet', action.payload.diet);
      localStorage.setItem('user_skill_level', action.payload.skillLevel);
      if (action.payload.profilePic) {
        localStorage.setItem('user_profile_pic', action.payload.profilePic);
      } else {
        localStorage.removeItem('user_profile_pic');
      }
    },
    logout: (state) => {
      state.name = 'Sarah Martinez';
      state.profilePic = null;
      state.diet = 'Any';
      state.skillLevel = 'Beginner';
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_profile_pic');
      localStorage.removeItem('user_diet');
      localStorage.removeItem('user_skill_level');
    }
  },
});

export const { updateProfile, logout } = userSlice.actions;
export default userSlice.reducer;
