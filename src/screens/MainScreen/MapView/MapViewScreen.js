import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './MapViewStyles';

// Danh mục lọc - đồng bộ với HomeScreens (Sports / Music / Food / Art)
const CATEGORIES = [
    { id: '1', label: 'Sports', icon: 'basketball-outline', bg: '#F0635A' },
    { id: '2', label: 'Music', icon: 'musical-notes-outline', bg: '#5669FF' },
    { id: '3', label: 'Food', icon: 'restaurant-outline', bg: '#29D697' },
    { id: '4', label: 'Art', icon: 'color-palette-outline', bg: '#00D2FF' },
];

// Vị trí các marker trên bản đồ, mỗi marker gắn với 1 category ở trên
const MAP_MARKERS = [
    { id: '1', categoryId: '3', icon: 'restaurant-outline', bg: '#29D697', top: '26%', left: '58%' },
    { id: '2', categoryId: '2', icon: 'musical-notes-outline', bg: '#5669FF', top: '36%', left: '25%' },
    { id: '3', categoryId: '4', icon: 'color-palette-outline', bg: '#00D2FF', top: '42%', left: '68%' },
    { id: '4', categoryId: '1', icon: 'basketball-outline', bg: '#F0635A', top: '54%', left: '33%' },
];

const MapViewScreen = ({ navigation }) => {
    const [activeCategory, setActiveCategory] = useState('1');
    const [searchText, setSearchText] = useState('');

    const activeEvent = {
        id: '1',
        title: "Jo Malone London's Mother's Day Presents",
        date: 'Wed, Apr 28, 2026',
        time: 'Wednesday, 5:30 PM - 9:00 PM',
        location: 'Radius Gallery',
        address: 'Radius Gallery - Santa Cruz, CA',
        image: require('../../../../assets/images/home/mainscreens/handmotherandson.png'),
        organizer: {
            name: 'Ashfak Sayem',
            role: 'Organizer',
            avatar: require('../../../../assets/images/home/mainscreens/eventdetail/seesky.png'),
        },
        about: 'Enjoy your favorite dishes and a lovely time with your friends and family.',
        price: '$120',
    };

    return (
        <View style={styles.container}>
            {/* 2. Cấu hình StatusBar trong suốt và đè lên giao diện */}
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            {/* ---------- Layer 1: Bản đồ (nền giả lập) ---------- */}
            <View style={styles.mapBackground}>
                <Image
                    source={require('../../../../assets/images/home/mainscreens/mapview/map.png')}
                    style={styles.mapImageBackground}
                    resizeMode="cover"
                />

                {/* Các ghim sự kiện vẫn đè lên ảnh bản đồ */}
                {MAP_MARKERS.map((marker) => (
                    <TouchableOpacity
                        key={marker.id}
                        style={[styles.markerPin, { top: marker.top, left: marker.left }]}
                        activeOpacity={0.8}
                        onPress={() => navigation?.navigate?.('EventDetails', { eventData: activeEvent })}
                    >
                        {/* Khung viền trắng chứa icon */}
                        <View style={styles.markerBadge}>
                            <View style={[styles.innerIconBox, { backgroundColor: marker.bg }]}>
                                <Ionicons name={marker.icon} size={16} color="#FFFFFF" />
                            </View>
                        </View>

                        {/* Mũi tên chỉ xuống màu trắng */}
                        <View style={styles.markerArrow} />
                    </TouchableOpacity>
                ))}
            </View>

            {/* ---------- Layer 2: Giao diện đè lên bản đồ ---------- */}
            <SafeAreaView style={styles.overlayContainer} pointerEvents="box-none">

                {/* Top Section: thanh tìm kiếm + danh mục lọc */}
                <View style={styles.topSection} pointerEvents="box-none">
                    <View style={styles.topBar}>
                        <View style={styles.searchBox}>
                            <TouchableOpacity
                                style={styles.inlineBackButton}
                                onPress={() => navigation?.goBack?.()}
                            >
                                <Ionicons name="chevron-back" size={22} color="#120D26" />
                            </TouchableOpacity>

                            <TextInput
                                placeholder="Find for food or restaurant..."
                                placeholderTextColor="#747688"
                                style={styles.searchInput}
                                value={searchText}
                                onChangeText={setSearchText}
                            />
                        </View>

                        <TouchableOpacity style={styles.gpsButton}>
                            <Ionicons name="locate-outline" size={18} color="#5669FF" />
                        </TouchableOpacity>
                    </View>

                    {/* Danh mục lọc dạng pill cuộn ngang */}
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
                                        color={isSelected ? '#FFFFFF' : cat.bg}
                                    />
                                    <Text style={[styles.categoryLabel, { color: isSelected ? '#FFFFFF' : '#747688' }]}>
                                        {cat.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>

                {/* Bottom Section: nút định vị + card sự kiện đang chọn */}
                <View style={styles.bottomSection} pointerEvents="box-none">
                    <TouchableOpacity style={styles.myLocationFab}>
                        <Ionicons name="options-outline" size={20} color="#FFFFFF" />
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

                            <Text style={styles.eventTitle} numberOfLines={2}>
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