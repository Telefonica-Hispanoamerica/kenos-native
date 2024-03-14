import { StyleSheet } from "react-native";
import {useTheme} from '../../utils/ThemeContextProvider';

export const styles = StyleSheet.create({
    container:{
      /* margin:16, */
      /* paddingTop:16,
        paddingLeft:16,
        paddingRight:16,    */
        /* width:416,
        height:197, */
       /*  margin:16, */
        /* padding:20, */
        /* gap:14, */
        /* flexDirection:"row" */
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:20,
    },
    card:{
        width: 130,
        height: 'auto',
        borderRadius: 8,
        border: 1,
    },
    cardDefault:{
        gap: 8,
        alignItems: 'center',
        paddingTop: 16,
        paddingRight:4,
        paddingLeft:4,
        marginRight:5
    },
    cardSeeMore:{
        gap: 14,
        alignItems: 'center',
        paddingTop: 56,
        paddingRight:4,
        paddingLeft:4,
        paddingBottom:54,
        /* marginRight:5 */
    }




})