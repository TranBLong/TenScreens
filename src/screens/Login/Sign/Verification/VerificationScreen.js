import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import styles from "./VerificationStyle";

export default function VerificationScreen({ onBack, onVerifySuccess }) {
  const [code, setCode] = useState(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  // Xử lý đếm ngược thời gian resend
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Xử lý khi nhập từng số OTP
  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Tự động nhảy sang ô tiếp theo nếu có nhập dữ liệu
    if (text !== "" && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Xử lý khi bấm nút Xóa (Backspace)
  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <ImageBackground
      source={require("../../../../../assets/images/login/splash/Background.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Nút Back */}
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
              <Ionicons name="arrow-back" size={28} color="#120D26" />
            </TouchableOpacity>

            {/* Tiêu đề & Mô tả */}
            <Text style={styles.title}>Verification</Text>
            <Text style={styles.subtitle}>
              We've send you the verification{"\n"}code on +1 2620 0323 7631
            </Text>

            {/* Ô nhập mã OTP */}
            <View style={styles.otpContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  style={[
                    styles.otpInput,
                    activeIndex === index && styles.otpInputActive,
                  ]}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  onFocus={() => setActiveIndex(index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  placeholder="-"
                  placeholderTextColor="#D0D0D0"
                  cursorColor="#5669FF"
                />
              ))}
            </View>

            {/* Nút Continue */}
            <TouchableOpacity style={styles.continueButton} onPress={onVerifySuccess}>
              <Text style={styles.continueButtonText}>CONTINUE</Text>
              <View style={styles.arrowCircle}>
                <Ionicons name="arrow-forward" size={24} color="#FFFFFF" />
              </View>
            </TouchableOpacity>

            {/* Resend Code */}
            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Re-send code in </Text>
                <Text style={styles.timerText}>
                    {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
                </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}