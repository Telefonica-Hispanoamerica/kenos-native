import React from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import {getButtonColorsByButtonType, styles} from './Button.css';
import {useTheme} from '../../utils/ThemeContextProvider';
import {IconProps} from '../../utils/types';

export type ButtonType = 'primary' | 'secondary' | 'danger';

interface CommonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  small?: boolean;
  showSpinner?: boolean;
  loadingText?: string;
  disabled?: boolean;
  rounded?: boolean;
  inverse?: boolean;
  leftIcon?: React.ComponentType<IconProps>;
  rightIcon?: React.ComponentType<IconProps>;
}

export interface OnPressButtonProps extends CommonProps {
  onPress?: Function | null | undefined | any;
  submit?: undefined;
  fake?: undefined;
  to?: undefined;
}

export type ButtonProps = OnPressButtonProps;

export const Button = (props: ButtonProps & {type: ButtonType}) => {
  const {leftIcon: LeftIcon, rightIcon: RightIcon} = props;

  const {skin} = useTheme(); 
  const buttonBR = skin.borderRadii?.button || '0px';
  const buttonBRRN = parseFloat(buttonBR.replace(/px/g, '')); 
  
  const {backgroundColor, borderColor, textColor, borderRounded}=getButtonColorsByButtonType(props);
  const {buttonContainer, buttonContent, buttonText}=styles(props,backgroundColor, borderColor,textColor,borderRounded)

  console.log(props.children)

  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: buttonBRRN,
        flex: 1,
      }}>
      <Pressable
        disabled={props.disabled || props.showSpinner}
        android_ripple={{color: textColor, borderless: false}}
        onPress={props.onPress}
        style={buttonContainer}>
        <View style={buttonContent}>
          {props.showSpinner ? (
            <ActivityIndicator size="small" color={textColor} />
          ) : (
            <></>
          )}
          {!props.showSpinner && LeftIcon ? (
            <LeftIcon color={textColor} size={24} />
          ) : (
            <></>
          )}
          <Text selectable={false} numberOfLines={1} style={buttonText}>
            {props.showSpinner ? props.loadingText : props.children}
          </Text>
          {!props.showSpinner && RightIcon ? (
            <RightIcon color={textColor} size={24} />
          ) : (
            <></>
          )}
        </View>
      </Pressable>
    </View>
  );
};
