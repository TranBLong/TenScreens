import React from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './SplashStyle';

export default function SplashScreen({ onNext }) {
  return (
    <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.9} onPress={onNext}>
    <ImageBackground
      source={require('../../../../assets/images/login/splash/Background.png')} // Đổi thành 'assests' nếu chưa sửa tên thư mục
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/icon/login/splash/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </ImageBackground></TouchableOpacity>
  );
}
