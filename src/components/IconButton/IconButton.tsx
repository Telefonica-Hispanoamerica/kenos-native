import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {IconProps} from '../../utils';
import {useTheme} from '../../utils/ThemeContextProvider';
import {IconTypeProps} from './IconButton.Types';
import { styles } from './IconButton.css';

export const IconButton = (props: IconTypeProps) => {
  const {skin} = useTheme();
  const {neutralHigh, neutralLow, brand, brandLow, inverse} = skin.colors;

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
    }
  };

  const {background, color} = themeTypeButton[props.type ?? 'lightBlank'];

  const Icon = props.icon as React.ComponentType<IconProps>;
  const iconComponent: JSX.Element = <Icon size={24} color={color} />;

  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress} style={[styles.circle, {backgroundColor: background}, props.styles]}>
        {iconComponent}
      </Pressable>
      <Text style={styles.textButton}>{props.children}</Text>
    </View>
  );
};
