import React from 'react';
import { View } from 'react-native';
import { ButtonsLayoutProps } from './ButtonLayout.Type';

import { styles } from './ButtonLayout.css';

export const ButtonLayout = (props: ButtonsLayoutProps) => {

  const anyAction = !!props.primaryButton || !!props.secondaryButton || !!props.buttonLink;
  const bothButtons = !!props.primaryButton && !!props.secondaryButton;

  return anyAction ? (
    <View style={styles.container}>
      {
        (props.primaryButton || props.secondaryButton) && (
          <View style={styles.containerButtons}>
            {props.primaryButton && <>{props.primaryButton}</>}
            {props.secondaryButton && <>{props.secondaryButton}</>}
          </View>
        )
      }
      {
        props.buttonLink && (<View style={{ width: bothButtons ? '100%' : 'auto' }}>{props.buttonLink}</View>)
      }
    </View>
  ) : null

}
