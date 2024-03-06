import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        top: 200,
        borderRadius: 16,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    withShadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 8,
        elevation:4
    }
})