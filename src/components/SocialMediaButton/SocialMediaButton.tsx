import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { IconProps } from '../../utils';
import IconApple from '../../icons/icon-apple';
import IconGoogle from '../../icons/icon-google';
import IconInstagram from '../../icons/icon-instagram';
import IconTiktok from '../../icons/icon-tiktok';
import IconTwitter from '../../icons/icon-twitter';

type IconType = keyof typeof IconsOrchester;

type IconButtonProps = {
  children?:React.ReactNode;
  icon?: IconType | React.ComponentType<IconProps>;
};

const IconsOrchester = {
  google: <IconGoogle/>,
  twitter: <IconTwitter/>,
  instagram: <IconInstagram/>,
  tiktok: <IconTiktok/>,
  apple: <IconApple/>,
};

const DefaultIcon=IconsOrchester.google

export const SocialMediaButton = ({icon,children}: IconButtonProps) => {

  let iconComponent: JSX.Element = children as JSX.Element || DefaultIcon;
  if (typeof icon === 'string') {
    iconComponent = IconsOrchester[icon] || DefaultIcon;
  } else if (typeof icon === 'function') {
    const Icon = icon as React.ComponentType<IconProps>;
    iconComponent = <Icon />;
  }

  iconComponent = React.cloneElement(iconComponent,{size: 24 });
  
  if (!iconComponent && !children) {
    iconComponent = DefaultIcon;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.largeButton}>
        {children||iconComponent}
        <Text style={styles.buttonText}>Entrar con Red Social</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton}>
        {children||iconComponent}
      </TouchableOpacity>
      <TouchableOpacity style={styles.largeButtonRounded}>
        {children||iconComponent}
        <Text style={styles.buttonText}>Entrar con Red Social</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.squareButton}>
        {children||iconComponent}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 10,
  },
  largeButtonRounded: {
    width: 217,
    height: 48,
    borderRadius: 48,
    backgroundColor: '#FFFFFF',
    shadowColor: '#2A2A3C33',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.33,
    shadowRadius: 7,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  largeButton: {
    width: 217,
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: '#2A2A3C33',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.33,
    shadowRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  squareButton: {
    width: 48,
    height: 48,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: '#2A2A3C33',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.33,
    shadowRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#2A2A3C33',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.33,
    shadowRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#313235',
    marginLeft: 5
  },
});
