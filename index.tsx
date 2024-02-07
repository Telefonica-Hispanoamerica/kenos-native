/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import appJson from './app.json';
import { ThemeContextProvider } from './src/utils/ThemeContextProvider';
import StatusBar from './src/components/StatusBar/StatusBar';
    
const AppContext = () => {
    return <ThemeContextProvider skinName='Movistar-AR'>
        <StatusBar/>
        <App />
    </ThemeContextProvider>
}

AppRegistry.registerComponent(appJson.name, () => AppContext);
