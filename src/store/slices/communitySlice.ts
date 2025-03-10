import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: string;
  userId: string;
  content: string;
  likes: number;
  comments: Comment[];
  createdAt: string;
}

interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
}

interface CommunityState {
  posts: Post[];
  currentPost: Post | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CommunityState = {
  posts: [],
  currentPost: null,
  isLoading: false,
  error: null,
};

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    setCurrentPost: (state, action: PayloadAction<Post | null>) => {
      state.currentPost = action.payload;
    },
    addComment: (state, action: PayloadAction<{ postId: string; comment: Comment }>) => {
      const post = state.posts.find(p => p.id === action.payload.postId);
      if (post) {
        post.comments.push(action.payload.comment);
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
  setPosts,
  addPost,
  updatePost,
  deletePost,
  setCurrentPost,
  addComment,
  setLoading,
  setError,
} = communitySlice.actions;

export default communitySlice.reducer;
