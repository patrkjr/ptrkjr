import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LocalizationContext } from '../navigation/Routes';

import Link from './Link';
import { FontStyles, Layouts } from '../../constants/Styles';

const ProjectNotFound = () => {
  const { t } = useContext(LocalizationContext);
  const { colors } = useTheme();
  return(
    <View style={styles.container}>
    <View style={styles.content}>
      <Text style={[FontStyles.h1, { color: colors.text }]}>{t('noProject.title')}</Text>
      <Text style={[FontStyles.h5, {color: colors.text}]}>{t('noProject.text')} <Link style={styles.link} to="/projects">{t('noProject.link')}</Link>.</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    height: '100vh',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    maxWidth: 767,
    paddingHorizontal: Layouts.mediumSpacing,
    marginHorizontal: 'auto'
  },
  link: {
    textDecorationLine: 'underline'
  }
})

export default ProjectNotFound;
