import React from 'react';
import {View} from 'react-native';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {styles} from './ButtonFixedFooter.css';
import {ButtonFixedFooterLayout} from './ButtonFixedFooter.Type';
import {ButtonLayout} from '../ButtonLayout/ButtonLayout';
import {IconButtonLayout} from '../IconButtonLayout/IconButtonLayout';

export const ButtonFixedFooter = (props: ButtonFixedFooterLayout) => {
  const {skin} = useTheme();
  const {backgroundContainer, backgroundFeedbackBottom} = skin.colors;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.inverse
            ? backgroundFeedbackBottom
            : backgroundContainer,
        },
        props.shadow ? styles.withShadow : null,
      ]}>
      {props.buttonsOptions && (
        <IconButtonLayout
          light={props.light}
          inverse={props.inverse}
          buttonsOptions={props.buttonsOptions}
        />
      )}
      <ButtonLayout
        primaryButton={props.primaryButton}
        secondaryButton={props.secondaryButton}
        buttonLink={props.buttonLink}
        alignment="column-reverse"
      />
    </View>
  );
};
