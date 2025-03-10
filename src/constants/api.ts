export const API_BASE_URL = 'https://api.learningsphere.com/v1';

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    PROFILE: '/auth/profile',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
  },
  
  // User endpoints
  USER: {
    DASHBOARD: '/user/dashboard',
    PROGRESS: '/user/progress',
    SETTINGS: '/user/settings',
    NOTIFICATIONS: '/user/notifications',
  },
  
  // Learning endpoints
  LEARNING: {
    ROADMAP: '/learning/roadmap',
    STAGES: '/learning/stages',
    MILESTONES: '/learning/milestones',
    TASKS: '/learning/tasks',
  },
  
  // Resources endpoints
  RESOURCES: {
    LIST: '/resources',
    SEARCH: '/resources/search',
    BOOKMARKS: '/resources/bookmarks',
    CATEGORIES: '/resources/categories',
  },
  
  // Practice endpoints
  PRACTICE: {
    CHALLENGES: '/practice/challenges',
    SUBMISSIONS: '/practice/submissions',
    LEADERBOARD: '/practice/leaderboard',
  },
  
  // Community endpoints
  COMMUNITY: {
    POSTS: '/community/posts',
    COMMENTS: '/community/comments',
    MEMBERS: '/community/members',
    LIKES: '/community/likes',
  },
  
  // Coach endpoints
  COACH: {
    CHAT: '/coach/chat',
    INSIGHTS: '/coach/insights',
    RECOMMENDATIONS: '/coach/recommendations',
    FEEDBACK: '/coach/feedback',
  },
}; 