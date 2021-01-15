import React, { useMemo, useState } from 'react';
import Providers from './src/navigation';
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


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    RobotoMono_500Medium,
  });

  return !fontsLoaded ? <Spinner /> : <Providers />
}
