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
  EventDetailsScreen,
  MapViewScreen,
} from "./screens/link";

export default function MainApp() {
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [verifySource, setVerifySource] = useState("signup");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // State lưu nguồn mở EventDetails ('home' hoặc 'map')
  const [eventSource, setEventSource] = useState("home");

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

  // Màn hình Chi tiết sự kiện
  if (currentScreen === "eventDetails") {
    return (
      <EventDetailsScreen
        navigation={{
          // Quay lại đúng màn hình trước đó (home hoặc map)
          goBack: () => setCurrentScreen(eventSource),
        }}
        route={{
          params: { eventData: selectedEvent },
        }}
      />
    );
  }

  // Màn hình Bản đồ
  if (currentScreen === "map") {
    return (
      <MapViewScreen
        navigation={{
          goBack: () => setCurrentScreen("home"),
          navigate: (screen, params) => {
            if (screen === "EventDetails") {
              setSelectedEvent(params?.eventData || null);
              setEventSource("map"); // Lưu vết đến từ map
              setCurrentScreen("eventDetails");
            }
          },
        }}
      />
    );
  }

  // Mặc định (currentScreen === "home")
  return (
    <PushDrawerLayout
      isOpen={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
      menu={
        <MenuScreen
          navigation={{
            navigate: (screen) => {
              setIsMenuOpen(false);
              // Xử lý chuyển màn hình từ Menu Drawer
              if (screen === "map" || screen === "MapViewScreen") {
                setCurrentScreen("map");
              } else if (screen === "signin" || screen === "SignOut") {
                setCurrentScreen("signin");
              }
            },
            goBack: () => setIsMenuOpen(false),
          }}
        />
      }
    >
      <HomeScreens
        navigation={{
          dispatch: () => setIsMenuOpen(true),
          navigate: (screen, params) => {
            if (screen === "Menu" || screen === "Drawer") {
              setIsMenuOpen(true);
            } else if (screen === "EventDetails") {
              setSelectedEvent(params?.eventData || null);
              setEventSource("home"); // Lưu vết đến từ home
              setCurrentScreen("eventDetails");
            } else if (screen === "MapViewScreen" || screen === "map") {
              setCurrentScreen("map");
            }
          },
        }}
      />
    </PushDrawerLayout>
  );
}