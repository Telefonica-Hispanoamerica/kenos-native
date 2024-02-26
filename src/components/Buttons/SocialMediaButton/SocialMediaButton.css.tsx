import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      marginLeft: 10,
    },
    largeButtonRounded: {
      width: 217,
      height: 48,
      borderRadius: 48,
      backgroundColor: '#FFFFFF',
      
      shadowColor: '#2A2A3C33',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.33,
      shadowRadius: 7,
      elevation:7,
      paddingVertical: 12,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    largeButton: {
      width: 217,
      height: 48,
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
      shadowColor: '#2A2A3C33',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.33,
      shadowRadius: 7,
      elevation:7,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    squareButton: {
      width: 48,
      height: 48,
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
      shadowColor: '#2A2A3C33',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.33,
      shadowRadius: 7,
      elevation:7,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    circleButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#FFFFFF',
      shadowColor: '#2A2A3C33',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.33,
      shadowRadius: 7,
      elevation:7,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      marginLeft: 5
    },
  });