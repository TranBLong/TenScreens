import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import styles from './HomeStyles';

const CATEGORIES = [
  { id: '1', label: 'Sports', icon: 'basketball-outline', bg: '#F0635A' },
  { id: '2', label: 'Music', icon: 'musical-notes-outline', bg: '#F59762' },
  { id: '3', label: 'Food', icon: 'restaurant-outline', bg: '#29D697' },
  { id: '4', label: 'Art', icon: 'color-palette-outline', bg: '#00D2FF' },
];

const UPCOMING_EVENTS = [
  {
    id: '1',
    date: '10',
    month: 'JUNE',
    title: 'International Band Mu...',
    image: require('../../../../assets/images/home/mainscreens/handmotherandson.png'),
    going: 20,
    address: '36 Guild Street London, UK',
    avatars: [
      require('../../../../assets/images/home/mainscreens/miniavatar/ovalcopy4.png'),
      require('../../../../assets/images/home/mainscreens/miniavatar/ovalcopy.png'),
      require('../../../../assets/images/home/mainscreens/miniavatar/oval.png'),
    ],
  },
  {
    id: '2',
    date: '10',
    month: 'JUNE',
    title: "Jo Malone London's...",
    image: require('../../../../assets/images/home/mainscreens/trainers.png'),
    going: 20,
    address: 'Radius Gallery London, UK',
    avatars: [
      require('../../../../assets/images/home/mainscreens/miniavatar/ovalcopy4.png'),
      require('../../../../assets/images/home/mainscreens/miniavatar/ovalcopy.png'),
      require('../../../../assets/images/home/mainscreens/miniavatar/oval.png'),
    ],
  },
];

const BOTTOM_TABS = [
  { id: '1', label: 'Explore', icon: 'compass' },
  { id: '2', label: 'Events', icon: 'calendar-outline' },
  { id: '3', label: 'Map', icon: 'location-outline' },
  { id: '4', label: 'Profile', icon: 'person-outline' },
];

const HomeScreen = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState('1');
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* ---------- Header ---------- */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Ionicons name="menu-outline" size={28} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={styles.locationBox}>
              <View style={styles.locationLabelRow}>
                <Text style={styles.locationLabel}>Current Location</Text>
                <Ionicons name="caret-down" size={12} color="#FFFFFF" />
              </View>
              <Text style={styles.locationValue}>New York, USA</Text>
            </View>

            <TouchableOpacity
              style={styles.notificationBtn}
              onPress={() => navigation.navigate('Notifications')}
            >
              <Ionicons name="notifications-outline" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Search bar */}
          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <Ionicons name="search" size={20} color="#FFFFFF" />
              <View style={styles.searchDivider} />
              <TextInput
                placeholder="Search..."
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                style={styles.searchInput}
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => navigation.navigate('Filter')}
            >
              <Ionicons name="options-outline" size={16} color="#FFFFFF" />
              <Text style={styles.filterText}>Filters</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ---------- Horizontal Category Pills ---------- */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContainer}
        >
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[
                styles.categoryPill,
                { backgroundColor: cat.bg },
              ]}
              onPress={() => setActiveCategory(cat.id)}
              activeOpacity={0.8}
            >
              <Ionicons name={cat.icon} size={18} color="#FFFFFF" />
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ---------- Upcoming Events ---------- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <TouchableOpacity
            style={styles.seeAllRow}
            onPress={() => navigation.navigate('SeeAllEvents')}
          >
            <Text style={styles.seeAll}>See All</Text>
            <Ionicons name="caret-forward" size={12} color="#747688" />
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
              activeOpacity={0.9}
              onPress={() => navigation.navigate('EventDetails', { id: item.id })}
            >
              <View style={styles.imageContainer}>
                <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.eventImage} />

                {/* Date badge */}
                <View style={styles.eventDateBadge}>
                  <Text style={styles.eventDateNum}>{item.date}</Text>
                  <Text style={styles.eventDateMonth}>{item.month}</Text>
                </View>

                {/* Bookmark button */}
                <TouchableOpacity style={styles.bookmarkBadge}>
                  <Ionicons name="bookmark" size={14} color="#EB5757" />
                </TouchableOpacity>
              </View>

              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle} numberOfLines={1}>
                  {item.title}
                </Text>

                {/* Avatar stack + going */}
                <View style={styles.goingContainer}>
                  <View style={styles.avatarStack}>
                    {item.avatars.map((avatarSource, index) => (
                      <Image
                        key={index}
                        source={typeof avatarSource === 'string' ? { uri: avatarSource } : avatarSource}
                        style={[styles.avatar, { zIndex: 3 - index }]}
                      />
                    ))}
                  </View>
                  <Text style={styles.eventGoing}>+{item.going} Going</Text>
                </View>

                {/* Location row */}
                <View style={styles.locationRow}>
                  <Ionicons name="location" size={14} color="#747688" />
                  <Text style={styles.locationText} numberOfLines={1}>
                    {item.address}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* ---------- Invite Friends Banner ---------- */}
        <View style={styles.inviteBanner}>
          <View style={{ flex: 1, zIndex: 2 }}>
            <Text style={styles.inviteTitle}>Invite your friends</Text>
            <Text style={styles.inviteSubtitle}>Get $20 for ticket</Text>
            <TouchableOpacity
              style={styles.inviteButton}
              onPress={() => navigation.navigate('Invite')}
            >
              <Text style={styles.inviteButtonText}>INVITE</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../../../assets/images/home/mainscreens/openthegift.png')}
            style={styles.giftImage}
          />
        </View>

        {/* ---------- Nearby You ---------- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearby You</Text>
          <TouchableOpacity
            style={styles.seeAllRow}
            onPress={() => navigation.navigate('SeeAllEvents')}
          >
            <Text style={styles.seeAll}>See All</Text>
            <Ionicons name="caret-forward" size={12} color="#747688" />
          </TouchableOpacity>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>

      {/* ---------- Bottom Navigation ---------- */}
      <View style={styles.bottomTab}>
        {/* Tab Explore */}
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="compass" size={22} color="#5669FF" />
          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Explore</Text>
        </TouchableOpacity>

        {/* Tab Events */}
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="calendar-outline" size={22} color="#2B2849" style={{ opacity: 0.4 }} />
          <Text style={styles.tabLabel}>Events</Text>
        </TouchableOpacity>

        {/* Nút FAB ở giữa */}
        <View style={styles.fabContainer}>
          <TouchableOpacity
            style={styles.fab}
            onPress={() => navigation.navigate('AddEvent')}
          >
            <MaterialIcons name="add-box" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Tab Map */}
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="location-outline" size={22} color="#2B2849" style={{ opacity: 0.4 }} />
          <Text style={styles.tabLabel}>Map</Text>
        </TouchableOpacity>

        {/* Tab Profile */}
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-outline" size={22} color="#2B2849" style={{ opacity: 0.4 }} />
          <Text style={styles.tabLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;