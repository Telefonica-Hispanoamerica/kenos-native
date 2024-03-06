import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonsLayoutProps} from './ButtonLayout.Type';
import {styles} from './ButtonLayout.css';

export const ButtonLayout = (props: ButtonsLayoutProps) => {
  const anyAction =
    !!props.primaryButton || !!props.secondaryButton || !!props.buttonLink;
  const bothButtons = !!props.primaryButton && !!props.secondaryButton;
  const customStylesLayout = StyleSheet.flatten([
    styles.container,
    {flexDirection: props.alignment ?? 'row'},
  ]);

  return anyAction ? (
    <View style={customStylesLayout}>
      {props.buttonLink && (
        <View style={{width: bothButtons ? '100%' : 'auto'}}>
          {props.buttonLink}
        </View>
      )}
      {(props.primaryButton || props.secondaryButton) && (
        <View
          style={[
            styles.containerButtons,
            {flexDirection: props.alignment ?? 'row'},
          ]}>
          {props.secondaryButton}
          {props.primaryButton}
        </View>
      )}
    </View>
  ) : null;
};
