import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import authApi from '../../services/endpoints/authApi';
import storage from '../../services/storage';
import { User, AuthState, LoginCredentials, SignupCredentials } from '../../types/models';
import { setAuthHeader } from '../../services/api';


// Define the interface for the auth state
interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  user: any | null;
}

// Define the initial state
const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  user: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ token: string; user: any }>) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

// Export the actions
export const { loginStart, loginSuccess, loginFailure, logout, clearError } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
  hasCompletedOnboarding: false
};

// Async thunks
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await authApi.login(credentials);
      const { token, user } = response.data;
      setAuthHeader(token);
      await storage.setItem('token', token);
      await storage.setItem('user', JSON.stringify(user));
      return { token, user };
    } catch (error) {
      const apiError = error as ApiError;
      return rejectWithValue(apiError.message || 'Login failed');
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (credentials: SignupCredentials, { rejectWithValue }) => {
    try {
      const response = await authApi.signup(credentials);
      const { token, user } = response.data;
      setAuthHeader(token);
      await storage.setItem('token', token);
      await storage.setItem('user', JSON.stringify(user));
      return { token, user };
    } catch (error) {
      const apiError = error as ApiError;
      return rejectWithValue(apiError.message || 'Signup failed');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logout();
      setAuthHeader(null);
      await storage.removeItem('user');
      await storage.removeItem('token');
      return true;
    } catch (error) {
      const apiError = error as ApiError;
      return rejectWithValue(apiError.message || 'Logout failed');
    }
  }
);

export const initializeApp = createAsyncThunk(
  'auth/initialize',
  async (_, { rejectWithValue }) => {
    try {
      const token = await storage.getItem('token');
      if (token) {
        setAuthHeader(token);
        const user = await authApi.getCurrentUser();
        return { user, token };
      }
      return { user: null, token: null };
    } catch (error) {
      const apiError = error as ApiError;
      return rejectWithValue(apiError.message || 'Initialization failed');
    }
  }
);

export const completeOnboarding = createAsyncThunk(
  'auth/completeOnboarding',
  async (profileData: any, { rejectWithValue }) => {
    try {
      const response = await authApi.updateProfile(profileData);
      return response;
    } catch (error) {
      const apiError = error as ApiError;
      return rejectWithValue(apiError.message || 'Failed to complete onboarding');
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    handleUnauthorized: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.hasCompletedOnboarding = false;
    },
  },
  extraReducers: (builder) => {
    // Handle login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // Handle signup
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signupUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.hasCompletedOnboarding = false;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // Handle logout
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.hasCompletedOnboarding = false;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // Handle app initialization
    builder.addCase(initializeApp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(initializeApp.fulfilled, (state, action: PayloadAction<{ user: User | null; token: string | null }>) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = !!action.payload.user;
      state.hasCompletedOnboarding = action.payload.user?.hasCompletedOnboarding || false;
    });
    builder.addCase(initializeApp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // Handle onboarding completion
    builder.addCase(completeOnboarding.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(completeOnboarding.fulfilled, (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.hasCompletedOnboarding = true;
    });
    builder.addCase(completeOnboarding.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { resetError, handleUnauthorized } = authSlice.actions;
export const authReducer = authSlice.reducer;
