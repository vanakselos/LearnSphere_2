import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// Import screens
import LoadingScreen from '../screens/auth/LoadingScreen';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import HomeStackScreen from './HomeNavigator';
import AuthStackScreen from './AuthNavigator';

const RootStack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const { isLoading, isAuthenticated, hasCompletedOnboarding } = useSelector(
    (state: RootState) => state.auth
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <RootStack.Screen name="Auth" component={AuthStackScreen} />
        ) : !hasCompletedOnboarding ? (
          <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
        ) : (
          <RootStack.Screen name="Home" component={HomeStackScreen} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
