import {StyleSheet} from 'react-native';

export const getStylesRadio = (skin:any) => StyleSheet.create({
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    radioButton: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    disabledRadioButton: {
      opacity: 0.5, // Reduce la opacidad cuando está deshabilitado
    },
    innerCircle: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: skin.controlActivated,
    },
    label: {
      marginLeft: 10,
      fontSize: 16,
      color: skin.control
    },
  });