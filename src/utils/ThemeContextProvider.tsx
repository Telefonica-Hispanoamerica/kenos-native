import {createContext, useContext} from 'react';
import {getSkinByName} from '../skins/utils';
import {DefaultThemeContext, ThemeContextType, getTexts} from './theme';

const ThemeContext = createContext<ThemeContextType>(DefaultThemeContext);

export function ThemeContextProvider(
  props: ThemeContextType & {children: any},
) {
  const skinName = props.skinName || DefaultThemeContext.skinName;
  const skin = props.skinName
    ? getSkinByName(props.skinName)
    : DefaultThemeContext.skin;
  const textPresets = props.textPresets || DefaultThemeContext.textPresets;
  const i18n = props.i18n || DefaultThemeContext.i18n;
  const texts = getTexts() || DefaultThemeContext.texts;
  const isDarkMode = props.isDarkMode || DefaultThemeContext.isDarkMode;

  return (
    <ThemeContext.Provider
      value={{skinName, skin, textPresets, i18n, texts, isDarkMode}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
