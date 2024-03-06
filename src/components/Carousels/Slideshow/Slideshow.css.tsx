import { StyleSheet } from "react-native";

export const getStylesSlideshow = (width:number,skin:any) => StyleSheet.create({
    container: {
        height: 300,
      },
      carousel: {
        flex: 1,
        position: 'relative',
      },
      itemContainer: {
        width,
        height: 300,
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 22,
        left: 0,
        right: 0,
      },
      indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: skin.colors.inverse,
        marginHorizontal: 4,
        
      },
      activeIndicator: {
        backgroundColor: skin.colors.inverse,
        opacity:2
      },
      navButton: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      prevButton: {
        left: 0,
      },
      nextButton: {
        right: 0,
      },
  });
  