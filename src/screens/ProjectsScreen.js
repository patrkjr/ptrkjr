import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Insitu from '../../public/insitu';

import HeroBlock from '../components/HeroBlock';
import Link from '../components/Link';

const ProjectsScreen = () => {
  //const { window } = useDimensions();
  const ptrThemes = {
    defaultTheme: { background: '#0692E2', text: '#fff', img: require('../../assets/ptrkjr_image.jpg')},
    darkTheme: { background: '#1B1B1B', text: 'white', img: require('../../assets/ptrkjr_image_dark.jpg') }}

  const ladopThemes = {
    defaultTheme: { background: '#272727', text: '#25D9B8', img: require('../../assets/ladop.jpg')},
    darkTheme: { background: '#272727', text: '#25D9B8', img: require('../../assets/ladop.jpg')}
  }

  const zeamThemes = {
    defaultTheme: { background: '#252C9E', text: '#fff', img: require('../../assets/zeam.jpg')},
    darkTheme: { background: '#0C115A', text: '#fff', img: require('../../assets/zeam.jpg')}
  }

  return(
    <View>
      <HeroBlock
        title={Insitu.title}
        release={Insitu.release}
        linkTo={Insitu.slug}
        themes={Insitu.themes}
        font={Insitu.font}
      />
      <HeroBlock
        title={"LADOP"}
        release={"may 2020"}
        linkTo={'ladop'}
        themes={ladopThemes}
        font={{ fontSize: 56, fontFamily: 'Hardware_Regular' }}
      />
      <HeroBlock
        title={"ptrkjr.dk"}
        linkTo={"ptrkjr"}
        release={"january 2021"}
        themes={ptrThemes}
        containerStyle={{ paddingTop: 80 }}
      />
      <HeroBlock
        title={"zeam"}
        release={"ultimo march 2021 "}
        linkTo={'zeam'}
        themes={zeamThemes}
        font={{ fontSize: 56, fontFamily: 'FredokaOne_Regular' }}
      />
    </View>
  )
};

const styles = StyleSheet.create({

})

export default ProjectsScreen;
