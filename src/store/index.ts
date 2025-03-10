import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER 
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import reducers
import { authReducer } from './slices/authSlice';
import userReducer from './slices/userSlice';
import roadmapReducer from './slices/roadmapSlice';
import tasksReducer from './slices/tasksSlice';
import resourcesReducer from './slices/resourcesSlice';
import practiceReducer from './slices/practiceSlice';
import communityReducer from './slices/communitySlice';
import coachReducer from './slices/coachSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'user'] // Only persist auth and user state
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  roadmap: roadmapReducer,
  tasks: tasksReducer,
  resources: resourcesReducer,
  practice: practiceReducer,
  community: communityReducer,
  coach: coachReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
