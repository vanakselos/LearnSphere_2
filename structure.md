// LearnSphere Mobile App - React Native Structure

// Project root
/LearnSphere
package.json
app.json
babel.config.js
tsconfig.json
metro.config.js
index.js
App.tsx

// Source code directory
/src
// App initialization and navigation
/navigation
AppNavigator.tsx        // Main navigation container
AuthNavigator.tsx       // Authentication flow
MainNavigator.tsx       // Main app tabs after login
NavigationService.ts    // Navigation utility functions

code

// Redux state management
/store
  /slices                 // Redux Toolkit slices for feature-specific state
    authSlice.ts
    userSlice.ts
    roadmapSlice.ts
    tasksSlice.ts
    resourcesSlice.ts
    practiceSlice.ts
    communitySlice.ts
    coachSlice.ts
  index.ts                // Store configuration and root reducer
  types.ts                // TypeScript types for state

// API and data services
/services
  api.ts                  // API client setup (axios, fetch, etc)
  /endpoints              // API endpoint implementations
    authApi.ts
    userApi.ts
    roadmapApi.ts
    taskApi.ts
    resourceApi.ts
    practiceApi.ts
    communityApi.ts
    coachApi.ts
  storage.ts              // Local storage utilities
  analytics.ts            // Analytics service
  notifications.ts        // Push notifications handler

// Authentication and onboarding screens
/screens/auth
  LoginScreen.tsx
  SignupScreen.tsx
  ForgotPasswordScreen.tsx
  OnboardingScreen.tsx
  ProfileSetupScreen.tsx

// Dashboard (home) screens and components
/screens/dashboard
  DashboardScreen.tsx     // Main dashboard container
  /components
    SkillHeader.tsx       // Current skill header
    ProgressBar.tsx       // Progress visualization
    DailyStreak.tsx       // Streak card component
    TodaysTasks.tsx       // Daily task list
    CurrentChallenge.tsx  // Challenge card
    CoachInsights.tsx     // AI coach insights
    LearningRoadmap.tsx   // Roadmap visualization
    ResourcePreview.tsx   // Featured resources
    CommunityPreview.tsx  // Community activity
    WeeklyProgress.tsx    // Progress statistics

// Learning roadmap screens
/screens/roadmap
  RoadmapScreen.tsx       // Roadmap overview
  StageDetailScreen.tsx   // Stage details
  MilestoneScreen.tsx     // Milestone details
  TaskDetailScreen.tsx    // Task detail view

// Learning resources
/screens/resources
  ResourcesScreen.tsx     // Resource library main screen
  ResourceDetailScreen.tsx // Individual resource viewer
  SearchScreen.tsx        // Search resources
  BookmarksScreen.tsx     // Saved resources

// Practice exercises
/screens/practice
  PracticeScreen.tsx      // Practice arena main screen
  ChallengeListScreen.tsx // List of coding challenges
  PracticeDetailScreen.tsx // Individual practice exercise
  CodeEditorScreen.tsx    // Code editor
  ResultsScreen.tsx       // Results and feedback

// Community
/screens/community
  CommunityScreen.tsx     // Community hub main screen
  ForumScreen.tsx         // Discussion forums
  PostDetailScreen.tsx    // Thread/post detail
  MembersScreen.tsx       // Community members
  CreatePostScreen.tsx    // Create new post

// AI Coach
/screens/coach
  CoachScreen.tsx         // AI coach main screen
  ChatScreen.tsx          // Conversation interface
  FeedbackScreen.tsx      // Progress feedback
  RecommendationsScreen.tsx // Coach recommendations

// Profile and settings
/screens/profile
  ProfileScreen.tsx       // User profile
  SettingsScreen.tsx      // App settings
  EditProfileScreen.tsx   // Edit profile
  NotificationsScreen.tsx // Notification settings
  SubscriptionScreen.tsx  // Subscription management

// Common UI components
/components
  /buttons
    PrimaryButton.tsx
    SecondaryButton.tsx
    IconButton.tsx
  /inputs
    TextField.tsx
    SearchBar.tsx
    Checkbox.tsx
    RadioButton.tsx
  /layout
    Screen.tsx            // Screen container with common styling
    Card.tsx              // Card component
    Separator.tsx         // Line separator
    SafeAreaWrapper.tsx   // Safe area handling
  /navigation
    Header.tsx            // Custom navigation header
    TabBar.tsx            // Custom tab bar
    Drawer.tsx            // Custom drawer menu
  /feedback
    Loading.tsx           // Loading spinner/indicator
    EmptyState.tsx        // Empty list state
    ErrorState.tsx        // Error handling UI
    Toast.tsx             // Toast notification
  /modals
    BottomSheet.tsx       // Bottom sheet component
    Dialog.tsx            // Modal dialog
    Popover.tsx           // Popover component

// Hooks and utilities
/hooks
  useAuth.ts              // Authentication state and methods
  useForm.ts              // Form handling
  useDebounce.ts          // Debounce functionality
  useTheme.ts             // Theme access
  useBackHandler.ts       // Back button handling

// Theme and styling
/theme
  colors.ts               // Color definitions
  typography.ts           // Text styles
  spacing.ts              // Layout spacing constants
  shadows.ts              // Shadow styles
  animations.ts           // Animation constants
  index.ts                // Theme export

// Utilities
/utils
  validation.ts           // Input validation
  formatting.ts           // Text/data formatting
  datetime.ts             // Date/time utilities
  permissions.ts          // Permission handling
  tracking.ts             // Analytics tracking helpers
  logger.ts               // Logging utilities

// Assets
/assets
  /images                 // Image files
  /icons                  // Icon files
  /lottie                 // Animation files
  /fonts                  // Custom fonts

// Constants
/constants
  routes.ts               // Navigation route names
  api.ts                  // API endpoints
  errors.ts               // Error messages
  animations.ts           // Animation names
  metrics.ts              // App metrics and dimensions

// Types
/types
  api.ts                  // API response/request types
  models.ts               // Data model interfaces
  navigation.ts           // Navigation param types
  components.ts           // Component prop types
// Testing
/tests
setup.ts
/screens
/components
/services
/utils

// Configuration files for different environments
/config
development.ts
staging.ts
production.t