import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import styles from "./SignUpStyle";

export default function SignUpScreen({ onNavigateSignIn, onSignUpSuccess, onBack }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          >
            {/* Nút Back */}
            <TouchableOpacity style={styles.backButton} onPress={onBack || onNavigateSignIn}>
              <Ionicons name="arrow-back" size={28} color="#120D26" />
            </TouchableOpacity>

            <Text style={styles.title}>Sign up</Text>

            {/* Ô nhập Full name */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../../../../../assets/icon/login/signin/Profile.png")} // Đổi tên file nếu icon User của bạn tên khác
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Full name"
                  placeholderTextColor="#747688"
                  value={fullName}
                  onChangeText={setFullName}
                />
              </View>
            </View>

            {/* Ô nhập Email */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../../../../../assets/icon/login/signup/Mail.png")}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.input}
                  placeholder="abc@email.com"
                  placeholderTextColor="#747688"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            {/* Ô nhập Mật khẩu */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../../../../../assets/icon/login/signup/Password.png")}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Your password"
                  placeholderTextColor="#747688"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye-off-outline"} // Dùng icon gạch chéo theo thiết kế
                    size={24}
                    color="#747688"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Ô nhập Xác nhận Mật khẩu */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../../../../../assets/icon/login/signup/Password.png")}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm password"
                  placeholderTextColor="#747688"
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Ionicons
                    name={showConfirmPassword ? "eye-off" : "eye-off-outline"} 
                    size={24}
                    color="#747688"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Nút Sign Up */}
            <TouchableOpacity style={styles.signUpButton} onPress={onSignUpSuccess}>
              <Text style={styles.signUpButtonText}>SIGN UP</Text>
              <View style={styles.arrowCircle}>
                <Ionicons name="arrow-forward" size={24} color="#FFFFFF" />
              </View>
            </TouchableOpacity>

            <Text style={styles.orText}>OR</Text>

            {/* Nút Đăng nhập MXH */}
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../../../../assets/icon/Logo/LogoGoogle.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
              <Text style={styles.socialButtonText}>Login with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../../../../assets/icon/Logo/LogoFacebook.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
              <Text style={styles.socialButtonText}>Login with Facebook</Text>
            </TouchableOpacity>

            {/* Chuyển sang Đăng nhập */}
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={onNavigateSignIn}>
                <Text style={styles.signInText}>Signin</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}