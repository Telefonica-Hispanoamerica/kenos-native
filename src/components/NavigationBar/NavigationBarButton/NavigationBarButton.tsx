import React from 'react';
import { GestureResponderEvent, Pressable, View } from 'react-native';
import { useTheme } from '../../../utils/ThemeContextProvider';
import { IconProps } from '../../../utils';

import {
  IconArrowLineLeftRegular,
  IconMenuRegular,
  IconContactBookFilled,
  IconLocationFilled,
  IconKebabMenuLight,
  IconCloseRegular,
  IconReloadRegular,
  IconControlsRegular,
  IconSearchRegular
} from '../../../kenos-icons';

type IconType = keyof typeof IconsOrchester;

type NavigationBarButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  icon?: IconType | React.ComponentType<IconProps>;
  inverse?: boolean;
};

const IconsOrchester = {
  back: <IconArrowLineLeftRegular />,
  reload: <IconReloadRegular />,
  close: <IconCloseRegular />,
  more: <IconKebabMenuLight />,
  profile: <IconContactBookFilled />,
  adjust: <IconControlsRegular />,
  location: <IconLocationFilled />,
  menu: <IconMenuRegular />,
  search: <IconSearchRegular />
};

const DefaultIcon = IconsOrchester.profile;

function NavigationBarButton({ onPress, children, icon, inverse }: NavigationBarButtonProps) {
  
  const { skin } = useTheme();
  const { textNavigationBarPrimary, textPrimary } = skin.colors;

  
  let iconComponent: JSX.Element = children as JSX.Element || DefaultIcon;
  if (typeof icon === 'string') {
    iconComponent = IconsOrchester[icon] || DefaultIcon;
  } else if (typeof icon === 'function') {
    const Icon = icon as React.ComponentType<IconProps>;
    iconComponent = <Icon />;
  }

   iconComponent = React.cloneElement(iconComponent, { color: inverse? textPrimary : textNavigationBarPrimary, size: 24 });
  
  if (!iconComponent && !children) {
    iconComponent = DefaultIcon;
  }
  return (
    <View style={{ height: 28, width: 28, borderRadius: 50, overflow: 'hidden' }}>
      <Pressable
        onPress={onPress}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        android_ripple={{ color: 'rgba(255,255,255,0.4)', foreground: true }}>
        {children || iconComponent}
      </Pressable>
    </View>
  );
}

export default NavigationBarButton;
