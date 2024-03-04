import { flatten } from 'lodash';
import {StyleSheet} from 'react-native';

export const getStylesRow = (skin:any) => StyleSheet.create({
    row: {
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    dividerRow: {
      borderBottomWidth: 1,
      borderBottomColor: skin.divider,
    },
    borderedRow: {
      borderWidth: 1,
      borderColor: skin.border,
      borderRadius: 10,
    },
    disabledRow: {
      opacity: 0.5, 
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    leftContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    leftContent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    listStructure:{
      display:'flex',
      flexDirection:'row',
      gap: 10,
      marginRight:15
    },
    rightContent: {
      flex: 1,
      marginLeft: 10,
    },
    rightContainer: {
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center'
    },

  });
