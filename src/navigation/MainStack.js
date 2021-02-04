import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
//import HeaderTools from '../components/HeaderTools';
import Header from '../components/Header';

const Stack = createStackNavigator();

Stack.path = '';

const MainStack = () => {
  return <Stack.Navigator
    screenOptions={{
      headerTransparent: true,
      header: (props) => <Header {...props}/>,
      headerStyle: {
        height: 65,
      }
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen}
      options={{ title: 'PTRKJR'}}
    />
    <Stack.Screen name="Projects" component={ProjectsScreen}/>
  </Stack.Navigator>
}

export default MainStack;
