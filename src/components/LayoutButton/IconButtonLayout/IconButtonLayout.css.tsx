import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 80,
      marginTop: 16,
      paddingLeft:8, 
      paddingBottom:3
    },
    textButton: {
      marginTop: -20,
    },
    containerScroll: {
      flexGrow: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop:5,
      columnGap: 46,
    }
  })