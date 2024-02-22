import React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  ScrollView,
} from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { IconProps } from '../../utils';
import { IconButton } from '../Icon Button/IconButton';

export interface IconButtonProps {
  icon?: React.ComponentType<IconProps>;
  inverse?: boolean;
  medium?: boolean;
  highlight?: boolean;
  light?: boolean;
  onPress?: Function | null | undefined | any;
  buttonsOptions: Array<{
    text: string,
    icon?: React.ComponentType<IconProps>
  }>;
};

export type LayoutIcon = IconButtonProps

export const IconButtonLayout = (props: LayoutIcon) => {

  const { skin } = useTheme();
  const { background, backgroundBrand } = skin.colors;

  const themeIcon = () => {
    if (props.inverse || props.medium || props.highlight) {
      return {
        backgroundIcon: background,
      };
    }
    else {
      return {
        backgroundIcon: backgroundBrand,
      }
    }
  };

  const {backgroundIcon} = themeIcon()
  
  return (
    <View style={[styles.container, { backgroundColor: backgroundIcon }]}>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEnabled={true} contentContainerStyle={styles.containerScroll}>
        {
          props.buttonsOptions.map(({ text, icon }, index) => (
            <Pressable key={index} style={{ alignItems: 'center'}} onPress={props.onPress}>
              {
                 props.light ? (<IconButton medium icon={icon} />):( <IconButton {...props} icon={icon}/>)
              }
              <Text style={styles.textButton}>{text}</Text>
            </Pressable>
          ))
        }
      </ScrollView>
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center', 
    alignContent: 'center', 
    alignItems: 'center',
    width: '100%',
    height: 80,
    marginTop: 15,
  },
  textButton: {
    color: 'black', 
    fontSize: 12,
    marginTop: -20,
    paddingLeft: 10
  },
  containerScroll:{
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 46,
  }
})