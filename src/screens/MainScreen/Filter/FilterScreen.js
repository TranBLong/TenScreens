import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Animated,
    Easing,
    Dimensions,
    StatusBar,
    Modal,
    PanResponder,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './FilterStyles';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MIN_PRICE_LIMIT = 0;
const MAX_PRICE_LIMIT = 200;

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

const FilterModal = ({ navigation, visible = true, onClose }) => {
    const [activeCategories, setActiveCategories] = useState(['1']);
    const [activeTime, setActiveTime] = useState('tomorrow');
    const [shouldRender, setShouldRender] = useState(visible);

    // Khoảng giá & chiều rộng thanh kéo
    const [minPrice, setMinPrice] = useState(20);
    const [maxPrice, setMaxPrice] = useState(120);
    const [trackWidth, setTrackWidth] = useState(0);

    const minPriceRef = useRef(minPrice);
    const maxPriceRef = useRef(maxPrice);
    const trackWidthRef = useRef(trackWidth);

    useEffect(() => { minPriceRef.current = minPrice; }, [minPrice]);
    useEffect(() => { maxPriceRef.current = maxPrice; }, [maxPrice]);
    useEffect(() => { trackWidthRef.current = trackWidth; }, [trackWidth]);

    const startMinPrice = useRef(minPrice);
    const startMaxPrice = useRef(maxPrice);

    // Kéo nút bên trái (Min Price)
    const panResponderLeft = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                startMinPrice.current = minPriceRef.current;
            },
            onPanResponderMove: (_, gestureState) => {
                if (trackWidthRef.current === 0) return;
                const deltaValue = Math.round((gestureState.dx / trackWidthRef.current) * (MAX_PRICE_LIMIT - MIN_PRICE_LIMIT));
                let newVal = startMinPrice.current + deltaValue;

                if (newVal < MIN_PRICE_LIMIT) newVal = MIN_PRICE_LIMIT;
                if (newVal > maxPriceRef.current - 10) newVal = maxPriceRef.current - 10;

                setMinPrice(newVal);
            },
        })
    ).current;

    // Kéo nút bên phải (Max Price)
    const panResponderRight = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                startMaxPrice.current = maxPriceRef.current;
            },
            onPanResponderMove: (_, gestureState) => {
                if (trackWidthRef.current === 0) return;
                const deltaValue = Math.round((gestureState.dx / trackWidthRef.current) * (MAX_PRICE_LIMIT - MIN_PRICE_LIMIT));
                let newVal = startMaxPrice.current + deltaValue;

                if (newVal > MAX_PRICE_LIMIT) newVal = MAX_PRICE_LIMIT;
                if (newVal < minPriceRef.current + 10) newVal = minPriceRef.current + 10;

                setMaxPrice(newVal);
            },
        })
    ).current;

    const leftPercent = (minPrice / MAX_PRICE_LIMIT) * 100;
    const rightPercent = (maxPrice / MAX_PRICE_LIMIT) * 100;
    const activeWidthPercent = rightPercent - leftPercent;

    // Hàm bật/tắt chọn danh mục
    const handleToggleCategory = (id) => {
        setActiveCategories((prevSelected) => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter((item) => item !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    // progress chạy 0 (đóng) -> 1 (mở), dùng chung cho translateY và độ mờ backdrop -> luôn đồng bộ
    const progress = useRef(new Animated.Value(0)).current;

    const translateY = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [SCREEN_HEIGHT, 0],
    });

    const backdropOpacity = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.45],
    });

    useEffect(() => {
        if (visible) {
            setShouldRender(true);
            Animated.timing(progress, {
                toValue: 1,
                duration: 320,
                easing: Easing.bezier(0.32, 0.72, 0, 1),
                useNativeDriver: true,
            }).start();
        } else {
            animateClose();
        }
    }, [visible]);

    const animateClose = () => {
        Animated.timing(progress, {
            toValue: 0,
            duration: 260,
            easing: Easing.in(Easing.cubic),
            useNativeDriver: true,
        }).start(() => {
            setShouldRender(false);
            if (onClose) {
                onClose();
            } else if (navigation?.goBack) {
                navigation.goBack();
            }
        });
    };

    const handleReset = () => {
        setActiveCategories(['1']);
        setMinPrice(20);
        setMaxPrice(120);
    };

    if (!shouldRender) return null;

    const priceBars = [10, 15, 25, 45, 30, 20, 25, 15, 10, 35, 25, 15, 10, 20, 30, 15];

    return (
        <Modal
            visible={shouldRender}
            transparent={true}
            animationType="none"
            statusBarTranslucent={true}
            onRequestClose={animateClose}
        >
            <View style={styles.overlay}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

                <Animated.View style={[styles.backdrop, { opacity: backdropOpacity }]} />

                <TouchableOpacity
                    style={styles.touchableClose}
                    activeOpacity={1}
                    onPress={animateClose}
                />

                <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
                    <View style={styles.indicatorContainer}>
                        <View style={styles.indicator} />
                    </View>

                    <Text style={styles.title}>Filter</Text>

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                        {/* Categories */}
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
                            {CATEGORIES.map((cat) => {
                                const isActive = activeCategories.includes(cat.id);
                                return (
                                    <TouchableOpacity
                                        key={cat.id}
                                        style={styles.categoryItem}
                                        onPress={() => handleToggleCategory(cat.id)}
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

                        {/* Time & Date */}
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

                        {/* Location */}
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
                            <Text style={styles.priceValue}>${minPrice}-${maxPrice}</Text>
                        </View>

                        {/* Biểu đồ & Thanh kéo giá động */}
                        <View style={styles.sliderContainer}>
                            {/* Biểu đồ Cột (Histogram) tự sáng theo khoảng giá */}
                            <View style={styles.histogram}>
                                {priceBars.map((height, index) => {
                                    const barValue = (index / (priceBars.length - 1)) * MAX_PRICE_LIMIT;
                                    const isActive = barValue >= minPrice && barValue <= maxPrice;
                                    return (
                                        <View
                                            key={index}
                                            style={[
                                                styles.bar,
                                                { height },
                                                isActive ? styles.barActive : styles.barInactive
                                            ]}
                                        />
                                    );
                                })}
                            </View>

                            {/* Thanh Track & Nút kéo */}
                            <View
                                style={styles.trackContainer}
                                onLayout={(e) => setTrackWidth(e.nativeEvent.layout.width)}
                            >
                                <View style={styles.trackBackground} />

                                {/* Vùng xanh sáng thể hiện khoảng chọn */}
                                <View
                                    style={[
                                        styles.trackActive,
                                        { left: `${leftPercent}%`, width: `${activeWidthPercent}%` }
                                    ]}
                                />

                                {/* Thumb Trái (Kéo giá Min) */}
                                <View
                                    {...panResponderLeft.panHandlers}
                                    style={[styles.thumb, { left: `${leftPercent}%`, marginLeft: -14 }]}
                                >
                                    <Ionicons name="caret-back" size={12} color="#5669FF" />
                                    <Ionicons name="caret-forward" size={12} color="#5669FF" />
                                </View>

                                {/* Thumb Phải (Kéo giá Max) */}
                                <View
                                    {...panResponderRight.panHandlers}
                                    style={[styles.thumb, { left: `${rightPercent}%`, marginLeft: -14 }]}
                                >
                                    <Ionicons name="caret-back" size={12} color="#5669FF" />
                                    <Ionicons name="caret-forward" size={12} color="#5669FF" />
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    {/* Dùng View thay cho SafeAreaView */}
                    <View style={styles.bottomButtons}>
                        <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
                            <Text style={styles.resetBtnText}>RESET</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.applyBtn} onPress={animateClose}>
                            <Text style={styles.applyBtnText}>APPLY</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
};

export default FilterModal;