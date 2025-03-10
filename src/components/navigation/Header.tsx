import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '../icons/Icon';
import { useTheme } from '../../hooks/useTheme';

interface HeaderProps {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  leftText?: string;
  rightText?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  rightBadge?: number;
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  leftText,
  rightText,
  onLeftPress,
  onRightPress,
  rightBadge,
  transparent = false
}) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: transparent ? 'transparent' : colors.primary,
          paddingTop: Platform.OS === 'ios' ? 0 : insets.top,
        },
      ]}
    >
      <View style={styles.content}>
        {/* Left button */}
        {(leftIcon || leftText) && (
          <TouchableOpacity
            style={styles.leftContainer}
            onPress={onLeftPress}
            disabled={!onLeftPress}
          >
            {leftIcon && <Icon name={leftIcon} size={24} color={colors.white} />}
            {leftText && <Text style={[styles.buttonText, { color: colors.white }]}>{leftText}</Text>}
          </TouchableOpacity>
        )}

        {/* Title */}
        <Text style={[styles.title, { color: colors.white }]}>{title}</Text>

        {/* Right button */}
        {(rightIcon || rightText) && (
          <TouchableOpacity
            style={styles.rightContainer}
            onPress={onRightPress}
            disabled={!onRightPress}
          >
            <View>
              {rightIcon && <Icon name={rightIcon} size={24} color={colors.white} />}
              {rightBadge !== undefined && rightBadge > 0 && (
                <View
                  style={[
                    styles.badge,
                    { backgroundColor: colors.error },
                  ]}
                >
                  <Text style={styles.badgeText}>
                    {rightBadge > 99 ? '99+' : rightBadge}
                  </Text>
                </View>
              )}
            </View>
            {rightText && <Text style={[styles.buttonText, { color: colors.white }]}>{rightText}</Text>}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    zIndex: 10,
  },
  content: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 40,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 40,
    position: 'relative',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 4,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -6,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 3,
  },
});

export default Header;
