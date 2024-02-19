import { ButtonProps } from './LinkButton';
import { ButtonType } from './LinkButton';
import { useTheme } from '../../utils/ThemeContextProvider';
import {applyAlpha} from '../../utils/color';
import {StyleSheet} from 'react-native';
import {BUTTON_MIN_WIDTH, BORDER_RADIUS_ROUNDED, disabledStyle, disabledBackground} from './Button.utils';

export const getButtonColorsByButtonType = (props: ButtonProps & {type: ButtonType}) => {
  
  const {skin} = useTheme();
  const {
    buttonPrimaryBackground,
    buttonDangerBackground,
    textButtonSecondary,
    buttonSecondaryBorder,
    textButtonPrimaryInverse,
    textButtonPrimary,
    buttonPrimaryBackgroundInverse,
    buttonLinkBackgroundSelected,
    buttonLinkBackgroundSelectedInverse,
    textLinkInverse,
    textLink
  } = skin.colors;

  const buttonBR = skin.borderRadii?.button || '0px';
  const buttonBRRN = parseFloat(buttonBR.replace(/px/g, '')); 

  switch (props.type) {
    case 'primary':
    default:
      return {
        backgroundColor: props.inverse && props.showBackground ? `${applyAlpha(
          buttonLinkBackgroundSelectedInverse,
          disabledStyle.opacity,
        )}`: buttonLinkBackgroundSelected,
        borderColor: `${applyAlpha(
          props.inverse ? buttonLinkBackgroundSelected:'transparent',
          props.disabled ? disabledStyle.opacity : 1,
        )}`,
        textColor: `${applyAlpha(
          props.inverse ? textLinkInverse:textLink,
          props.disabled ? disabledStyle.opacity : 1,
        )}`,
        borderRounded: props.rounded ? BORDER_RADIUS_ROUNDED: buttonBRRN,
      };
  }
};

export const styles = (props: ButtonProps, backgroundColor:string, borderColor:string, textColor:string, borderRounded:number) =>{

  return StyleSheet.create({
    buttonContainer: {
      minWidth: BUTTON_MIN_WIDTH,
      backgroundColor: backgroundColor,
      flex: 1,
      justifyContent: 'center',
      borderRadius: borderRounded,
      borderWidth: 1,
      borderColor: borderColor,
      overflow: 'hidden',
    },
    buttonContainerLink: {
      minWidth: BUTTON_MIN_WIDTH,
      flex: 1,
      justifyContent: 'center',
      overflow: 'hidden',
    },
    buttonContainerBackgorundLink: {
      minWidth: BUTTON_MIN_WIDTH,
      backgroundColor: backgroundColor,
      flex: 1,
      justifyContent: 'center',
      borderRadius: borderRounded,
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
      paddingRight: props.small ? 10.5 : 14.5,
    },
    buttonText: {
      color: textColor, 
      fontSize: props.small ? 14 : 16,
      fontWeight: '700',
      textAlign: 'center',
      verticalAlign: 'middle',
      textDecorationLine: 'underline',
    },
  })
}