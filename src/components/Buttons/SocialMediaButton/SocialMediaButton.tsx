import React from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import IconApple from '../../../icons/icon-apple';
import IconGoogle from '../../../icons/icon-google';
import IconInstagram from '../../../icons/icon-instagram';
import IconTiktok from '../../../icons/icon-tiktok';
import IconTwitter from '../../../icons/icon-twitter';
import { styles } from './SocialMediaButton.css';
import { SocialMediaButtonProps } from './SocialMediaButton.Types';
import { Text3 } from '../../Text/Text';

const IconsOrchester = {
  google: <IconGoogle />,
  twitter: <IconTwitter />,
  instagram: <IconInstagram />,
  tiktok: <IconTiktok />,
  apple: <IconApple />,
};

const DefaultIcon = IconsOrchester.google

export const SocialMediaButton = ({ icon, children, text, small, rounded }: SocialMediaButtonProps) => {

  let iconComponent: JSX.Element = children as JSX.Element || DefaultIcon;
  if (typeof icon === 'string') {
    iconComponent = IconsOrchester[icon] || DefaultIcon;
  } else if (typeof icon === 'function') {
    const Icon = icon;
    iconComponent = <Icon />;
  }

  iconComponent = React.cloneElement(iconComponent, { size: 24 });

  function styleButton(small: boolean | undefined, rounded: boolean | undefined) {
    switch (true) {
      case small && rounded:
        return 'circleButton';
      case small && !rounded:
        return 'squareButton';
      case !small && rounded:
        return 'largeButtonRounded';
      default:
        return 'largeButton';
    }
  }

  const typeButton = styleButton(small, rounded);
  console.log(typeButton)

  const styleApply = styles[typeButton ?? 'largeButton'];

  if (!iconComponent && !children) {
    iconComponent = DefaultIcon;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styleApply}>
        {typeButton === 'largeButton' || typeButton === 'largeButtonRounded' ? (
          <>
            {iconComponent}
            <View style={styles.buttonText}>
              <Text3 medium>{text}</Text3>
            </View>
          </>
        ) : (iconComponent)
        }
      </TouchableOpacity>
    </View>
  );
}


