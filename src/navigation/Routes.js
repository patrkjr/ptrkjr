import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import MainStack from './MainStack'
import HomeScreen from '../screens/HomeScreen';

const prefix = Linking.makeUrl('/');

const config = {
  screens: {
    Home: {
      path: ''
    },
    NotFound: '*'
  },
}

const linking = {
  prefixes: [prefix],
  config
}

export default function Routes(){
  return(
    <NavigationContainer linking={linking}>
      <MainStack/>
    </NavigationContainer>
  )
}
