import { StyleSheet } from "react-native";

export const getStylesLink = (skin:any) => StyleSheet.create({
    link: {
      alignItems: 'center',
    },
    linkText: {
      color: skin.textLink,
      textDecorationLine: 'none',
    },
});