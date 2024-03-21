import { StyleSheet } from "react-native";

export const getStylesSelectedBox = (skin:any) => StyleSheet.create({
    container: {
      flexDirection: 'column',
      padding: 12,
      borderWidth: 1,
      borderColor: skin.border, 
      borderRadius: 5,
      alignItems: 'center', 
    },
    selected: {
      borderColor: skin.controlActivated,
    },
    customComponentContainer: {
      marginBottom: 10, 
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    badgeContainer: {
      position: 'absolute',
      top: -13,
      right: -9,
      borderRadius: 10,
      padding: 5,
    }
  });