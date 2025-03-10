import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './src/navigation/AppNavigator';
import { store, persistor } from './src/store';
import { ThemeProvider } from './src/hooks/useTheme';
import Toast from './src/components/feedback/Toast';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />
            <SafeAreaView style={{ flex: 1 }}>
              <AppNavigator />
              <Toast />
            </SafeAreaView>
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
