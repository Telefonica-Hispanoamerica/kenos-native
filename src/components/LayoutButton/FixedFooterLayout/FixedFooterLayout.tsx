import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../../utils/ThemeContextProvider';
import { styles } from './ButtonFixedFooter.css';
import { ButtonLayout } from '../ButtonLayout/ButtonLayout';
import { FixedFooterLayoutProps } from './FixedFooterLayout.Type';



export const FixedFooterLayout = (props: FixedFooterLayoutProps) => {
  const { skin } = useTheme();
  const { backgroundContainer, backgroundFeedbackBottom } = skin.colors;

  return (
      <View
        style={[
          styles.container,
          props.shadow ? styles.withShadow : null,
        ]}>
        {props.buttonsOptions && (
          <View style={{ paddingLeft: 16, paddingRight: 16, paddingBottom:16}}>

          </View>
        )}
        <ButtonLayout
          primaryButton={props.primaryButton}
          alignment="row"
        />
      </View>
  );
};
