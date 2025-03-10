import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/models';

interface UserState {
  profile: User | null;
  preferences: {
    notifications: boolean;
    emailUpdates: boolean;
    theme: 'light' | 'dark';
  };
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  profile: null,
  preferences: {
    notifications: true,
    emailUpdates: true,
    theme: 'light',
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
    updatePreferences: (state, action: PayloadAction<Partial<UserState['preferences']>>) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { updateProfile, updatePreferences, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
