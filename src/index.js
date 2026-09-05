import React, { useState } from "react";
import {
  SplashScreen,
  OnboardingScreen,
  HomeScreens,
  SignInScreen,
  SignUpScreen,
  VerificationScreen,
} from "./screens/link";

export default function MainApp() {
  const [currentScreen, setCurrentScreen] = useState("splash");

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
        onSignUpSuccess={() => setCurrentScreen("home")}
      />
    );
  }
  if (currentScreen === "signup") {
    return (
      <SignUpScreen
        onNavigateSignIn={() => setCurrentScreen("signin")} //Về lại Sign In
        onSignUpSuccess={() => setCurrentScreen("verification")}
        onBack={() => setCurrentScreen("signin")}
      />
    ); //Nút back góc trên
  }
  if (currentScreen === "verification") {
    return (
      <VerificationScreen
        onBack={() => setCurrentScreen("signup")} //Quay lại màn hình Sign Up
        onVerifySuccess={() => setCurrentScreen("home")} //Verify thành công thì vào HomeScreens
      />
    );
  }
  return <HomeScreens />;
}
