/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { ThemeContextProvider } from './src/hooks/ThemeContextProvider';
import StatusBar from './src/components/StatusBar/StatusBar';

const AppContext = () => {
    return <ThemeContextProvider skinName='Movistar-AR'>
        <StatusBar/>
        <App />
    </ThemeContextProvider>
}

AppRegistry.registerComponent(appName, () => AppContext);
