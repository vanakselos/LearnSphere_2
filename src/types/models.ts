// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  skills: Skill[];
  streak: number;
  notifications?: {
    unread: number;
    items: Notification[];
  };
  weeklyProgress: WeeklyProgress[];
  hasCompletedOnboarding: boolean;
  createdAt: string;
  updatedAt: string;
}

// Authentication types
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  hasCompletedOnboarding: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
}

// Skills and Learning types
export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  progress: number;
  startedAt: string;
  currentStage?: Stage;
  icon?: string;
}

export interface Stage {
  id: string;
  name: string;
  description: string;
  order: number;
  progress: number;
  isCompleted: boolean;
  milestones: Milestone[];
  lessons: number;
  tasks: number;
  durationEstimate: string;
}

export interface Milestone {
  id: string;
  name: string;
  description: string;
  order: number;
  isCompleted: boolean;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: 'lesson' | 'exercise' | 'quiz' | 'project';
  completed: boolean;
  dueDate?: string;
  isToday: boolean;
  points: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: string;
  currentDay: number;
  totalDays: number;
  participants: number;
  taskForToday?: {
    id: string;
    title: string;
  };
}

// Resource types
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'article' | 'tutorial' | 'book' | 'course';
  url: string;
  durationMinutes?: number;
  rating: number;
  ratingCount: number;
  isBookmarked: boolean;
  thumbnailUrl?: string;
}

// Community types
export interface Post {
  id: string;
  title?: string;
  content: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string;
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
}

export interface Comment {
  id: string;
  content: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string;
  likesCount: number;
}

// Coach types
export interface CoachInsight {
  id: string;
  type: 'strength' | 'improvement' | 'milestone';
  content: string;
  createdAt: string;
}

// Notification types
export interface Notification {
  id: string;
  type: 'achievement' | 'reminder' | 'social' | 'milestone';
  message: string;
  createdAt: string;
  read: boolean;
}

// Progress tracking
export interface WeeklyProgress {
  day: string;
  hours: number;
} 