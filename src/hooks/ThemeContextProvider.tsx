import {createContext, useContext} from 'react';
import {getSkinByName} from '../components/skins/utils';
import {KnownSkinName, Skin} from '../components/skins/types';

type ThemeContext = {
  skinName: KnownSkinName;
  skin: Skin;
};

const ThemeContext = createContext<ThemeContext>({
  skinName: 'Movistar',
  skin: getSkinByName('Movistar-AR'),
});

export function ThemeContextProvider(props: any) {
  const skinName = props.skinName;
  const skin = getSkinByName(props.skinName);
  return (
    <ThemeContext.Provider value={{skinName, skin}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
