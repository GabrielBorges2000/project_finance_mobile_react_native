
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/global/styles/theme/default';

import { NavigationContainer } from '@react-navigation/native'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
 } from '@expo-google-fonts/poppins';
import { AppRoutes } from './src/routes/app.routes';
import { Dashboard } from './src/screens/Dashboard';



export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded){
    <AppLoading />
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}
