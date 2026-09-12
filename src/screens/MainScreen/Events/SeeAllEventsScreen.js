import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './SeeAllEventsStyles';

// Dữ liệu mẫu dựa trên hình ảnh image_7f97ab.png
const EVENTS_DATA = [
    {
        id: '1',
        date: 'Wed, Apr 28 • 5:30 PM',
        title: 'Jo Malone London’s Mother’s Day Presents',
        location: 'Radius Gallery - Santa Cruz, CA',
        image: require('../../../../assets/images/home/mainscreens/handmotherandson.png'), // Dùng tạm ảnh có sẵn
    },
    {
        id: '2',
        date: 'Sat, May 1 • 2:00 PM',
        title: 'A Virtual Evening of Smooth Jazz',
        location: 'Lot 13 - Oakland, CA',
        image: require('../../../../assets/images/home/mainscreens/search/Jazz.png'),
    },
    {
        id: '3',
        date: 'Sat, Apr 24 • 1:30 PM',
        title: "Women's Leadership Conference 2021",
        location: '53 Bush St - San Francisco, CA',
        image: require('../../../../assets/images/home/mainscreens/search/WomensLeadership.png'),
    },
    {
        id: '4',
        date: 'Fri, Apr 23 • 6:00 PM',
        title: 'International Kids Safe Parents Night Out',
        location: 'Lot 13 - Oakland, CA',
        image: require('../../../../assets/images/home/mainscreens/search/InternationalKidsSafe.png'),
    },
    {
        id: '5',
        date: 'Mon, Jun 21 • 10:00 PM',
        title: 'Collectivity Plays the Music of Jimi',
        location: 'Longboard Margarita Bar',
        image: require('../../../../assets/images/home/mainscreens/trainers.png'),
    },
    {
        id: '6',
        date: 'Sun, Apr 25 • 10:15 AM',
        title: 'International Gala Music Festival',
        location: '36 Guild Street London, UK',
        image: require('../../../../assets/images/home/mainscreens/search/GalaMusicFestival.png'),
    },
];

const SeeAllEventsScreen = ({ navigation }) => {
    const renderEventCard = ({ item }) => (
        <TouchableOpacity
            style={styles.eventCard}
            activeOpacity={0.8}
            onPress={() => navigation.navigate && navigation.navigate('EventDetails', { eventData: item })}
        >
            <Image source={item.image} style={styles.eventImage} />
            <View style={styles.eventInfo}>
                <Text style={styles.eventDate}>{item.date}</Text>
                <Text style={styles.eventTitle} numberOfLines={2}>{item.title}</Text>
                <View style={styles.locationRow}>
                    <Ionicons name="location" size={14} color="#747688" />
                    <Text style={styles.locationText} numberOfLines={1}>{item.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />
            <View style={styles.container}>

                {/* ---------- Header ---------- */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={() => navigation?.goBack && navigation.goBack()}>
                            <Ionicons name="arrow-back" size={26} color="#120D26" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Events</Text>
                    </View>

                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            style={styles.iconButton}
                            onPress={() => navigation.navigate && navigation.navigate('search')}
                        >
                            <Ionicons name="search" size={24} color="#120D26" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="ellipsis-vertical" size={24} color="#120D26" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ---------- Event List ---------- */}
                <FlatList
                    data={EVENTS_DATA}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    style={styles.listContainer}
                    contentContainerStyle={styles.listContent}
                    renderItem={renderEventCard}
                />
            </View>
        </SafeAreaView>
    );
};

export default SeeAllEventsScreen;