import React from 'react';
import { Pressable, View } from 'react-native';
import { IconProps, applyAlpha } from '../../../utils';
import { useTheme } from '../../../utils/ThemeContextProvider';
import { IconTypeProps } from './IconButton.Types';
import { styles } from './IconButton.css';
import { Text2 } from '../../Text/Text';


export const IconButton = (props: IconTypeProps) => {
  const { skin } = useTheme();
  const { neutralHigh, neutralLow, brand, brandLow, inverse, textPrimaryInverse } = skin.colors;

  const themeTypeButton = {
    inverse: {
      background: inverse,
      color: brand,
    },
    light: {
      background: neutralLow,
      color: neutralHigh,
    },
    medium: {
      background: brandLow,
      color: brand,
    },
    highlight: {
      background: brand,
      color: inverse,
    },
    lightBlank: {
      background: 'transparent',
      color: neutralHigh,
    },
    darkLight: {
      background: `${applyAlpha(brandLow, 0.12)}`,
      color: textPrimaryInverse
    }
  };

  const { background, color } = themeTypeButton[props.type ?? 'lightBlank'];

  const Icon = props.icon as React.ComponentType<IconProps>;
  const iconComponent: JSX.Element = <Icon size={24} color={color} />;

  return (
    <View style={styles.container}>
      <View style={props.topArea ? [styles.topArea, { backgroundColor: `${applyAlpha('#E894E64D', 0.30)}` }] : null}>
        <Pressable onPress={props.onPress} style={[styles.circle, { backgroundColor: background }]}>
          {iconComponent}
        </Pressable>
      </View>
      <View style={styles.textButton}>
        <Text2 medium>{props.children}</Text2>
      </View>
    </View>
  );
};
