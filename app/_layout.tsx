import { globalStyles } from '@/styles/global-styles';
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, View } from 'react-native';

const isAndroid = Platform.OS === 'android';

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('back')
}
const RootLayout = () => {

  return (
    <View style={globalStyles.Background}>
      <Slot />
      <StatusBar style="light" />

    </View>
  )
}

export default RootLayout