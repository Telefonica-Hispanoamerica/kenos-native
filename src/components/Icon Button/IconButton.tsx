import React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { IconProps } from '../../utils';


export interface IconButtonProps {
  children?: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
  inverse?: boolean;
  light?: boolean;
  medium?: boolean;
  highlight?: boolean;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export type IconTypeProps = IconButtonProps

export const IconButton: React.FC<IconButtonProps> = (props: IconTypeProps) => {

  const { skin } = useTheme();
  const { neutralHigh, neutralLow, brand, brandLow, inverse, buttonPrimaryBackgroundInverse, textButtonPrimaryInverse } = skin.colors;

  const typeButton: Array<string> = ["inverse", "light", "medium", "highlight", "lightBlank"];

  const Icon = props.icon as React.ComponentType<IconProps>;
  let iconComponent: JSX.Element = <Icon />

  /*  const themeTypeButton = (typeButton: string) => {
     switch (typeButton) {
       case "inverse":
         return {
           background: buttonPrimaryBackgroundInverse,
           typeIcon: iconComponent = React.cloneElement(iconComponent, { color: textButtonPrimaryInverse, size: 24 }),
         };
       case "light":
         return {
           background: buttonPrimaryBackgroundInverse,
           typeIcon: iconComponent = React.cloneElement(iconComponent, { color: neutralHigh, size: 24 }),
         };
       case "medium":
         return {
           background: brandLow,
           typeIcon: iconComponent = React.cloneElement(iconComponent, { color: brand, size: 24 }),
         };
       case "highlight":
         return {
           background: brand,
           typeIcon: iconComponent = React.cloneElement(iconComponent, { color: inverse, size: 24 }),
         };
       case "lightBlank":
       default:
         return {
           background: 'transparent',
           typeIcon: iconComponent = React.cloneElement(iconComponent, { color: neutralHigh, size: 24 }),
         };
     }
   } */

  const themeTypeButton = () => {
    if (props.inverse) {
      return {
        background: inverse,
        typeIcon: iconComponent = React.cloneElement(iconComponent, { color: brand, size: 24 }),
      };
    }
    else if (props.light) {
      return {
        background: neutralLow,
        typeIcon: iconComponent = React.cloneElement(iconComponent, { color: neutralHigh, size: 24 }),
      }
    }
    else if (props.medium) {
      return {
        background: brandLow,
        typeIcon: iconComponent = React.cloneElement(iconComponent, { color: brand, size: 24 }),
      };
    }
    else if (props.highlight) {
      return {
        background: brand,
        typeIcon: iconComponent = React.cloneElement(iconComponent, { color: inverse, size: 24 })
      };
    }
    else {
      return {
        background: 'transparent',
        typeIcon: iconComponent = React.cloneElement(iconComponent, { color: neutralHigh, size: 24 }),
      };
    }

  };

  const { background, typeIcon } = themeTypeButton();
  console.log(props.children)
  return (

    <View style={styles.container}>
      <Pressable onPress={props.onPress} style={[styles.circle, { backgroundColor: background }, props.styles]}>
        {typeIcon}
      </Pressable>
      <Text style={styles.textButton}>{props.children}</Text>

    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
    marginTop: 10,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
  },
  textButton: {
    color: '#313235',
    marginBottom: 20,
  }
});
