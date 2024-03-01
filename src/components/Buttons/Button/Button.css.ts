import { ButtonProps, ButtonType } from './Button';
import { useTheme } from '../../../utils/ThemeContextProvider';
import {applyAlpha} from '../../../utils/color';
import {StyleSheet} from 'react-native';
import {BUTTON_MIN_WIDTH, BORDER_RADIUS_ROUNDED, disabledStyle, selected, linkSelectedInverse} from './Button.utils';

export const getButtonColorsByButtonType = (props: ButtonProps & {type: ButtonType}) => {
  
  const {skin} = useTheme();
  const {
    buttonPrimaryBackground,
    buttonDangerBackground,
    textButtonSecondary,
    buttonDangerBackgroundSelected,
    buttonPrimaryBackgroundSelected,
    textButtonPrimaryInverse,
    textButtonPrimary,
    buttonPrimaryBackgroundInverse,
    buttonPrimaryBackgroundSelectedInverse,
    buttonSecondaryBackground,
    buttonSecondaryBackgroundSelected,
    buttonSecondaryBackgroundSelectedInverse,
    buttonSecondaryBorderSelectedInverse,
    textButtonSecondaryInverse,
    buttonSecondaryBorderInverse,
    buttonLinkBackgroundSelected,
    buttonLinkBackgroundSelectedInverse,
    textLink,
    textLinkInverse,
  } = skin.colors;

  const buttonBR = skin.borderRadii?.button || '0px';
  const buttonBRRN = parseFloat(buttonBR.replace(/px/g, ''));
  
  switch (props.type) {
    case 'secondary':
      return {
        backgroundColor: props.selected ? `${applyAlpha(
          buttonSecondaryBackgroundSelected,
          selected.opacity
        )}`: props.inverse && props.selected ? `${applyAlpha(
          buttonSecondaryBackgroundSelectedInverse,
          selected.opacity
        )}`:'transparent',
        borderColor: `${applyAlpha(
          props.inverse ? buttonSecondaryBorderInverse:
          props.inverse && props.selected ? buttonSecondaryBorderSelectedInverse: 
          props.selected ? buttonSecondaryBackgroundSelected:buttonSecondaryBackground,
          props.disabled ? disabledStyle.opacity : 1,
        )}`,
        textColor: `${applyAlpha(
          props.inverse ? textButtonSecondaryInverse:textButtonSecondary,
          props.disabled ? disabledStyle.opacity : 1,
        )}`,
        borderRounded: props.rounded ? BORDER_RADIUS_ROUNDED: buttonBRRN,
        underline: false,
      };
    case 'danger':
      return {
        backgroundColor: `${applyAlpha(
          props.selected ? buttonDangerBackgroundSelected:buttonDangerBackground,
          props.disabled ? disabledStyle.opacity : 1,
        )}`,
        borderColor: `${applyAlpha(
          props.selected ? buttonDangerBackgroundSelected:buttonDangerBackground,
          props.disabled ? disabledStyle.opacity : 1,
        )}`,
        textColor:'white',
        borderRounded: props.rounded ? BORDER_RADIUS_ROUNDED: buttonBRRN,
        underline: false,
      };
      case 'link':
        return {
          backgroundColor: props.inverse && props.selected ? `${applyAlpha(buttonLinkBackgroundSelectedInverse,
             linkSelectedInverse.opacity)}`: props.selected ? buttonLinkBackgroundSelected:'transparent',
          borderColor: props.inverse && props.selected ? `${applyAlpha(buttonLinkBackgroundSelectedInverse,
            linkSelectedInverse.opacity)}`: 
          props.selected ? buttonLinkBackgroundSelected:'transparent',
          textColor: `${applyAlpha(
            props.inverse? textLinkInverse:textLink,
            props.disabled ? disabledStyle.opacity : 1,
          )}`,
          borderRounded: props.rounded ? BORDER_RADIUS_ROUNDED: buttonBRRN,
          underline: true,
        };
    case 'primary':
    default:
      return {
        backgroundColor: `${applyAlpha(
          props.selected && props.inverse ? buttonPrimaryBackgroundSelectedInverse:
          props.inverse ? buttonPrimaryBackgroundInverse:
          props.selected ? buttonPrimaryBackgroundSelected:buttonPrimaryBackground,
          props.disabled ? disabledStyle.opacity : 1,
        )}`,
        borderColor: `${applyAlpha(
          props.inverse && props.selected ? buttonPrimaryBackgroundSelectedInverse:
          props.inverse ? buttonPrimaryBackgroundInverse: 
          props.selected ? buttonPrimaryBackgroundSelected:buttonPrimaryBackground,
          props.disabled ? disabledStyle.opacity : 1,
        )}`,
        textColor: props.inverse ? textButtonPrimaryInverse:textButtonPrimary,
        borderRounded: props.rounded ? BORDER_RADIUS_ROUNDED: buttonBRRN,
        underline: false
      };
  }
};

export const styles = (props: ButtonProps, backgroundColor:string, borderColor:string, textColor:string, borderRounded:number, underline:boolean) =>{

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
      textDecorationLine: underline ? 'underline':'none'
    },
  })
}