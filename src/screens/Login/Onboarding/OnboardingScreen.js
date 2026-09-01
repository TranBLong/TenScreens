import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './OnboardingStyles'; // Import styles từ OnboardingStyle.js

// Dữ liệu nội dung cho 3 màn hình
const ONBOARDING_DATA = [
  {
    id: 1,
    title: 'Explore Upcoming and Nearby Events',
    description: 'In publishing and graphic design, Lorem is a placeholder text commonly',
    image: require('../../../../assets/images/login/onboarding/onboarding1.png'), // Đặt ảnh tương ứng
  },
  {
    id: 2,
    title: 'Web Have Modern Events Calendar Feature',
    description: 'In publishing and graphic design, Lorem is a placeholder text commonly',
    image: require('../../../../assets/images/login/onboarding/onboarding2.png'),
  },
  {
    id: 3,
    title: 'To Look Up More Events or Activities Nearby By Map',
    description: 'In publishing and graphic design, Lorem is a placeholder text commonly',
    image: require('../../../../assets/images/login/onboarding/onboarding3.png'),
  },
];

export default function OnboardingScreen({ onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      setCurrentIndex(currentIndex + 1); // Chuyển sang màn hình tiếp theo
    } else {
      onFinish(); // Chuyển tiếp vào Home khi hoàn thành màn 3
    }
  };

  const currentItem = ONBOARDING_DATA[currentIndex];

  return (// 2. Bọc toàn bộ bằng ImageBackground với đường dẫn ảnh background
    <ImageBackground
      source={require('../../../../assets/images/login/splash/Background.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
    <SafeAreaView style={styles.container}>
      {/* 1. Hình ảnh Mockup trên nền trắng */}
      <View style={styles.imageContainer}>
        <Image
          source={currentItem.image}
          style={styles.mockupImage}
          resizeMode="contain"
        />
        {/* 2. Lớp phủ mờ dần từ trong suốt sang màu trắng nền */}
        <LinearGradient
          colors={['transparent', 'rgba(255, 255, 255, 0.7)', '#FFFFFF']}
          style={styles.fadeOverlay}
        />
      </View>

      {/* 2. Khung xanh chứa nội dung ở dưới */}
      <View style={styles.bottomCard}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>{currentItem.title}</Text>
          <Text style={styles.description}>{currentItem.description}</Text>
        </View>

        {/* Chuyển đổi màn hình bằng nút Skip / Next & 3 chấm Pagination */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={onFinish}>
            <Text style={styles.btnText}>Skip</Text>
          </TouchableOpacity>

          {/* 3 Dấu chấm chỉ số màn hình */}
          <View style={styles.paginationContainer}>
            {ONBOARDING_DATA.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentIndex === index && styles.activeDot,
                ]}
              />
            ))}
          </View>

          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.btnText}>
              {currentIndex === ONBOARDING_DATA.length - 1 ? 'Start' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView></ImageBackground>
  );
}