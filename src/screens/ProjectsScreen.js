import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import DATA from '../../public/data';
import { LocalizationContext } from '../navigation/Routes';

import HeroBlock from '../components/HeroBlock';
import Link from '../components/Link';

const ProjectsScreen = () => {
  const projects = Object.keys(DATA).map((k) => DATA[k]);
  const { t } = useContext(LocalizationContext);

  return(
    <View>
    {
      projects.map((project, key) =>
        <HeroBlock
          key={key}
          title={project.title}
          release={project.release}
          linkTo={project.slug}
          themes={project.themes}
          font={project.font}
          containerStyle={key == 0 ? { paddingTop: 80 } : null}
        />
      )
    }
    </View>
  )
};

const styles = StyleSheet.create({

})

export default ProjectsScreen;
