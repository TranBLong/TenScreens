import React, { useState } from 'react';
import { SplashScreen, OnboardingScreen, HomeScreens } from './screens/link';

export default function MainApp() {
  const [currentScreen, setCurrentScreen] = useState('splash');

  if (currentScreen === 'splash') {
    return <SplashScreen onNext={() => setCurrentScreen('onboarding')} />;
  }
  if (currentScreen === 'onboarding') {
    return <OnboardingScreen onFinish={() => setCurrentScreen('home')} />;
  }
  return <HomeScreens />;
}