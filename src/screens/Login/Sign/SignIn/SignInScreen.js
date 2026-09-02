import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import styles from "./SignInStyle";

export default function SignInScreen({ onNavigateSignUp, onSignInSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo EventHub */}
          <View style={styles.logoContainer}>
            <Image
              source={require("../../../../../assets/icon/Logo/PictorialMark.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.appName}>EventHub</Text>
          </View>

          <Text style={styles.title}>Sign in</Text>

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
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#747688"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Remember Me & Forgot Password */}
          <View style={styles.optionsRow}>
            <View style={styles.rememberMeContainer}>
              <Switch
                value={rememberMe}
                onValueChange={setRememberMe}
                trackColor={{ false: "#E4DFDF", true: "#5669FF" }}
                thumbColor="#FFFFFF"
              />
              <Text style={styles.rememberText}>Remember Me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Nút Sign In */}
          <TouchableOpacity
            style={styles.signInButton}
            onPress={onSignInSuccess}
          >
            <Text style={styles.signInButtonText}>SIGN IN</Text>
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

          {/* Chuyển sang Đăng ký */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={onNavigateSignUp}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
