import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'

import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (

    <NavigationContainer>

      <StatusBar barStyle="light-content" backgroundColor="#141a29" />
      <Routes />

    </NavigationContainer>

  )
}
