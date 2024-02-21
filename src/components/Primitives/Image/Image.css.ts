import { StyleSheet } from "react-native";

export const FADE_IN_DURATION_MS = 300;

export const stylesImageError = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    svg: {
        width: '10%',
        minWidth: 24,
        maxWidth: 48,
    },
});
