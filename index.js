/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ThemeContextProvider } from './src/hooks/ThemeContextProvider';

const AppContext = () => {
    return <ThemeContextProvider skinName='Movistar-AR'>
        <App/>
    </ThemeContextProvider>
}

AppRegistry.registerComponent(appName, () => AppContext);
