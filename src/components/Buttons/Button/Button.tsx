import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {getButtonColorsByButtonType, styles} from './Button.css';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {ButtonProps, ButtonType, UrgencyThemeType} from './Button.Types';

export const Button = (props: ButtonProps & {type: ButtonType}) => {
  const {leftIcon: LeftIcon, rightIcon: RightIcon} = props;

  const {skin} = useTheme();
  const buttonBR = skin.borderRadii?.button ?? '0px';
  const buttonBRRN = parseFloat(buttonBR.replace(/px/g, ''));

  const {textLink, brandHigh, successHigh, warningHigh, errorHigh} =
    skin.colors;

  const urgencyTheme: UrgencyThemeType = {
    general: textLink,
    info: brandHigh,
    success: successHigh,
    warning: warningHigh,
    danger: errorHigh,
  };

  const {backgroundColor, borderColor, textColor, borderRounded, underline} =
    getButtonColorsByButtonType(props);
  const colorUrgency = urgencyTheme[props.urgency ?? 'general'];
  const customColor = props.urgency && colorUrgency ? colorUrgency : textColor;
  const {
    buttonContainer,
    buttonContent,
    buttonText,
    buttonLink,
    textUnderline,
  } = styles(
    props,
    backgroundColor,
    borderColor,
    textColor,
    borderRounded,
    customColor,
  );

  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: buttonBRRN,
      }}>
      <Pressable
        disabled={props.disabled ?? props.showSpinner}
        android_ripple={{
          color:
            props.type === 'link' && props.aligned ? 'transparent' : textColor,
          borderless: false,
        }}
        onPress={props.onPress}
        style={[
          props.type === 'link' ? buttonLink : buttonContainer,
          props.style as ViewStyle,
        ]}>
        <View style={buttonContent}>
          {props.showSpinner ? (
            <ActivityIndicator size="small" color={customColor} />
          ) : (
            <></>
          )}
          {!props.showSpinner && LeftIcon ? (
            <LeftIcon color={customColor} size={24} />
          ) : (
            <></>
          )}
          <Text
            selectable={false}
            numberOfLines={1}
            style={[
              buttonText,
              {color: customColor},
              underline ? textUnderline : undefined,
            ]}>
            {props.showSpinner ? props.loadingText : props.children}
          </Text>
          {!props.showSpinner && RightIcon ? (
            <RightIcon color={customColor} size={24} />
          ) : (
            <></>
          )}
        </View>
      </Pressable>
    </View>
  );
};
