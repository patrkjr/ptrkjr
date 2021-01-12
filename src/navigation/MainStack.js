import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import HeaderTools from '../components/HeaderTools';
import Header from '../components/Header';

const Stack = createStackNavigator();

Stack.path = '';

const MainStack = () => {
  return <Stack.Navigator
    screenOptions={{
      header: () => <Header/>
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen}
      options={{ title: 'ptkjr.dk'}}
    />
  </Stack.Navigator>
}

export default MainStack;
