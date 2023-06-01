import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../../hooks/ThemeContextProvider';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
};

export const MyButton = ({text, onPress, color, textColor}: ButtonProps) => {
  const {skin} = useTheme();
  const {buttonPrimaryBackground} = skin.colors;

  const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      maxWidth: 104,
      height: 50,
      border: 1.5,
      borderColor: 'transparent',
      minWidth: 104,
      overflow: 'hidden',
      paddingTop: 10.5,
      paddingBottom: 10.5,
      paddingLeft: 14.5,
      paddingRight: 14.5,
      borderRadius: 4,
      alignSelf: 'flex-start',
      flexGrow: 0,
      backgroundColor: buttonPrimaryBackground,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '700',
      textAlign: 'center',
      fontFamily: 'Roboto',
    },
    buttonContainer: {
      alignItems: 'flex-start',
      flex: 1,
    },
  });

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{color: 'white'}}
        style={[
          styles.button,
          !!color && {backgroundColor: buttonPrimaryBackground},
        ]}
        onPress={onPress}>
        <Text
          numberOfLines={1}
          style={[styles.buttonText, !!textColor && {color: textColor}]}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};
