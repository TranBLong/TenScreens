import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import styles from './HomeStyles';

// Danh mục lọc sự kiện - icon + màu nền riêng cho từng loại
const CATEGORIES = [
  { id: '1', label: 'Sports', icon: 'basketball-outline', bg: '#FF7A59' },
  { id: '2', label: 'Music', icon: 'musical-notes-outline', bg: '#7A5CFA' },
  { id: '3', label: 'Food', icon: 'restaurant-outline', bg: '#2ECC71' },
];

// Dữ liệu mẫu - thực tế nên fetch từ API
const UPCOMING_EVENTS = [
  {
    id: '1',
    date: '10',
    month: 'JUNE',
    title: 'International Band Music Concert',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    going: 20,
  },
  {
    id: '2',
    date: '10',
    month: 'JUNE',
    title: "Jo Malone London's Day",
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400',
    going: 12,
  },
];

const BOTTOM_TABS = [
  { id: '1', label: 'Explore', icon: 'compass-outline' },
  { id: '2', label: 'Events', icon: 'calendar-outline' },
  { id: '3', label: 'Map', icon: 'map-outline' },
  { id: '4', label: 'Filter', icon: 'options-outline' },
];

const HomeScreen = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState('1');
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#5B4FF0" />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* ---------- Header ---------- */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Ionicons name="menu" size={26} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={styles.locationBox}>
              <Text style={styles.locationLabel}>Current Location</Text>
              <Text style={styles.locationValue}>New York, USA</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Search bar */}
          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <Ionicons name="search" size={18} color="#8A8AA3" />
              <TextInput
                placeholder="Search..."
                placeholderTextColor="#8A8AA3"
                style={styles.searchInput}
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => navigation.navigate('Filter')}
            >
              <Ionicons name="options-outline" size={16} color="#5B4FF0" />
              <Text style={styles.filterText}>Filters</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ---------- Category pills ---------- */}
        <View style={styles.categoryRow}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[
                styles.categoryPill,
                { backgroundColor: cat.bg },
                activeCategory === cat.id && styles.categoryPillActive,
              ]}
              onPress={() => setActiveCategory(cat.id)}
            >
              <Ionicons name={cat.icon} size={16} color="#FFFFFF" />
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ---------- Upcoming Events ---------- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SeeAllEvents')}>
            <Text style={styles.seeAll}>See All ›</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={UPCOMING_EVENTS}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.eventListContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.eventCard}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('EventDetails', { id: item.id })}
            >
              <Image source={{ uri: item.image }} style={styles.eventImage} />
              <View style={styles.eventDateBadge}>
                <Text style={styles.eventDateNum}>{item.date}</Text>
                <Text style={styles.eventDateMonth}>{item.month}</Text>
              </View>
              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.eventGoing}>+{item.going} Going</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* ---------- Invite friends banner ---------- */}
        <View style={styles.inviteBanner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.inviteTitle}>Invite your friends</Text>
            <Text style={styles.inviteSubtitle}>Get $20 for ticket</Text>
            <TouchableOpacity
              style={styles.inviteButton}
              onPress={() => navigation.navigate('Invite')}
            >
              <Text style={styles.inviteButtonText}>INVITE</Text>
            </TouchableOpacity>
          </View>
          <MaterialCommunityIcons name="gift-outline" size={56} color="#FFFFFF" />
        </View>

        {/* ---------- Nearby You ---------- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearby You</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SeeAllEvents')}>
            <Text style={styles.seeAll}>See All ›</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* ---------- Bottom Tab + FAB ---------- */}
      <View style={styles.bottomTab}>
        {BOTTOM_TABS.slice(0, 2).map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={styles.tabItem}
            onPress={() => navigation.navigate(tab.label)}
          >
            <Ionicons name={tab.icon} size={22} color="#8A8AA3" />
            <Text style={styles.tabLabel}>{tab.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Nút tròn nổi ở giữa */}
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate('AddEvent')}
        >
          <Ionicons name="add" size={28} color="#FFFFFF" />
        </TouchableOpacity>

        {BOTTOM_TABS.slice(2).map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={styles.tabItem}
            onPress={() => navigation.navigate(tab.label)}
          >
            <Ionicons name={tab.icon} size={22} color="#8A8AA3" />
            <Text style={styles.tabLabel}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;