import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'article' | 'exercise';
  url: string;
  completed: boolean;
}

interface ResourcesState {
  items: Resource[];
  currentResource: Resource | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ResourcesState = {
  items: [],
  currentResource: null,
  isLoading: false,
  error: null,
};

const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    setResources: (state, action: PayloadAction<Resource[]>) => {
      state.items = action.payload;
    },
    addResource: (state, action: PayloadAction<Resource>) => {
      state.items.push(action.payload);
    },
    updateResource: (state, action: PayloadAction<Resource>) => {
      const index = state.items.findIndex(resource => resource.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeResource: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(resource => resource.id !== action.payload);
    },
    setCurrentResource: (state, action: PayloadAction<Resource | null>) => {
      state.currentResource = action.payload;
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
  setResources,
  addResource,
  updateResource,
  removeResource,
  setCurrentResource,
  setLoading,
  setError,
} = resourcesSlice.actions;

export default resourcesSlice.reducer;
