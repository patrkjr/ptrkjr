import React, { useState, useMemo, useEffect } from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { useColorScheme } from 'react-native-appearance';
import { useTheme } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from '../../constants/Styles';

import MainStack from './MainStack'
import HomeScreen from '../screens/HomeScreen';
import IconButton from '../components/IconButton';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import en from '../../locales/en';
import da from '../../locales/da';

i18n.fallbacks = true;
i18n.defaultLocale = 'en';
i18n.translations = { da, en };
i18n.translations["en-US", 'en-GB'] = en;

const prefix = Linking.makeUrl('/');

const config = {
  screens: {
    Home: {
      path: ''
    },
    Projects: {
      screens: {
        Projects: {
          path: '/projects'
        },
        ProjectDetails: {
          path: '/projects/:slug'
        }
      }
    },
    NotFound: '*'
  },
}

const linking = {
  prefixes: [prefix],
  config
}

export const LocalizationContext = React.createContext();
export const navigationRef = React.createRef();
export const ThemeContext = React.createContext();

export default function Routes(){
  const systemTheme = useColorScheme();
  const [scheme, setScheme] = useState(systemTheme);
  const themeContext = useMemo(
    () => ({
      scheme,
      setScheme
    }),
    [scheme]
  );
  const [locale, setLocale] = useState(Localization.locale);
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );

  useEffect(() => {
    if (systemTheme !== scheme) {
      setScheme(scheme == 'dark' ? 'light' : 'dark');
    }
  }, [systemTheme]);

  const styles = {
    widget: {
      width: 54,
      height: 54,
      position: 'fixed',
      backgroundColor: scheme == 'light' ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.9)',
      bottom: 120,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6
    }
  }

  return(
    <LocalizationContext.Provider value={localizationContext}>
    <ThemeContext.Provider value={themeContext}>
      <NavigationContainer linking={linking} ref={navigationRef} theme={scheme == 'dark' ? DarkTheme : DefaultTheme }>
        <MainStack/>
        <View style={styles.widget}>
          <IconButton name={'sun'} size={30} color={scheme == 'dark' ? 'white' : 'black'} onPress={() => setScheme(scheme == 'dark' ? 'light' : 'dark')}/>
        </View>
      </NavigationContainer>
    </ThemeContext.Provider>
    </LocalizationContext.Provider>
  )
}
