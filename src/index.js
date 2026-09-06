import React, { useState } from "react";
import {
  SplashScreen,
  OnboardingScreen,
  HomeScreens,
  SignInScreen,
  SignUpScreen,
  VerificationScreen,
  ResetPasswordScreen,
  MenuScreen,
  PushDrawerLayout,
} from "./screens/link";

export default function MainApp() {
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [verifySource, setVerifySource] = useState("signup");
  // State mới: quản lý Menu đang mở hay đóng (thay cho việc chuyển hẳn sang "menu")
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          setVerifySource("signup");
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
          setVerifySource("resetPassword");
          setCurrentScreen("verification");
        }}
      />
    );
  }
  if (currentScreen === "verification") {
    return (
      <VerificationScreen
        onBack={() => setCurrentScreen(verifySource === "signup" ? "signup" : "resetPassword")}
        onVerifySuccess={() => {
          if (verifySource === "signup") {
            setCurrentScreen("home");
          } else {
            setCurrentScreen("signin");
          }
        }}
      />
    );
  }

  // Đã bỏ nhánh currentScreen === "menu" riêng biệt.
  // Menu giờ LUÔN đi kèm với Home, chỉ ẩn/hiện qua isMenuOpen,
  // nên Home không bị "biến mất" khi mở Menu nữa.

  // Mặc định (currentScreen === "home"): render Home bọc trong PushDrawerLayout
  return (
    <PushDrawerLayout
      isOpen={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
      menu={
        <MenuScreen
          navigation={{
            // Menu tự đóng lại sau khi bấm 1 mục bất kỳ
            navigate: (screen) => {
              setIsMenuOpen(false);
              // TODO: nếu cần điều hướng thật (My Profile, Settings...),
              // xử lý thêm ở đây, ví dụ: if (screen === 'Settings') setCurrentScreen('settings');
            },
            goBack: () => setIsMenuOpen(false),
          }}
        />
      }
    >
      <HomeScreens
        navigation={{
          // Hamburger trong Home gọi navigation.dispatch(...) -> mở Menu
          dispatch: () => setIsMenuOpen(true),
          navigate: (screen) => {
            if (screen === "Menu" || screen === "Drawer") setIsMenuOpen(true);
          },
        }}
      />
    </PushDrawerLayout>
  );
}