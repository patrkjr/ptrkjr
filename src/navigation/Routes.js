import React, { useState, useMemo, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { useColorScheme } from 'react-native-appearance';
import { useTheme } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from '../../constants/Styles';

import MainStack from './MainStack'
import HomeScreen from '../screens/HomeScreen';

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
      path: 'projects'
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

  return(
    <LocalizationContext.Provider value={localizationContext}>
    <ThemeContext.Provider value={themeContext}>
      <NavigationContainer linking={linking} ref={navigationRef} theme={scheme == 'dark' ? DarkTheme : DefaultTheme }>
        <MainStack/>
      </NavigationContainer>
    </ThemeContext.Provider>
    </LocalizationContext.Provider>
  )
}
