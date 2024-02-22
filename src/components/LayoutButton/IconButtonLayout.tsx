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
  five?: boolean;
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
  const items=Array(5).fill(null);

  return (
    <View style={[styles.container, { backgroundColor: backgroundIcon }]}>
        
       {/*  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
           items.map((item, index)=>(
              <Pressable key={index} style={{ alignItems: 'center', marginTop: 4, }}>
                   <IconButton {...props} icon={props.icon} />
                  <Text style={styles.textButton}>Texto</Text>
                </Pressable>
              
           ))
        }
        </ScrollView> */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
           items.map((item, index)=>(
              
                   <Pressable key={index} style={{ alignItems: 'center', marginTop: 4, }}>
                   <IconButton {...props} icon={props.icon} />
                  <Text style={styles.textButton}>Texto</Text>
                </Pressable>
      
           ))
        }
      </ScrollView>
      
        
      
        {/* <View style={{ alignItems: 'center', marginTop: 4, }}>
        <IconButton {...props} icon={props.icon} />
                  <Text style={styles.textButton}>Texto</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 4, }}>
        <IconButton {...props} icon={props.icon} />
                  <Text style={styles.textButton}>Texto</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 4, }}>
        <IconButton {...props} icon={props.icon} />
                  <Text style={styles.textButton}>Texto</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 4, }}>
        <IconButton {...props} icon={props.icon} />
                  <Text style={styles.textButton}>Texto</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 4, }}>
        <IconButton {...props} icon={props.icon} />
                  <Text style={styles.textButton}>Texto</Text>
        </View> */}
       
    
                {/* <Pressable style={{ alignItems: 'center', marginTop: 4, }}>
                   <IconButton {...props} icon={props.icon} />
                  <Text style={styles.textButton}>Texto</Text>
                </Pressable>
                <Pressable style={{ alignItems: 'center', marginTop: 4, }}>
                   <IconButton {...props} icon={props.icon} />
                  <Text style={styles.textButton}>Texto</Text>
                </Pressable>
                <Pressable style={{ alignItems: 'center', marginTop: 4, }}>
                   <IconButton {...props} icon={props.icon} />
                  <Text style={styles.textButton}>Texto</Text>
                </Pressable> */}
     
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
           items.map((item, index)=>(
              <React.Fragment key={index}>
                   <Pressable style={{ alignItems: 'center', marginTop: 4, }}>
                   <IconButton {...props} icon={props.icon} />
                  <Text style={styles.textButton}>Texto</Text>
                </Pressable>
              </React.Fragment>
           ))
        }
      </ScrollView> */}
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    /* justifyContent: 'space-around',
    alignItems: 'center', */
    width: 360,
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