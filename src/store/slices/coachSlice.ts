import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Recommendation {
  id: string;
  type: 'resource' | 'exercise' | 'path';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

interface CoachState {
  recommendations: Recommendation[];
  currentRecommendation: Recommendation | null;
  insights: {
    strengths: string[];
    weaknesses: string[];
    progress: number;
  };
  isLoading: boolean;
  error: string | null;
}

const initialState: CoachState = {
  recommendations: [],
  currentRecommendation: null,
  insights: {
    strengths: [],
    weaknesses: [],
    progress: 0,
  },
  isLoading: false,
  error: null,
};

const coachSlice = createSlice({
  name: 'coach',
  initialState,
  reducers: {
    setRecommendations: (state, action: PayloadAction<Recommendation[]>) => {
      state.recommendations = action.payload;
    },
    addRecommendation: (state, action: PayloadAction<Recommendation>) => {
      state.recommendations.push(action.payload);
    },
    updateRecommendation: (state, action: PayloadAction<Recommendation>) => {
      const index = state.recommendations.findIndex(rec => rec.id === action.payload.id);
      if (index !== -1) {
        state.recommendations[index] = action.payload;
      }
    },
    setCurrentRecommendation: (state, action: PayloadAction<Recommendation | null>) => {
      state.currentRecommendation = action.payload;
    },
    updateInsights: (state, action: PayloadAction<Partial<CoachState['insights']>>) => {
      state.insights = { ...state.insights, ...action.payload };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setRecommendations,
  addRecommendation,
  updateRecommendation,
  setCurrentRecommendation,
  updateInsights,
  setLoading,
  setError,
} = coachSlice.actions;

export default coachSlice.reducer;
