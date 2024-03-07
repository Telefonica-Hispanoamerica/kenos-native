import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {
  IconAlertRegular,
  IconCheckedRegular,
  IconCloseRegular,
  IconInformationUserRegular,
  IconLightningRegular,
  IconWarningRegular,
} from '../../kenos-icons';
import {useTheme} from '../../utils/ThemeContextProvider';
import {CalloutProps, TypeCallout} from './Callout.Types';
import {styles} from './Callout.css';
import {CalloutIcon} from './CalloutIcon/CalloutIcon';
import {Button, IconButton} from '../Buttons';
import {Text2, Text3} from '../Text/Text';

export const Callout: React.FC<CalloutProps> = props => {
  const {
    title,
    icon,
    type,
    text,
    size,
    inverse,
    dismissable,
    linkText,
    linkAction,
    dismissableAction,
  } = props;

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
    textSecondary,
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

  const customColorText =
    inverse || (type === 'general' && size !== 'small')
      ? textSecondary
      : textPrimary;

  return (
    <View style={[styles.callout, customStyles]}>
      <View
        style={[
          styles.calloutIcon,
          size === 'small' ? {justifyContent: 'center'} : {},
        ]}>
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
        {size === 'large' && <Text3 color={textPrimary}>{title}</Text3>}
        <Text2 color={customColorText}>{text}</Text2>
        <Button
          type="link"
          small={true}
          aligned={true}
          style={size === 'small' ? {marginTop: -6} : {}}
          urgency={type}
          onPress={linkAction}>
          {linkText}
        </Button>
      </View>
      {dismissable && (
        <View style={styles.calloutAction}>
          <IconButton
            type="light"
            icon={IconCloseRegular}
            sizeCircle={24}
            sizeIcon={24}
            onPress={dismissableAction}
          />
        </View>
      )}
    </View>
  );
};
