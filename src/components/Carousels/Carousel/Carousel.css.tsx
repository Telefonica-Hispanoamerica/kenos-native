import { StyleSheet } from "react-native";

export const getStylesCarousel = (skin:any) => StyleSheet.create({
    container: {
      flex: 1,
    },
    slide: {
      flex: 1,
      marginTop: 10,
      marginBottom: 10,
      height: 320,
    },
    pagination: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 335,
      alignSelf: 'center',
    },
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: skin.colors.control,
      margin: 5,
    },
    paginationDotActive: {
      backgroundColor: skin.colors.controlActivated,
    },
    paginationDotInactive: {
      opacity: 0.5, 
    },
  });
  