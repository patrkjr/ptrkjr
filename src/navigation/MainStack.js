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
      header: (props) => <Header {...props}/>,
      headerStyle: {
        height: 65
      }
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen}
      options={{ title: 'PTRKJR'}}
    />
  </Stack.Navigator>
}

export default MainStack;
