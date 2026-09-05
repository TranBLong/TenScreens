import React, { useState } from "react";
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
import styles from "./ResetPasswordStyle";

export default function ResetPasswordScreen({ onBack, onSendSuccess }) {
  const [email, setEmail] = useState("");

  return (
    <ImageBackground
      source={require("../../../../../assets/images/login/splash/Background.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {/* Nút Back góc trên cùng */}
            <View style={styles.header}>
              <TouchableOpacity onPress={onBack} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#120D26" />
              </TouchableOpacity>
            </View>

            {/* Tiêu đề & Mô tả */}
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>
              Please enter your email address to {'\n'}request a password reset
            </Text>

            {/* Ô nhập Email */}
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={22} color="#747688" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="abc@email.com"
                placeholderTextColor="#747688"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Nút SEND */}
            <TouchableOpacity style={styles.sendButton} onPress={onSendSuccess}>
              <Text style={styles.sendButtonText}>SEND</Text>
              <View style={styles.arrowCircle}>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
              </View>
            </TouchableOpacity>

          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}