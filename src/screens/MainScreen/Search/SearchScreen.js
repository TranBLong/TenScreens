import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './SearchStyles';

// Dữ liệu mẫu dựa trên thiết kế của màn hình Search
const SEARCH_RESULTS = [
    {
        id: '1',
        date: '1ST MAY- SAT -2:00 PM',
        title: 'A virtual evening of smooth jazz',
        // Sử dụng tạm ảnh có sẵn từ Home, bạn có thể thay bằng ảnh thật
        image: require('../../../../assets/images/home/mainscreens/handmotherandson.png'),
    },
    {
        id: '2',
        date: '1ST MAY- SAT -2:00 PM',
        title: "Jo malone london's mother's day",
        image: require('../../../../assets/images/home/mainscreens/handmotherandson.png'),
    },
    {
        id: '3',
        date: '1ST MAY- SAT -2:00 PM',
        title: "Women's leadership conference",
        image: require('../../../../assets/images/home/mainscreens/handmotherandson.png'),
    },
    {
        id: '4',
        date: '1ST MAY- SAT -2:00 PM',
        title: 'International kids safe parents night out',
        image: require('../../../../assets/images/home/mainscreens/handmotherandson.png'),
    },
    {
        id: '5',
        date: '1ST MAY- SAT -2:00 PM',
        title: 'International gala music festival',
        image: require('../../../../assets/images/home/mainscreens/handmotherandson.png'),
    },
];

const SearchScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');

    const renderEventCard = ({ item }) => (
        <TouchableOpacity style={styles.eventCard} activeOpacity={0.8}>
            <Image source={item.image} style={styles.eventImage} />
            <View style={styles.eventInfo}>
                <Text style={styles.eventDate}>{item.date}</Text>
                <Text style={styles.eventTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* ---------- Header ---------- */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack ? navigation.goBack() : null}
                    >
                        <Ionicons name="arrow-back" size={26} color="#120D26" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Search</Text>
                </View>

                {/* ---------- Search Input Row ---------- */}
                <View style={styles.searchRow}>
                    <Ionicons name="search" size={24} color="#5669FF" style={styles.searchIcon} />

                    <View style={styles.searchDivider} />

                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search..."
                        placeholderTextColor="#A9B4CC"
                        value={searchText}
                        onChangeText={setSearchText}
                    />

                    {/* Nút Filters đè bên trong ô input */}
                    <TouchableOpacity style={styles.filterButton}>
                        <Ionicons name="options" size={16} color="#FFFFFF" />
                        <Text style={styles.filterText}>Filters</Text>
                    </TouchableOpacity>
                </View>

                {/* ---------- Search Results List ---------- */}
                <FlatList
                    data={SEARCH_RESULTS}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    renderItem={renderEventCard}
                />
            </View>
        </SafeAreaView>
    );
};

export default SearchScreen;