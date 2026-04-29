import { globalStyles } from '@/styles/global-styles';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';


const RootLayout = () => {

  return (
    <View style={globalStyles.Background}>
      <Slot />
      <StatusBar style="light" />

    </View>
  )
}

export default RootLayout