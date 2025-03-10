import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../hooks/useTheme';
import Icon from '../components/icons/Icon';
import TabBar from '../components/navigation/TabBar';

// Import screens
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import RoadmapScreen from '../screens/roadmap/RoadmapScreen';
import ResourcesScreen from '../screens/resources/ResourcesScreen';
import PracticeScreen from '../screens/practice/PracticeScreen';
import CommunityScreen from '../screens/community/CommunityScreen';
import CoachScreen from '../screens/coach/CoachScreen';
import StageDetailScreen from '../screens/roadmap/StageDetailScreen';
import MilestoneScreen from '../screens/roadmap/MilestoneScreen';
import TaskDetailScreen from '../screens/roadmap/TaskDetailScreen';
import ResourceDetailScreen from '../screens/resources/ResourceDetailScreen';
import SearchScreen from '../screens/resources/SearchScreen';
import BookmarksScreen from '../screens/resources/BookmarksScreen';
import ChallengeListScreen from '../screens/practice/ChallengeListScreen';
import PracticeDetailScreen from '../screens/practice/PracticeDetailScreen';
import CodeEditorScreen from '../screens/practice/CodeEditorScreen';
import ResultsScreen from '../screens/practice/ResultsScreen';
import ForumScreen from '../screens/community/ForumScreen';
import PostDetailScreen from '../screens/community/PostDetailScreen';
import MembersScreen from '../screens/community/MembersScreen';
import CreatePostScreen from '../screens/community/CreatePostScreen';
import ChatScreen from '../screens/coach/ChatScreen';
import FeedbackScreen from '../screens/coach/FeedbackScreen';
import RecommendationsScreen from '../screens/coach/RecommendationsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/profile/SettingsScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import NotificationsScreen from '../screens/profile/NotificationsScreen';
import SubscriptionScreen from '../screens/profile/SubscriptionScreen';
import QRScreen from '../screens/profile/QRScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LearnStack = createStackNavigator();
const PracticeStack = createStackNavigator();
const CommunityStack = createStackNavigator();
const CoachStack = createStackNavigator();

// Home Stack
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen 
      name="Dashboard" 
      component={DashboardScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen name="TaskDetail" component={TaskDetailScreen} />
    <HomeStack.Screen name="Profile" component={ProfileScreen} />
    <HomeStack.Screen name="Settings" component={SettingsScreen} />
    <HomeStack.Screen name="EditProfile" component={EditProfileScreen} />
    <HomeStack.Screen name="Notifications" component={NotificationsScreen} />
    <HomeStack.Screen name="Subscription" component={SubscriptionScreen} />
    <HomeStack.Screen 
      name="QRCode" 
      component={QRScreen}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

// Learn Stack
const LearnStackScreen = () => (
  <LearnStack.Navigator>
    <LearnStack.Screen 
      name="Roadmap" 
      component={RoadmapScreen}
      options={{ headerShown: false }}
    />
    <LearnStack.Screen name="StageDetail" component={StageDetailScreen} />
    <LearnStack.Screen name="Milestone" component={MilestoneScreen} />
    <LearnStack.Screen name="TaskDetail" component={TaskDetailScreen} />
    <LearnStack.Screen name="ResourceDetail" component={ResourceDetailScreen} />
    <LearnStack.Screen name="Resources" component={ResourcesScreen} />
    <LearnStack.Screen name="Search" component={SearchScreen} />
    <LearnStack.Screen name="Bookmarks" component={BookmarksScreen} />
  </LearnStack.Navigator>
);

// Practice Stack
const PracticeStackScreen = () => (
  <PracticeStack.Navigator>
    <PracticeStack.Screen 
      name="Practice" 
      component={PracticeScreen}
      options={{ headerShown: false }}
    />
    <PracticeStack.Screen name="ChallengeList" component={ChallengeListScreen} />
    <PracticeStack.Screen name="PracticeDetail" component={PracticeDetailScreen} />
    <PracticeStack.Screen 
      name="CodeEditor" 
      component={CodeEditorScreen}
      options={{ headerShown: false }}
    />
    <PracticeStack.Screen name="Results" component={ResultsScreen} />
  </PracticeStack.Navigator>
);

// Community Stack
const CommunityStackScreen = () => (
  <CommunityStack.Navigator>
    <CommunityStack.Screen 
      name="Community" 
      component={CommunityScreen}
      options={{ headerShown: false }}
    />
    <CommunityStack.Screen name="Forum" component={ForumScreen} />
    <CommunityStack.Screen name="PostDetail" component={PostDetailScreen} />
    <CommunityStack.Screen name="Members" component={MembersScreen} />
    <CommunityStack.Screen name="CreatePost" component={CreatePostScreen} />
  </CommunityStack.Navigator>
);

// Coach Stack
const CoachStackScreen = () => (
  <CoachStack.Navigator>
    <CoachStack.Screen 
      name="Coach" 
      component={CoachScreen}
      options={{ headerShown: false }}
    />
    <CoachStack.Screen 
      name="Chat" 
      component={ChatScreen}
      options={{ headerShown: false }}
    />
    <CoachStack.Screen name="Feedback" component={FeedbackScreen} />
    <CoachStack.Screen name="Recommendations" component={RecommendationsScreen} />
  </CoachStack.Navigator>
);

const MainNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeStack') {
            iconName = 'home';
          } else if (route.name === 'LearnStack') {
            iconName = 'book-open';
          } else if (route.name === 'PracticeStack') {
            iconName = 'code';
          } else if (route.name === 'CommunityStack') {
            iconName = 'users';
          } else if (route.name === 'CoachStack') {
            iconName = 'message-square';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.textSecondary,
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStackScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen 
        name="LearnStack" 
        component={LearnStackScreen} 
        options={{ title: 'Learn' }}
      />
      <Tab.Screen 
        name="PracticeStack" 
        component={PracticeStackScreen} 
        options={{ title: 'Practice' }}
      />
      <Tab.Screen 
        name="CommunityStack" 
        component={CommunityStackScreen} 
        options={{ title: 'Community' }}
      />
      <Tab.Screen 
        name="CoachStack" 
        component={CoachStackScreen} 
        options={{ title: 'Coach' }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
