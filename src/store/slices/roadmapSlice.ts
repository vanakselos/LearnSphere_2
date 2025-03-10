import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoadmapState {
  stages: any[];
  currentStage: any | null;
  progress: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: RoadmapState = {
  stages: [],
  currentStage: null,
  progress: 0,
  isLoading: false,
  error: null,
};

const roadmapSlice = createSlice({
  name: 'roadmap',
  initialState,
  reducers: {
    setStages: (state, action: PayloadAction<any[]>) => {
      state.stages = action.payload;
    },
    setCurrentStage: (state, action: PayloadAction<any>) => {
      state.currentStage = action.payload;
    },
    updateProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
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
  setStages,
  setCurrentStage,
  updateProgress,
  setLoading,
  setError,
} = roadmapSlice.actions;

export default roadmapSlice.reducer;
