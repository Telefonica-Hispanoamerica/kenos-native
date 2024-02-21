import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  Text,
  ScrollView,
} from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { IconProps } from '../../utils';
import { IconButton } from '../Icon Button/IconButton';

export interface IconButtonProps {
  icon?: React.ComponentType<IconProps>;
  inverse?: boolean;
  medium?: boolean;
  highlight?: boolean;
  five?: boolean;
};

export type LayoutIcon = IconButtonProps

export const IconButtonLayout = (props: LayoutIcon) => {

  const { skin } = useTheme();
  const { neutralHigh, background, backgroundBrand, neutralLow, brand, brandLow, inverse, buttonPrimaryBackgroundInverse, textButtonPrimaryInverse } = skin.colors;

  const themeIcon = () => {
    if (props.inverse || props.medium || props.highlight) {
      return {
        backgroundIcon: background,
      };
    }
    else {
      return {
        backgroundIcon: backgroundBrand,
      }
    }

  };

  const { backgroundIcon } = themeIcon()

  return (
    <View style={[styles.container, { backgroundColor: backgroundIcon }]}>
      <View style={{ alignItems: 'center', marginTop: 4, }}>
        <IconButton {...props} icon={props.icon} />
        <Text style={{ color: 'black', fontSize: 12, marginTop: -24, paddingLeft: 10, }}>Texto</Text>
      </View>
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    /* justifyContent: 'space-around',
    alignItems: 'center', */
    width: 360,
    height: 80,
    marginTop: 15,
    paddingEnd: 15
  },
  containerIcon: {
    alignItems: 'center', marginTop: 4,
  },
  textButton: {
    color: 'black', fontSize: 12, marginTop: -24, paddingLeft: 10,
  }
})