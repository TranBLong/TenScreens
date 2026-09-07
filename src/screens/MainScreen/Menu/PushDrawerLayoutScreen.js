import React, { useRef, useEffect } from 'react';
import {
  View,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  StatusBar,
} from 'react-native';
import styles from './PushDrawerLayoutStyle';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const PushDrawerLayout = ({ isOpen, onClose, menu, children }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: isOpen ? 1 : 0,
      duration: 280,
      useNativeDriver: true,
    }).start();
  }, [isOpen, progress]);

  // Thu nhỏ toàn bộ màn hình Home
  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.82],
  });

  // Dịch chuyển màn hình Home sang phải
  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, SCREEN_WIDTH * 0.65],
  });

  // Bo tròn 4 góc của khung màn hình Home khi thu nhỏ
  const borderRadius = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 32],
  });

  return (
    <View style={styles.container}>
      {/* Tự động chuyển đổi StatusBar đỉnh máy theo trạng thái Mở/Đóng Menu */}
      <StatusBar
        animated
        translucent
        barStyle={isOpen ? 'dark-content' : 'light-content'}
        backgroundColor="transparent"
      />

      {/* Màn hình Menu nằm hoàn toàn phía dưới */}
      <View style={styles.menuLayer} pointerEvents={isOpen ? 'auto' : 'none'}>
        {menu}
      </View>

      {/* Toàn bộ màn hình Home (kể cả Header xanh) co nhỏ trọn vẹn vào trong khung này */}
      <Animated.View
        style={[
          styles.homeLayer,
          {
            borderRadius,
            transform: [{ translateX }, { scale }],
          },
        ]}
        pointerEvents={isOpen ? 'none' : 'auto'}
      >
        {children}
      </Animated.View>

      {/* Overlay bấm ra ngoài vùng Home để đóng Menu */}
      {isOpen && (
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.closeOverlay} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default PushDrawerLayout;