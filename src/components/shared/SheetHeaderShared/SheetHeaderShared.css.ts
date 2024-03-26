
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        // paddingBottom: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        alignSelf: 'stretch',
        width: '100%',
        justifyContent: 'space-between'
    },
    leftIcon: {
        padding: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 99,
        height: 44,
        width: 44,
        marginRight: 8
    },
    titleContain:{
        display: 'flex',
        flexDirection: 'row',
    },
    accionIcon: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
});