import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './MenuStyles';

const MENU_ITEMS = [
  { id: '1', label: 'My Profile', icon: 'person-outline', screen: 'Profile' },
  { id: '2', label: 'Message', icon: 'chatbubble-outline', screen: 'Message', badge: '3' },
  { id: '3', label: 'Calendar', icon: 'calendar-outline', screen: 'Calendar' },
  { id: '4', label: 'Bookmark', icon: 'bookmark-outline', screen: 'Bookmark' },
  { id: '5', label: 'Contact Us', icon: 'mail-outline', screen: 'ContactUs' },
  { id: '6', label: 'Settings', icon: 'settings-outline', screen: 'Settings' },
  { id: '7', label: 'Helps & FAQs', icon: 'help-circle-outline', screen: 'Faqs' },
  { id: '8', label: 'Sign Out', icon: 'log-out-outline', screen: 'SignOut' },
];

const MenuScreen = ({ navigation }) => {
  const user = {
    name: 'Ashfak Sayem',
    avatar: require('../../../../assets/images/home/menu/avatarmenu.png'),
  };

  const handleNavigate = (screen) => {
    if (screen === 'SignOut') {
      console.log('Sign out pressed');
      return;
    }
    if (navigation?.navigate) {
      navigation.navigate(screen);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Thông tin User */}
          <View style={styles.profileSection}>
            <Image source={typeof user.avatar === 'string' ? { uri: user.avatar } : user.avatar} style={styles.avatar} />
            <Text style={styles.userName}>{user.name}</Text>
          </View>

          {/* Danh sách Menu Items */}
          <View style={styles.menuList}>
            {MENU_ITEMS.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                activeOpacity={0.6}
                onPress={() => handleNavigate(item.screen)}
              >
                <View style={styles.iconWrapper}>
                  <Ionicons
                    name={item.icon}
                    size={23}
                    color="#120D26"
                  />
                  {item.badge && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{item.badge}</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Nút Upgrade Pro */}
        <TouchableOpacity
          style={styles.upgradeButton}
          activeOpacity={0.8}
          onPress={() => navigation?.navigate?.('UpgradePro')}
        >
          <MaterialCommunityIcons name="crown-outline" size={20} color="#00D2FF" />
          <Text style={styles.upgradeText}>Upgrade Pro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;