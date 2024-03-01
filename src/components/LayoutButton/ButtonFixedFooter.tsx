import React from 'react';
import {
  View
} from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { styles } from './ButtonFixedFooter.css';
import { Button } from '../Buttons';
import { ButtonFixedFooterLayout } from './ButtonFixedFooter.Type';
import { ButtonLayout } from './ButtonLayout';
import { IconButtonLayout } from './IconButtonLayout';
import { LayoutIconButton } from './IconButtonLayout.Type';

export const ButtonFixedFooter = (props: ButtonFixedFooterLayout) => {

  const { skin } = useTheme();
  const { background, backgroundBrand } = skin.colors;
  const { inverse, medium, highlight } = props;

  return (
    <View style={[styles.container, props.shadow ? styles.withShadow : null]}>
      {props.iconButton && <View><IconButtonLayout buttonsOptions={props.buttonsOptions} /></View>}
      {props.primary && <View><ButtonLayout primaryButton={props.primaryButton} alignment='column' /></View>}
      {props.secondary && <View><ButtonLayout secondaryButton={props.secondaryButton} alignment='column' /></View>}
      {props.addLink && <View style={{ alignItems: 'center' }}><ButtonLayout buttonLink={props.buttonLink} alignment='column' /></View>}
    </View>
  )

}
