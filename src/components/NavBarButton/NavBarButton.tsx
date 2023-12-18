import React from 'react';
import {GestureResponderEvent, Pressable, View, StyleSheet} from 'react-native';
import { isIos } from '../../utils';

type NavBarButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  children: JSX.Element;
};

function NavBarButton({onPress, children}: NavBarButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        android_ripple={{color: isIos() ? 'white' : 'rgba(255,255,255,0.4)', foreground: true}}>
        {children}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      height: isIos() ? 24 : 28, 
      width: isIos() ? 24 : 28, 
      borderRadius: 50, 
      overflow: 'hidden'
    },
    button: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }
  });

export default NavBarButton;