import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  Text,
} from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { IconProps } from '../../utils';
import { IconLightningRegular } from '../../kenos-icons';


type IconButtonProps = {
  children?: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
};


export const IconButton = ({ children, icon }: IconButtonProps) => {

  const { skin } = useTheme();
  const { neutralHigh, brand, brandLow, inverse, buttonPrimaryBackgroundInverse, textButtonPrimaryInverse } = skin.colors;

  const typeButton: Array<string> = ["inverse", "light", "medium", "highlight", "lightBlank"];

  const Icon = icon as React.ComponentType<IconProps>;
  let iconComponent: JSX.Element = <Icon />

  const themeTypeButton = (typeButton: string) => {
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
  }

  return (
    <View>
      <View style={styles.container}>
        
        {typeButton.map((aButtonType, index) => {

          const { background, typeIcon } = themeTypeButton(aButtonType);

          return (
            <React.Fragment key={`button-${aButtonType}-${index}`}>
              <Pressable style={[styles.circle, { backgroundColor: background }]}>
                {typeIcon}
              </Pressable>
              <Text style={styles.textButton}>Menu</Text>
            </React.Fragment>
          );
        })}
      </View>
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
