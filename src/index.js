import React, { useState } from "react";
import {
  SplashScreen,
  OnboardingScreen,
  HomeScreens,
  SignInScreen,
  SignUpScreen,
  VerificationScreen,
  ResetPasswordScreen
} from "./screens/link";

export default function MainApp() {
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [verifySource, setVerifySource] = useState("signup"); // Lưu nguồn tới Verification ('signup' hoặc 'resetPassword')

  if (currentScreen === "splash") {
    return <SplashScreen onNext={() => setCurrentScreen("onboarding")} />;
  }
  if (currentScreen === "onboarding") {
    return <OnboardingScreen onFinish={() => setCurrentScreen("signin")} />;
  }
  if (currentScreen === "signin") {
    return (
      <SignInScreen
        onNavigateSignUp={() => setCurrentScreen("signup")}
        onSignInSuccess={() => setCurrentScreen("home")}
        onNavigateResetPassword={() => setCurrentScreen("resetPassword")}
      />
    );
  }
  if (currentScreen === "signup") {
    return (
      <SignUpScreen
        onNavigateSignIn={() => setCurrentScreen("signin")}
        onSignUpSuccess={() => {
          setVerifySource("signup"); // Đánh dấu từ Sign Up sang
          setCurrentScreen("verification");
        }}
        onBack={() => setCurrentScreen("signin")}
      />
    );
  }
  if (currentScreen === "resetPassword") {
    return (
      <ResetPasswordScreen
        onBack={() => setCurrentScreen("signin")}
        onSendSuccess={() => {
          setVerifySource("resetPassword"); // Đánh dấu từ Reset Password sang
          setCurrentScreen("verification");
        }}
      />
    );
  }
  if (currentScreen === "verification") {
    return (
      <VerificationScreen
        // Back đúng màn hình đã đứng trước đó
        onBack={() => setCurrentScreen(verifySource === "signup" ? "signup" : "resetPassword")}
        // Xử lý đích đến phù hợp với từng mục đích xác thực
        onVerifySuccess={() => {
          if (verifySource === "signup") {
            setCurrentScreen("home");
          } else {
            setCurrentScreen("signin"); // Hoặc điều hướng sang màn NewPasswordScreen nếu có
          }
        }}
      />
    );
  }
  return <HomeScreens />;
}