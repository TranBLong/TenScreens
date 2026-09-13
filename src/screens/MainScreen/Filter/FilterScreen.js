import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './FilterStyles';

const CATEGORIES = [
    { id: '1', label: 'Sports', icon: 'basketball' },
    { id: '2', label: 'Music', icon: 'musical-notes' },
    { id: '3', label: 'Art', icon: 'color-palette' },
    { id: '4', label: 'Food', icon: 'restaurant' },
    { id: '5', label: 'Food', icon: 'restaurant' },
];

const TIME_CHIPS = [
    { id: 'today', label: 'Today' },
    { id: 'tomorrow', label: 'Tomorrow' },
    { id: 'this_week', label: 'This week' },
];

// Lưu ý: FilterModal này nhận navigation để có thể bấm Go Back
const FilterModal = ({ navigation }) => {
    const [activeCategory, setActiveCategory] = useState('1');
    const [activeTime, setActiveTime] = useState('tomorrow');

    // Mảng giả lập chiều cao cột biểu đồ giá (Histogram)
    const priceBars = [10, 15, 25, 45, 30, 20, 25, 15, 10, 35, 25, 15, 10, 20, 30, 15];

    return (
        <View style={styles.overlay}>
            {/* Vùng mờ bên trên, bấm vào để đóng Filter */}
            <TouchableOpacity
                style={styles.touchableClose}
                activeOpacity={1}
                onPress={() => navigation?.goBack()}
            />

            {/* Khung nội dung chính màu trắng */}
            <View style={styles.container}>
                {/* Thanh kéo nhỏ (Indicator) */}
                <View style={styles.indicatorContainer}>
                    <View style={styles.indicator} />
                </View>

                <Text style={styles.title}>Filter</Text>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                    {/* ----- Nhóm Danh mục (Categories) ----- */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
                        {CATEGORIES.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <TouchableOpacity
                                    key={cat.id}
                                    style={styles.categoryItem}
                                    onPress={() => setActiveCategory(cat.id)}
                                >
                                    <View style={[styles.iconCircle, isActive && styles.iconCircleActive]}>
                                        <Ionicons
                                            name={cat.icon}
                                            size={28}
                                            color={isActive ? '#FFFFFF' : '#B0B0C3'}
                                        />
                                    </View>
                                    <Text style={[styles.categoryLabel, isActive && styles.categoryLabelActive]}>
                                        {cat.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>

                    {/* ----- Nhóm Thời gian (Time & Date) ----- */}
                    <Text style={styles.sectionTitle}>Time & Date</Text>
                    <View style={styles.chipRow}>
                        {TIME_CHIPS.map((chip) => {
                            const isActive = activeTime === chip.id;
                            return (
                                <TouchableOpacity
                                    key={chip.id}
                                    style={[styles.timeChip, isActive && styles.timeChipActive]}
                                    onPress={() => setActiveTime(chip.id)}
                                >
                                    <Text style={[styles.timeChipText, isActive && styles.timeChipTextActive]}>
                                        {chip.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    <TouchableOpacity style={styles.actionRowButton}>
                        <View style={styles.actionRowLeft}>
                            <View style={styles.iconBox}>
                                <Ionicons name="calendar-outline" size={20} color="#5669FF" />
                            </View>
                            <Text style={styles.actionRowText}>Choose from calendar</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#5669FF" />
                    </TouchableOpacity>

                    {/* ----- Nhóm Địa điểm (Location) ----- */}
                    <Text style={styles.sectionTitle}>Location</Text>
                    <TouchableOpacity style={styles.actionRowButton}>
                        <View style={styles.actionRowLeft}>
                            <View style={styles.iconBox}>
                                <Ionicons name="location-outline" size={20} color="#5669FF" />
                            </View>
                            <Text style={styles.actionRowTextValue}>New York, USA</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#A9B4CC" />
                    </TouchableOpacity>

                    {/* ----- Nhóm Khoảng giá (Price range) ----- */}
                    <View style={styles.priceHeader}>
                        <Text style={styles.sectionTitle}>Select price range</Text>
                        <Text style={styles.priceValue}>$20-$120</Text>
                    </View>

                    {/* Biểu đồ & Thanh kéo giá (Mock UI) */}
                    <View style={styles.sliderContainer}>
                        <View style={styles.histogram}>
                            {priceBars.map((height, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.bar,
                                        { height },
                                        (index >= 3 && index <= 12) ? styles.barActive : styles.barInactive
                                    ]}
                                />
                            ))}
                        </View>

                        <View style={styles.trackContainer}>
                            <View style={styles.trackBackground} />
                            <View style={styles.trackActive} />

                            {/* Thumb Trái */}
                            <View style={[styles.thumb, { left: '15%' }]}>
                                <Ionicons name="caret-back" size={12} color="#5669FF" />
                                <Ionicons name="caret-forward" size={12} color="#5669FF" />
                            </View>

                            {/* Thumb Phải */}
                            <View style={[styles.thumb, { left: '80%' }]}>
                                <Ionicons name="caret-back" size={12} color="#5669FF" />
                                <Ionicons name="caret-forward" size={12} color="#5669FF" />
                            </View>
                        </View>
                    </View>

                </ScrollView>

                {/* ----- Buttons (Reset / Apply) ----- */}
                <SafeAreaView style={styles.bottomButtons}>
                    <TouchableOpacity style={styles.resetBtn} onPress={() => setActiveCategory('1')}>
                        <Text style={styles.resetBtnText}>RESET</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.applyBtn} onPress={() => navigation?.goBack()}>
                        <Text style={styles.applyBtnText}>APPLY</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </View>
    );
};

export default FilterModal;