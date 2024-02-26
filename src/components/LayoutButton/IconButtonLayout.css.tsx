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
      marginTop: 15,
    },
    textButton: {
      color: 'black',
      fontSize: 12,
      marginTop: -20,
      paddingLeft: 10
    },
    containerScroll: {
      flexGrow: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      columnGap: 46,
    }
  })