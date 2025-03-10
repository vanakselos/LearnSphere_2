import React, { ReactNode } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, ViewStyle } from 'react-native';

interface ScreenProps {
  children: ReactNode;
  style?: ViewStyle;
  safeArea?: boolean;
  statusBarColor?: string;
}

export const Screen: React.FC<ScreenProps> = ({
  children,
  style,
  safeArea = true,
  statusBarColor = '#4F46E5',
}) => {
  const Container = safeArea ? SafeAreaView : View;

  return (
    <Container style={[styles.container, style]}>
      <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />
      <View style={styles.content}>{children}</View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});