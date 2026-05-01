import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  email: string;
  profilePic: string | null;
}

const initialState: UserState = {
  name: localStorage.getItem('user_name') || 'Sarah Martinez',
  email: 'sarah.martinez@email.com',
  profilePic: localStorage.getItem('user_profile_pic') || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<{ name: string; profilePic: string | null }>) => {
      state.name = action.payload.name;
      state.profilePic = action.payload.profilePic;
      
      // Sync to localStorage
      localStorage.setItem('user_name', action.payload.name);
      if (action.payload.profilePic) {
        localStorage.setItem('user_profile_pic', action.payload.profilePic);
      } else {
        localStorage.removeItem('user_profile_pic');
      }
    },
    logout: (state) => {
      state.name = 'Sarah Martinez'; // Or default name
      state.profilePic = null;
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_profile_pic');
    }
  },
});

export const { updateProfile, logout } = userSlice.actions;
export default userSlice.reducer;
