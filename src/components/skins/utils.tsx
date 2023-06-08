import {
  BLAU_SKIN,
  TELEFONICA_SKIN,
  VIVO_SKIN,
  O2_SKIN,
  MOVISTAR_SKIN,
  MOVISTAR_AR_SKIN,
} from './constants';
import {getBlauSkin} from './blau';
import {getTelefonicaSkin} from './telefonica';
import {getVivoSkin} from './vivo';
import {getO2Skin} from './o2';
import {getMovistarSkin} from './movistar';
import {getMovistarARSkin} from './movistar-ar';
import type {SkinVariant, KnownSkin, KnownSkinName} from './types';

export const getSkinByName = (
  name: KnownSkinName,
  variant?: SkinVariant,
): KnownSkin => {
  switch (name) {
    case BLAU_SKIN:
      return getBlauSkin(variant);
    case TELEFONICA_SKIN:
      return getTelefonicaSkin(variant);
    case VIVO_SKIN:
      return getVivoSkin(variant);
    case O2_SKIN:
      return getO2Skin(variant);
    case MOVISTAR_SKIN:
      return getMovistarSkin(variant);
    case MOVISTAR_AR_SKIN:
      return getMovistarARSkin(variant);
    default: {
      return getMovistarSkin(variant);
    }
  }
};

// // copied/adapted from https://github.com/gregberge/react-flatten-children/blob/master/src/index.tsx
// export const flattenChildren = (
//   children: React.ReactNode,
// ): Array<React.ReactNode> => {
//   const childrenArray = React.Children.toArray(children);
//   return childrenArray.reduce((flatChildren: Array<React.ReactNode>, child) => {
//     if ((child as React.ReactElement<any>).type === React.Fragment) {
//       return flatChildren.concat(
//         flattenChildren((child as React.ReactElement<any>).props.children),
//       );
//     }
//     flatChildren.push(child);
//     return flatChildren;
//   }, []);
// };
