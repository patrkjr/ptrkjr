import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import HeroBlock from '../components/HeroBlock';

const ProjectsScreen = () => {
  //const { window } = useDimensions();
  const { dark, colors } = useTheme();
  const ptrTheme = !dark ?
    { background: '#1B1B1B', text: 'white', img: require('../../assets/ptrkjr_image.jpg')} :
    { background: '#1B1B1B', text: 'white', img: require('../../assets/ptrkjr_image_dark.jpg') } ;

  const inSituTheme = dark ?
    { background: '#353535', text: '#E8D0AE', img: require('../../assets/insitu.jpg')} :
    { background: '#E8D0AE', text: '#353535', img: require('../../assets/insitu.jpg') } ;

  const ladopTheme = !dark ?
    { background: '#272727', text: '#25D9B8', img: require('../../assets/ladop.jpg')} :
    { background: '#272727', text: '#25D9B8', img: require('../../assets/ladop.jpg') } ;

  const zeamTheme = !dark ?
    { background: '#4B00EB', text: '#fff', img: require('../../assets/zeam.jpg')} :
    { background: '#0A001E', text: '#4B00EB', img: require('../../assets/zeam.jpg') } ;

  return(
    <View>
      <HeroBlock
        title={"ptrkjr.dk"}
        release={"Release january 2021"}
        theme={ptrTheme}
        containerStyle={{ paddingTop: 80 }}
      />
      <HeroBlock
        title={"In situ"}
        release={"Release primo march 2021"}
        theme={inSituTheme}
        font={{ fontFamily: 'BodoniModa_Bold' }}
      />
      <HeroBlock
        title={"LADOP"}
        release={"Release may 2020"}
        theme={ladopTheme}
        font={{ fontSize: 64, fontFamily: 'Hardware_Regular' }}
      />
      <HeroBlock
        title={"zeam"}
        release={"Release ultimo march 2021 "}
        theme={zeamTheme}
        font={{ fontFamily: 'FredokaOne_Regular' }}
      />
    </View>
  )
};

const styles = StyleSheet.create({

})

export default ProjectsScreen;
