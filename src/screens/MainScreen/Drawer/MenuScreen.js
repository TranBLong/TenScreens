import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './MenuStyles';

// Danh sách các mục trong menu - tách thành mảng để dễ thêm/bớt sau này
const MENU_ITEMS = [
  { id: '1', label: 'My Profile', icon: 'person-outline', screen: 'Profile' },
  { id: '2', label: 'Massage', icon: 'chatbubble-outline', screen: 'Massage' },
  { id: '3', label: 'Calender', icon: 'calendar-outline', screen: 'Calendar' },
  { id: '4', label: 'Bookmark', icon: 'bookmark-outline', screen: 'Bookmark' },
  { id: '5', label: 'Contact Us', icon: 'mail-outline', screen: 'ContactUs' },
  { id: '6', label: 'Settings', icon: 'settings-outline', screen: 'Settings' },
  { id: '7', label: 'Helps & FAQs', icon: 'help-circle-outline', screen: 'Faqs' },
  { id: '8', label: 'Sign Out', icon: 'log-out-outline', screen: 'SignOut' },
];

const MenuScreen = ({ navigation }) => {
  // Dữ liệu user - thực tế nên lấy từ Redux/Context/API thay vì hardcode
  const user = {
    name: 'Ashfak Sayem',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  };

  const handleNavigate = (screen) => {
    if (screen === 'SignOut') {
      // TODO: xử lý logic đăng xuất thật (clear token, redux, v.v.)
      console.log('Sign out pressed');
      return;
    }
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Phần thông tin user */}
        <View style={styles.profileSection}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.userName}>{user.name}</Text>
        </View>

        {/* Danh sách menu item */}
        <View style={styles.menuList}>
          {MENU_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              activeOpacity={0.6}
              onPress={() => handleNavigate(item.screen)}
            >
              <Ionicons
                name={item.icon}
                size={22}
                color="#6B6B8D"
                style={styles.menuIcon}
              />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Nút Upgrade Pro cố định ở dưới */}
      <TouchableOpacity
        style={styles.upgradeButton}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('UpgradePro')}
      >
        <Ionicons name="ribbon-outline" size={18} color="#5B4FF0" />
        <Text style={styles.upgradeText}>Upgrade Pro</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MenuScreen;