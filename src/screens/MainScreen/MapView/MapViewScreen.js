import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './MapViewStyles';

const CATEGORIES = [
    { id: '1', label: 'Sports', icon: 'basketball-outline', bg: '#F0635A', color: '#F0635A' },
    { id: '2', label: 'Music', icon: 'musical-notes-outline', bg: '#5669FF', color: '#5669FF' },
    { id: '3', label: 'Food', icon: 'restaurant-outline', bg: '#29D697', color: '#29D697' },
];

const MAP_MARKERS = [
    { id: '1', type: 'food', icon: 'restaurant-outline', bg: '#29D697', top: '28%', left: '60%' },
    { id: '2', type: 'music', icon: 'musical-notes-outline', bg: '#5669FF', top: '36%', left: '25%' },
    { id: '3', type: 'sports', icon: 'basketball-outline', bg: '#F0635A', top: '52%', left: '33%' },
];

const MapViewScreen = ({ navigation }) => {
    const [activeCategory, setActiveCategory] = useState('1');
    const [searchText, setSearchText] = useState('');

    const activeEvent = {
        id: '1',
        date: 'Wed, Apr 28 • 5:30 PM',
        title: "Jo Malone London's Mother's Day Presents",
        address: 'Radius Gallery - Santa Cruz, CA',
        image: require('../../../../assets/images/home/mainscreens/handmotherandson.png'),
    };

    return (
        <View style={styles.container}>
            {/* ---------- Layer 1: Bản đồ ---------- */}
            <View style={styles.mapBackground}>
                <Text style={styles.mapRoadLabel}>NORTHEAST BELLEVUE</Text>
                <View style={[styles.roadLine, { top: '42%', width: '100%', transform: [{ rotate: '-15deg' }] }]} />
                <View style={[styles.roadLine, { top: '55%', width: '100%', transform: [{ rotate: '25deg' }] }]} />

                {MAP_MARKERS.map((marker) => (
                    <TouchableOpacity
                        key={marker.id}
                        style={[styles.markerPin, { top: marker.top, left: marker.left, backgroundColor: marker.bg }]}
                        activeOpacity={0.8}
                    >
                        <Ionicons name={marker.icon} size={16} color="#FFFFFF" />
                    </TouchableOpacity>
                ))}
            </View>

            {/* ---------- Layer 2: Giao diện đè ---------- */}
            <SafeAreaView style={styles.overlayContainer} pointerEvents="box-none">

                {/* Top Section */}
                <View style={styles.topSection} pointerEvents="box-none">
                    <View style={styles.topBar}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => navigation?.goBack?.()}
                        >
                            <Ionicons name="chevron-back" size={20} color="#120D26" />
                        </TouchableOpacity>

                        <View style={styles.searchBox}>
                            <Ionicons name="search-outline" size={18} color="#747688" style={{ marginRight: 6 }} />
                            <TextInput
                                placeholder="Find for food or restaurant..."
                                placeholderTextColor="#747688"
                                style={styles.searchInput}
                                value={searchText}
                                onChangeText={setSearchText}
                            />
                        </View>

                        <TouchableOpacity style={styles.gpsButton}>
                            <Ionicons name="navigate-outline" size={18} color="#5669FF" />
                        </TouchableOpacity>
                    </View>

                    {/* Danh mục lọc */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.categoryScroll}
                        contentContainerStyle={styles.categoryContainer}
                    >
                        {CATEGORIES.map((cat) => {
                            const isSelected = activeCategory === cat.id;
                            return (
                                <TouchableOpacity
                                    key={cat.id}
                                    style={[
                                        styles.categoryPill,
                                        { backgroundColor: isSelected ? cat.bg : '#FFFFFF' },
                                    ]}
                                    onPress={() => setActiveCategory(cat.id)}
                                >
                                    <Ionicons
                                        name={cat.icon}
                                        size={18}
                                        color={isSelected ? '#FFFFFF' : cat.color}
                                    />
                                    <Text style={[styles.categoryLabel, { color: isSelected ? '#FFFFFF' : '#747688' }]}>
                                        {cat.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>

                {/* Bottom Section */}
                <View style={styles.bottomSection} pointerEvents="box-none">
                    <TouchableOpacity style={styles.myLocationFab}>
                        <Ionicons name="compass-outline" size={22} color="#FFFFFF" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.eventCard}
                        activeOpacity={0.9}
                        onPress={() => navigation?.navigate?.('EventDetails', { eventData: activeEvent })}
                    >
                        <Image
                            source={typeof activeEvent.image === 'string' ? { uri: activeEvent.image } : activeEvent.image}
                            style={styles.eventImage}
                        />

                        <View style={styles.eventDetails}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.eventDate}>{activeEvent.date}</Text>
                                <TouchableOpacity>
                                    <Ionicons name="bookmark" size={16} color="#EB5757" />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.eventTitle} numberOfLines={1}>
                                {activeEvent.title}
                            </Text>

                            <View style={styles.locationRow}>
                                <Ionicons name="location" size={14} color="#747688" />
                                <Text style={styles.locationText} numberOfLines={1}>
                                    {activeEvent.address}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </View>
    );
};

export default MapViewScreen;