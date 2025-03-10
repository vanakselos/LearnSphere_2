import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Header from '../../components/navigation/Header';
import Icon from '../../components/icons/Icon';
import { useTheme } from '../../hooks/useTheme';
import { RootState } from '../../store';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const user = useSelector((state: RootState) => state.auth.user);

  const menuItems = [
    {
      icon: 'qr-code',
      title: 'My QR Code',
      onPress: () => navigation.navigate('QRCode'),
    },
    {
      icon: 'edit',
      title: 'Edit Profile',
      onPress: () => navigation.navigate('EditProfile'),
    },
    {
      icon: 'settings',
      title: 'Settings',
      onPress: () => navigation.navigate('Settings'),
    },
    {
      icon: 'bell',
      title: 'Notifications',
      onPress: () => navigation.navigate('Notifications'),
    },
    {
      icon: 'star',
      title: 'Subscription',
      onPress: () => navigation.navigate('Subscription'),
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Profile"
        leftIcon="menu"
        onLeftPress={() => {}}
      />
      
      <ScrollView>
        <View style={styles.profileHeader}>
          <View style={[styles.avatar, { backgroundColor: colors.primaryLight }]}>
            <Text style={styles.avatarText}>
              {user?.name?.charAt(0).toUpperCase() || '?'}
            </Text>
          </View>
          <Text style={[styles.name, { color: colors.text }]}>{user?.name}</Text>
          <Text style={[styles.email, { color: colors.textSecondary }]}>{user?.email}</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, { borderBottomColor: colors.border }]}
              onPress={item.onPress}
            >
              <View style={styles.menuItemContent}>
                <Icon name={item.icon} size={24} color={colors.primary} />
                <Text style={[styles.menuItemText, { color: colors.text }]}>
                  {item.title}
                </Text>
              </View>
              <Icon name="chevron-right" size={24} color={colors.textSecondary} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
  },
  menuContainer: {
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 16,
  },
});

export default ProfileScreen;
