import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { useTheme } from '../../hooks/ThemeContextProvider';
import { applyAlpha } from '../utils/color';
import { StyleSheet } from 'react-native';
import { BUTTON_MIN_WIDTH, disabledStyle } from './Button.utils';
import { IconProps } from '../icons/type';

export type ButtonType = 'primary' | 'secondary' | 'danger';

interface CommonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  small?: boolean;
  showSpinner?: boolean;
  loadingText?: string;
  disabled?: boolean;
  leftIcon?: React.ComponentType<IconProps>;
  rightIcon?: React.ComponentType<IconProps>;
}


export interface OnPressButtonProps extends CommonProps {
  onPress?: Function;
  submit?: undefined;
  fake?: undefined;
  to?: undefined;
}

export type ButtonProps =  OnPressButtonProps


export const Button = (props: ButtonProps & { type: ButtonType }) => {
  const { leftIcon: LeftIcon, rightIcon: RightIcon } = props;
  const { skin } = useTheme();
  const { buttonPrimaryBackground, buttonDangerBackground, textButtonSecondary, buttonSecondaryBorder } = skin.colors;

  const buttonBR = skin.borderRadii?.button || '0px';
  const buttonBRRN = parseFloat(buttonBR.replace(/px/g, ''));

  const getButtonColorsByButtonType = () => {
    switch (props.type) {
      case 'secondary': return {
        backgroundColor: 'transparent',
        borderColor: `${applyAlpha(buttonSecondaryBorder, props.disabled ? disabledStyle.opacity : 1)}`,
        textColor: `${applyAlpha(textButtonSecondary, props.disabled ? disabledStyle.opacity : 1)}`,
      };
      case 'danger': return {
        backgroundColor: `${applyAlpha(buttonDangerBackground, props.disabled ? disabledStyle.opacity : 1)}`,
        borderColor: `${applyAlpha(buttonDangerBackground, props.disabled ? disabledStyle.opacity : 1)}`,
        textColor: 'white'
      };
      case 'primary':
      default:
        return {
          backgroundColor: `${applyAlpha(buttonPrimaryBackground, props.disabled ? disabledStyle.opacity : 1)}`,
          borderColor: `${applyAlpha(buttonPrimaryBackground, props.disabled ? disabledStyle.opacity : 1)}`,
          textColor: 'white'
        };
    }
  }

  const { backgroundColor, borderColor, textColor } = getButtonColorsByButtonType();

  const styles = StyleSheet.create({
    buttonContainer: {
      minWidth: BUTTON_MIN_WIDTH,
      backgroundColor: backgroundColor,
      flex: 1,
      justifyContent: 'center',
      borderRadius: buttonBRRN,
      borderWidth: 1,
      borderColor: borderColor,
      overflow: 'hidden',
    },
    buttonContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8,
      paddingBottom: props.small ? 4.5 : 10.5,
      paddingTop: props.small ? 4.5 : 10.5,
      paddingStart: props.small ? 10.5 : 14.5,
      paddingRight: props.small ? 10.5 : 14.5
    },
    buttonText: {
      color: textColor,
      fontSize: props.small ? 14 : 16,
      fontWeight: '700', textAlign: 'center',
      verticalAlign: 'middle',
    }
  })

  return (
    <View style={{ overflow: 'hidden', borderRadius: buttonBRRN, width: 143 }}>
      <Pressable disabled={props.disabled || props.showSpinner} android_ripple={{ color: textColor, borderless: false }}
        onPress={props.onPress}
        style={styles.buttonContainer}>
        <View style={styles.buttonContent}>
          {props.showSpinner ? <ActivityIndicator size='small' color={textColor} /> : <></>}
          {!props.showSpinner && LeftIcon ? <LeftIcon color={textColor} size={24} /> : <></>}
          <Text
            selectable={false}
            numberOfLines={1}
            style={styles.buttonText}>
            {props.showSpinner ? props.loadingText : props.children}
          </Text>
          {!props.showSpinner && RightIcon ? <RightIcon color={textColor} size={24} /> : <></>}
        </View>
      </Pressable>
    </View>
  );
};
