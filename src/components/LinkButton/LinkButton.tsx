import React from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import {getButtonColorsByButtonType, styles} from './Button.css';
import {useTheme} from '../../utils/ThemeContextProvider';
import {IconProps} from '../../utils/types';

export type ButtonType = 'primary';

interface CommonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  small?: boolean;
  showSpinner?: boolean;
  showBackground?: boolean;
  loadingText?: string;
  disabled?: boolean;
  rounded?: boolean;
  inverse?: boolean;
  leftIcon?: React.ComponentType<IconProps>;
  rightIcon?: React.ComponentType<IconProps>;
}

export type ButtonProps = CommonProps;

export const LinkButton = (props: ButtonProps & {type: ButtonType}) => {
  const {leftIcon: LeftIcon, rightIcon: RightIcon} = props;

  const {skin} = useTheme(); 
  const buttonBR = skin.borderRadii?.button || '0px';
  const buttonBRRN = parseFloat(buttonBR.replace(/px/g, '')); 
  
  const {backgroundColor, borderColor, textColor, borderRounded}=getButtonColorsByButtonType(props);
  const {buttonContainerLink, buttonContainerBackgorundLink, buttonContent, buttonText}=styles(props,backgroundColor, borderColor,textColor,borderRounded)

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
        style={props.showBackground?buttonContainerBackgorundLink:buttonContainerLink}>
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
              {props.showSpinner ? props.children : props.loadingText}
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
