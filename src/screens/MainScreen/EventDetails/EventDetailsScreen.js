import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './EventDetailsStyles';

const EventDetailsScreen = ({ navigation, route }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

    // Lấy data truyền từ HomeScreen nếu có, hoặc dùng dữ liệu mặc định
    const eventData = route?.params?.eventData || {
        title: 'International Band Music Concert',
        date: '14 December, 2021',
        time: 'Tuesday, 4:00PM - 9:00PM',
        location: 'Gala Convention Center',
        address: '36 Guild Street London, UK',
        organizer: {
            name: 'Ashfak Sayem',
            role: 'Organizer',
            avatar: require('../../../../assets/images/home/mainscreens/eventdetail/seesky.png'),
        },
        about:
            'Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase.',
        price: '$120',
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Header Banner Image */}
                <ImageBackground
                    source={require('../../../../assets/images/home/mainscreens/eventdetail/quaylenanhemoi.png')}
                    style={styles.bannerImage}
                >
                    <SafeAreaView style={styles.headerTop}>
                        {/* Cụm bên trái: Mũi tên + Chữ Event Details */}
                        <View style={styles.headerLeft}>
                            <TouchableOpacity style={styles.iconBtn} onPress={() => navigation?.goBack()}>
                                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
                            </TouchableOpacity>
                            <Text style={styles.headerTitle}>Event Details</Text>
                        </View>

                        {/* Cụm bên phải: Nút Lưu */}
                        <TouchableOpacity
                            style={styles.bookmarkBtn}
                            onPress={() => setIsBookmarked(!isBookmarked)}
                        >
                            <Ionicons
                                name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                                size={20}
                                color="#FFFFFF"
                            />
                        </TouchableOpacity>
                    </SafeAreaView>
                </ImageBackground>

                {/* Floating Attendees Bar */}
                <View style={styles.attendeesCard}>
                    {/* Cụm bên trái: Avatars + Chữ +20 Going */}
                    <View style={styles.leftGroup}>
                        <View style={styles.avatarStack}>
                            <Image
                                source={require('../../../../assets/images/home/mainscreens/miniavatar/ovalcopy4.png')}
                                style={[styles.avatar, { zIndex: 3 }]}
                            />
                            <Image
                                source={require('../../../../assets/images/home/mainscreens/miniavatar/ovalcopy.png')}
                                style={[styles.avatar, { zIndex: 2, marginLeft: -10 }]}
                            />
                            <Image
                                source={require('../../../../assets/images/home/mainscreens/miniavatar/oval.png')}
                                style={[styles.avatar, { zIndex: 1, marginLeft: -10 }]}
                            />
                        </View>
                        <Text style={styles.goingText}>+20 Going</Text>
                    </View>

                    {/* Cụm bên phải: Nút Invite */}
                    <TouchableOpacity style={styles.inviteBtn}>
                        <Text style={styles.inviteText}>Invite</Text>
                    </TouchableOpacity>
                </View>

                {/* Content Container */}
                <View style={styles.contentContainer}>
                    <Text style={styles.eventTitle}>{eventData.title}</Text>

                    {/* Date & Time Info */}
                    <View style={styles.infoRow}>
                        <View style={styles.iconBox}>
                            <Ionicons name="calendar" size={22} color="#5669FF" />
                        </View>
                        <View style={styles.infoTextContainer}>
                            <Text style={styles.infoTitle}>{eventData.date}</Text>
                            <Text style={styles.infoSubtitle}>{eventData.time}</Text>
                        </View>
                    </View>

                    {/* Location Info */}
                    <View style={styles.infoRow}>
                        <View style={styles.iconBox}>
                            <Ionicons name="location" size={22} color="#5669FF" />
                        </View>
                        <View style={styles.infoTextContainer}>
                            <Text style={styles.infoTitle}>{eventData.location}</Text>
                            <Text style={styles.infoSubtitle}>{eventData.address}</Text>
                        </View>
                    </View>

                    {/* Organizer Info */}
                    <View style={styles.organizerRow}>
                        <Image
                            source={
                                typeof eventData.organizer.avatar === 'string'
                                    ? { uri: eventData.organizer.avatar }
                                    : eventData.organizer.avatar
                            }
                            style={styles.organizerAvatar}
                        />
                        <View style={styles.organizerTextContainer}>
                            <Text style={styles.organizerName}>{eventData.organizer.name}</Text>
                            <Text style={styles.organizerRole}>{eventData.organizer.role}</Text>
                        </View>
                        <TouchableOpacity
                            style={[styles.followBtn, isFollowing && styles.followingBtn]}
                            onPress={() => setIsFollowing(!isFollowing)}
                        >
                            <Text style={[styles.followBtnText, isFollowing && styles.followingBtnText]}>
                                {isFollowing ? 'Following' : 'Follow'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* About Event */}
                    <View style={styles.aboutSection}>
                        <Text style={styles.sectionTitle}>About Event</Text>
                        <Text style={styles.aboutDescription}>{eventData.about}</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Floating Bar kèm hiệu ứng mờ dần */}
            <View style={styles.bottomBarContainer} pointerEvents="box-none">
                {/* Lớp phủ Gradient mờ dần từ trong suốt sang màu trắng nền */}
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)', '#FFFFFF']}
                    style={styles.fadeGradient}
                    pointerEvents="none"
                />

                <View style={styles.bottomBar}>
                    <TouchableOpacity style={styles.buyTicketBtn} activeOpacity={0.8}>
                        <Text style={styles.buyTicketText}>BUY TICKET {eventData.price}</Text>
                        <View style={styles.arrowCircle}>
                            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default EventDetailsScreen;