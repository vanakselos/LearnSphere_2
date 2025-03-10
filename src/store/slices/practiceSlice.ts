import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
  score?: number;
}

interface PracticeState {
  exercises: Exercise[];
  currentExercise: Exercise | null;
  progress: {
    completed: number;
    total: number;
  };
  isLoading: boolean;
  error: string | null;
}

const initialState: PracticeState = {
  exercises: [],
  currentExercise: null,
  progress: {
    completed: 0,
    total: 0,
  },
  isLoading: false,
  error: null,
};

const practiceSlice = createSlice({
  name: 'practice',
  initialState,
  reducers: {
    setExercises: (state, action: PayloadAction<Exercise[]>) => {
      state.exercises = action.payload;
      state.progress.total = action.payload.length;
      state.progress.completed = action.payload.filter(ex => ex.completed).length;
    },
    setCurrentExercise: (state, action: PayloadAction<Exercise | null>) => {
      state.currentExercise = action.payload;
    },
    completeExercise: (state, action: PayloadAction<{ id: string; score?: number }>) => {
      const exercise = state.exercises.find(ex => ex.id === action.payload.id);
      if (exercise) {
        exercise.completed = true;
        exercise.score = action.payload.score;
        state.progress.completed++;
      }
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
  setExercises,
  setCurrentExercise,
  completeExercise,
  setLoading,
  setError,
} = practiceSlice.actions;

export default practiceSlice.reducer;
