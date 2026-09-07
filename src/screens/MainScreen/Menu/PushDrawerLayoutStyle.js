import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Nền tổng màu trắng trùng với Menu White
    },
    menuLayer: {
        ...StyleSheet.absoluteFillObject,
    },
    homeLayer: {
        flex: 1,
        backgroundColor: '#4A43EC', // Đặt nền tím/xanh trùng Header để khi bo tròn góc không bị lộ viền trắng
        overflow: 'hidden', // Bắt buộc có để bo tròn trọn vẹn cả 4 góc đỉnh & đáy màn hình Home
        // Tạo hiệu ứng đổ bóng 3D cho thẻ Home khi thu nhỏ
        shadowColor: '#000000',
        shadowOffset: { width: -10, height: 12 },
        shadowOpacity: 0.18,
        shadowRadius: 20,
        elevation: 15,
    },
    closeOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: SCREEN_WIDTH * 0.65,
    },
});