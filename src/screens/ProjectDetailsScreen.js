import React from 'react';
import { View, Text } from 'react-native';

import DATA from '../../public/data';
import Link from '../components/Link';

const ProjectDetailsScreen = ({ route, navigation }) => {
  const { params } = route;
  const data = DATA[route.params.slug];

  if (!data) {
    return <View style={{ flex: 1, marginTop: 80 }}>
      <Text>I dont have a project here. One day... 🥳 In the meantime  Have a look at <Link to="/projects">my other projects</Link>.</Text>
    </View>
  }
  return(
    <View>
      <Text>{data.title}</Text>
    </View>
  )
}

export default ProjectDetailsScreen;
