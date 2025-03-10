import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '../icons/Icon';
import { useTheme } from '../../hooks/useTheme';

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          paddingBottom: Platform.OS === 'ios' ? insets.bottom : 8,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel.toString()
            : options.title !== undefined
            ? options.title
            : route.name.replace('Stack', '');

        const isFocused = state.index === index;
        
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

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            <Icon
              name={iconName}
              size={20}
              color={isFocused ? colors.primary : colors.textSecondary}
            />
            <Text
              style={[
                styles.label,
                {
                  color: isFocused ? colors.primary : colors.textSecondary,
                },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default TabBar;
