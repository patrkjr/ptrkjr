import React, { useState, useMemo } from 'react';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import en from '../locales/en';
import da from '../locales/da';

i18n.fallbacks = true;
i18n.defaultLocale = 'en';
i18n.translations = { da, en };
i18n.translations["en-US"] = en;

const LocalizationContext = React.createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocal] = useState(Localization.locale);
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocal,
    }),
    [locale]
  );

  return <LocalizationContext.Provider value={localizationContext}>
    {children}
  </LocalizationContext.Provider>
};

export default LocalizationContext;
