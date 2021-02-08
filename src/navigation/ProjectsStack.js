import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProjectsScreen from '../screens/ProjectsScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';

const Stack = createStackNavigator();

const ProjectsStack = ({ navigation }) => {
  return(
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Projects" component={ProjectsScreen}
        options={() => {return {title: 'ptrkr | projects' }}}
      />
      <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen}
        options={({route}) => { return({
          title: `ptrkjr | ${route.params.slug}`
        })}}
      />
    </Stack.Navigator>
  )
}

export default ProjectsStack;
