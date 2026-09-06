import React, { useRef, useEffect } from 'react';
import {
    View,
    Animated,
    Dimensions,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
// Bề rộng phần Menu lộ ra khi mở - chỉnh số này để giống ảnh thiết kế hơn
const DRAWER_WIDTH = SCREEN_WIDTH * 0.78;

/**
 * PushDrawerLayout
 * - menu: nội dung MenuScreen, nằm CỐ ĐỊNH phía dưới cùng.
 * - children: nội dung HomeScreens, sẽ bị "đẩy" (translateX) sang phải.
 * - isOpen: true/false để mở/đóng.
 * - onClose: gọi khi bấm ra ngoài vùng Home đang lộ ra -> đóng Menu lại.
 *
 * Vì Menu và Home là 2 View HOÀN TOÀN TÁCH BIỆT (không lồng nhau),
 * nên ScrollView của Menu và ScrollView của Home tự động cuộn độc lập,
 * không ảnh hưởng lẫn nhau.
 */
const PushDrawerLayout = ({ isOpen, onClose, menu, children }) => {
    const translateX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(translateX, {
            toValue: isOpen ? DRAWER_WIDTH : 0,
            duration: 260,
            useNativeDriver: true,
        }).start();
    }, [isOpen, translateX]);

    return (
        <View style={styles.container}>
            {/* Lớp Menu - nằm im một chỗ, chỉ hiện ra khi Home dịch sang phải */}
            <View style={styles.menuLayer} pointerEvents={isOpen ? 'auto' : 'none'}>
                {menu}
            </View>

            {/* Lớp Home - bị đẩy (translateX) sang phải khi mở Menu */}
            <Animated.View
                style={[styles.homeLayer, { transform: [{ translateX }] }]}
                // Khi Menu đang mở, khoá tương tác/cuộn của Home lại
                // (tránh trường hợp vừa cuộn Home vừa thấy Menu bị giật)
                pointerEvents={isOpen ? 'none' : 'auto'}
            >
                {children}
            </Animated.View>

            {/* Bấm vào phần Home còn lộ ra bên phải khi Menu mở -> đóng Menu lại */}
            {isOpen && (
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.closeOverlay} />
                </TouchableWithoutFeedback>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A2E', // màu nền lộ ra 2 bên rìa khi Home dịch chuyển
    },
    menuLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: DRAWER_WIDTH,
    },
    homeLayer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    closeOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: DRAWER_WIDTH,
    },
});

export default PushDrawerLayout;