import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Animated, 
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

// Toast types
export type ToastType = 'success' | 'error' | 'info' | 'warning';

// Toast message interface
interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

// Initial state for the toast slice
interface ToastState {
  messages: ToastMessage[];
}

// You'll need to create this slice later
// For now, we'll use a simple implementation
const Toast = () => {
  // This will be replaced with Redux state once you have the toast slice
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;
  
  // Mock function to show toast - replace with Redux action later
  const showToast = (message: string, type: ToastType = 'info', duration: number = 3000) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newMessage = { id, type, message, duration };
    
    setMessages([...messages, newMessage]);
    
    // Auto dismiss after duration
    setTimeout(() => {
      dismissToast(id);
    }, duration);
  };
  
  // Mock function to dismiss toast - replace with Redux action later
  const dismissToast = (id: string) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };
  
  useEffect(() => {
    if (messages.length > 0) {
      // Animate in
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Animate out
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 20,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [messages, fadeAnim, translateY]);
  
  // Get icon based on toast type
  const getIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return <Ionicons name="checkmark-circle" size={24} color="#10B981" />;
      case 'error':
        return <Ionicons name="close-circle" size={24} color="#EF4444" />;
      case 'warning':
        return <Ionicons name="warning" size={24} color="#F59E0B" />;
      case 'info':
      default:
        return <Ionicons name="information-circle" size={24} color="#3B82F6" />;
    }
  };
  
  // Get background color based on toast type
  const getBackgroundColor = (type: ToastType) => {
    switch (type) {
      case 'success':
        return '#D1FAE5';
      case 'error':
        return '#FEE2E2';
      case 'warning':
        return '#FEF3C7';
      case 'info':
      default:
        return '#DBEAFE';
    }
  };
  
  if (messages.length === 0) {
    return null;
  }
  
  // Only show the most recent toast
  const currentToast = messages[messages.length - 1];
  
  return (
    <Animated.View 
      style={[
        styles.container, 
        { 
          backgroundColor: getBackgroundColor(currentToast.type),
          opacity: fadeAnim,
          transform: [{ translateY }]
        }
      ]}
    >
      <View style={styles.iconContainer}>
        {getIcon(currentToast.type)}
      </View>
      <Text style={styles.message}>{currentToast.message}</Text>
      <TouchableOpacity 
        style={styles.closeButton} 
        onPress={() => dismissToast(currentToast.id)}
      >
        <Ionicons name="close" size={20} color="#6B7280" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    maxWidth: width - 40,
    minHeight: 60,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 1000,
  },
  iconContainer: {
    marginRight: 12,
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  closeButton: {
    padding: 4,
  },
});

export default Toast;