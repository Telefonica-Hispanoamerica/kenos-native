import React from 'react';
import {View} from 'react-native';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {styles} from './ButtonFixedFooter.css';
import {ButtonFixedFooterLayout} from './ButtonFixedFooter.Type';
import {ButtonLayout} from '../ButtonLayout/ButtonLayout';
import {IconButtonLayout} from '../IconButtonLayout/IconButtonLayout';
import {Text1, Text3} from '../../Text/Text';

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
      {props.children}
      {props.fixedFooter && (
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            gap: 16,
            padding: 16,
          }}>
          <View style={{marginTop: 8}}>
            <Text1 regular>{props.textTitle}</Text1>
            <View style={{flexDirection: 'row'}}>
              <Text3 medium>{props.textPrice}</Text3>
              <View style={{paddingTop: 5}}>
                <Text1 regular>{props.typeMsj}</Text1>
              </View>
            </View>
          </View>
          <ButtonLayout primaryButton={props.primaryButton}></ButtonLayout>
        </View>
      )}
      {props.buttonsOptions && !props.fixedFooter && !props.children ? (
        <View style={{paddingLeft: 16, paddingRight: 16, paddingBottom: 16}}>
          <IconButtonLayout
            light={props.light}
            inverse={props.inverse}
            buttonsOptions={props.buttonsOptions}
          />
        </View>
      ) : null}
      {!props.fixedFooter && !props.children && (
        <ButtonLayout
          primaryButton={props.primaryButton}
          secondaryButton={props.secondaryButton}
          buttonLink={props.buttonLink}
          alignment="column-reverse"
        />
      )}
    </View>
  );
};
