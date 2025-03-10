import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { completeOnboarding } from '../../store/slices/authSlice';
import { useTheme } from '../../hooks/useTheme';
import Header from '../../components/navigation/Header';

const OnboardingScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const handleComplete = () => {
    dispatch(completeOnboarding({}));
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header 
        title="Welcome to LearningSphere" 
        transparent
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>
          Let's Get Started!
        </Text>
        
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          LearningSphere is your personalized learning companion. We'll help you:
        </Text>

        <View style={styles.features}>
          <Feature 
            title="Track Your Progress" 
            description="Follow your learning journey with detailed progress tracking"
            color={colors.text}
            secondaryColor={colors.textSecondary}
          />
          
          <Feature 
            title="Practice Regularly" 
            description="Build coding habits with daily challenges and exercises"
            color={colors.text}
            secondaryColor={colors.textSecondary}
          />
          
          <Feature 
            title="Learn Together" 
            description="Connect with other learners and share your experiences"
            color={colors.text}
            secondaryColor={colors.textSecondary}
          />
          
          <Feature 
            title="Get Guidance" 
            description="Receive personalized recommendations from our AI coach"
            color={colors.text}
            secondaryColor={colors.textSecondary}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={handleComplete}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

interface FeatureProps {
  title: string;
  description: string;
  color: string;
  secondaryColor: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, color, secondaryColor }) => (
  <View style={styles.feature}>
    <Text style={[styles.featureTitle, { color }]}>{title}</Text>
    <Text style={[styles.featureDescription, { color: secondaryColor }]}>
      {description}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  features: {
    marginBottom: 32,
  },
  feature: {
    marginBottom: 24,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
