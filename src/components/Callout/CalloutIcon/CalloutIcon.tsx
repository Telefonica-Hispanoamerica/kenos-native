import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import { CalloutIconProps } from '../Callout.Types';

export const CalloutIcon = ({
  iconName,
  color,
  bgColor,
  size = 24,
  inverse,
}: CalloutIconProps) => {
  const Icon = iconName as React.ComponentType<CalloutIconProps>;
  const iconComponent: JSX.Element = <Icon size={size} color={color} />;

  const customStyles: StyleProp<ViewStyle> = {
    backgroundColor: bgColor ?? 'transparent',
    padding: 8,
    borderRadius: 99,
  };

  return <View style={inverse ? customStyles : undefined}>{iconComponent}</View>;
};
