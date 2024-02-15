/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import appJson from './app.json';
import {ThemeContextProvider} from './src/utils/ThemeContextProvider';
import StatusBar from './src/components/StatusBar/StatusBar';
import {DefaultThemeContext, ThemeContextType} from './src/utils/theme';

const AppContext = () => {
  const appTheme: ThemeContextType = {
    ...DefaultThemeContext,
    skinName: 'Movistar',
    i18n: {locale: 'es-CO', phoneNumberFormattingRegionCode: 'CO'},
  };

  return (
    <ThemeContextProvider {...appTheme}  >
      <StatusBar />
      <App />
    </ThemeContextProvider>
  );
};

AppRegistry.registerComponent(appJson.name, () => AppContext);
