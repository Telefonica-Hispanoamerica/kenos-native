import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import {
  IconAlertRegular,
  IconCheckedRegular,
  IconCloseRegular,
  IconInformationUserRegular,
  IconLightningRegular,
  IconWarningRegular,
} from '../../kenos-icons';
import { useTheme } from '../../utils/ThemeContextProvider';
import { IconButton } from '../IconButton/IconButton';
import { CalloutProps, TypeCallout } from './Callout.Types';
import { styles } from './Callout.css';
import { CalloutIcon } from './CalloutIcon/CalloutIcon';

export const Callout: React.FC<CalloutProps> = props => {
  const {title, icon, type, text, size, inverse, dismissable} = props;

  const {skin} = useTheme();
  const {
    backgroundAlternative,
    brandLow,
    neutralHigh,
    brandHigh,
    borderSelected,
    successHigh,
    success,
    successLow,
    warningHigh,
    warning,
    warningLow,
    errorHigh,
    error,
    errorLow,
    background,
    textPrimary,
    textSecondary
  } = skin.colors;

  const themeTypeCallout: TypeCallout = {
    general: {
      iconName: IconLightningRegular,
      color: neutralHigh,
      borderColor: backgroundAlternative,
      bgColor: backgroundAlternative,
    },
    info: {
      iconName: IconInformationUserRegular,
      color: brandHigh,
      borderColor: borderSelected,
      bgColor: brandLow,
    },
    success: {
      iconName: IconCheckedRegular,
      color: successHigh,
      borderColor: success,
      bgColor: successLow,
    },
    warning: {
      iconName: IconAlertRegular,
      color: warningHigh,
      borderColor: warning,
      bgColor: warningLow,
    },
    danger: {
      iconName: IconWarningRegular,
      color: errorHigh,
      borderColor: error,
      bgColor: errorLow,
    },
  };

  const {iconName, color, borderColor, bgColor} =
    themeTypeCallout[type ?? 'general'];

  const customStyles: StyleProp<ViewStyle> = {
    backgroundColor: !inverse && bgColor ? bgColor : 'transparent',
    borderColor: !inverse && borderColor ? borderColor : 'transparent',
    borderWidth: 1,
    padding: size === 'small' ? 8 : 16,
  };

  const iconButtonStyles: StyleProp<ViewStyle> = {
    height: 24,
    width: 24,
    backgroundColor: background,
    marginTop: 0,
  };

  const customStylesTitle = {
    ...styles.calloutTitle,
    color: textPrimary
  }

  const customStylesText = {
    ...styles.calloutText,
    color: inverse || type === 'general' && size !== 'small' ? textSecondary : textPrimary
  }

  return (
    <View style={[styles.callout, customStyles]}>
      <View style={styles.calloutIcon}>
        {icon && (
          <CalloutIcon
            color={color}
            iconName={iconName}
            bgColor={bgColor}
            inverse={inverse}
          />
        )}
      </View>
      <View style={styles.calloutContent}>
        { size === 'large' && <Text style={customStylesTitle}>{title}</Text> }
        <Text style={customStylesText}>{text}</Text>
      </View>
      {dismissable && (
        <View style={styles.calloutAction}>
          <IconButton icon={IconCloseRegular} styles={iconButtonStyles} />
        </View>
      )}
    </View>
  );
};
