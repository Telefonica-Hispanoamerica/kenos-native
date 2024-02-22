import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
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
  buttonsOptions:Array<{
     text:string,
     icon?:React.ComponentType<IconProps>
  }>;
};

export type LayoutIcon = IconButtonProps

export const IconButtonLayout = (props: LayoutIcon) => {

  const { skin } = useTheme();
  const { neutralHigh, background, backgroundBrand, neutralLow, brand, brandLow, inverse, buttonPrimaryBackgroundInverse, textButtonPrimaryInverse } = skin.colors;

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

  const { backgroundIcon } = themeIcon()
  const items=Array(15).fill(null);
  
  console.log(props.buttonsOptions)

  return (
    <View style={[styles.container, { backgroundColor: backgroundIcon }]}>
  
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEnabled={true} contentContainerStyle={{flexGrow:1,backgroundColor:'transparent', justifyContent:'space-between', alignItems:'center',columnGap:46}}>
        {
           props.buttonsOptions.map(({text,icon}, index)=>(
              <Pressable key={index} style={{ alignItems: 'center'}}>
                   <IconButton {...props} icon={icon} />
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
    alignSelf:'center', alignContent:'center', alignItems:'center',
    /* justifyContent: 'space-around',
    alignItems: 'center', */
    width: '100%',
    height: 80,
    marginTop: 15,
  },
  containerIcon: {
    alignItems: 'center', marginTop: 4,
  },
  textButton: {
    color: 'black', fontSize: 12, marginTop: -24, paddingLeft: 10
  }
})