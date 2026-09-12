import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './EmptyEventStyles';

const EmptyEventScreen = ({ navigation }) => {
    // Trạng thái tab đang chọn: 'upcoming' hoặc 'past'
    const [activeTab, setActiveTab] = useState('upcoming');

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <View style={styles.container}>

                {/* ---------- Header ---------- */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={() => navigation?.goBack()}>
                            <Ionicons name="arrow-back" size={26} color="#120D26" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Events</Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="ellipsis-vertical" size={24} color="#120D26" />
                    </TouchableOpacity>
                </View>

                {/* ---------- Tab Switcher ---------- */}
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'upcoming' && styles.activeTab]}
                        onPress={() => setActiveTab('upcoming')}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>
                            UPCOMING
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'past' && styles.activeTab]}
                        onPress={() => setActiveTab('past')}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.tabText, activeTab === 'past' && styles.activeTabText]}>
                            PAST EVENTS
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* ---------- Empty State Content ---------- */}
                <View style={styles.emptyContent}>
                    {/* Bạn cần trỏ đúng tới đường dẫn lưu ảnh cái lịch mờ nhé */}
                    <Image
                        source={require('../../../../assets/images/home/event/calendarclock.png')}
                        style={styles.emptyImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.emptyTitle}>No Upcoming Event</Text>
                    <Text style={styles.emptySubtitle}>
                        Lorem ipsum dolor sit amet,{"\n"}consectetur
                    </Text>
                </View>

                {/* ---------- Explore Events Button ---------- */}
                <View style={styles.bottomContainer}>
                    <TouchableOpacity
                        style={styles.exploreButton}
                        activeOpacity={0.8}
                        onPress={() => navigation?.navigate('home')} // Điều hướng về Home hoặc Explore tuỳ logic
                    >
                        <Text style={styles.exploreButtonText}>EXPLORE EVENTS</Text>
                        <View style={styles.arrowCircle}>
                            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default EmptyEventScreen;