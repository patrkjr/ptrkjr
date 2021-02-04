import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import Providers from './src/navigation';
import { DefaultTheme, DarkTheme } from './constants/Styles'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
//import AppLoading from 'expo-app-loading';

import { useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';

import Spinner from './src/components/Spinner';


const Loading = ({ colors }) => (
  <View style={{ flex: 1 , backgroundColor: colors.background}}>
    <Spinner color={colors.primary}/>
  </View>
)

export default function App() {
  const theme = useColorScheme('light') == "dark" ? DarkTheme : DefaultTheme;
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    RobotoMono_500Medium,
    'Hardware_Regular': require('./assets/fonts/DDCHardware-Regular.otf'),
    'OpenSans_ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
    'OpenSans_Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'BodoniModa_Bold': require('./assets/fonts/BodoniModa-Bold.ttf'),
    'FredokaOne_Regular': require('./assets/fonts/FredokaOne-Regular.ttf')
  });

  return <AppearanceProvider>
    {!fontsLoaded ? <Loading colors={theme.colors}/> : <Providers />}
  </AppearanceProvider>
}
