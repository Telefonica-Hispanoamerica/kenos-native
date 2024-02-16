import { StyleSheet } from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
const { skin } = useTheme();

export const TAB_MAX_WIDTH = 284;
export const TAB_HEIGHT = 56;

export const outerStyles = {
    height: TAB_HEIGHT,
};

export const innerStyles = {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 80,
    overflow: 'hidden',
};

export const tabStyles = StyleSheet.create({
    outerBorder: {
        borderBottomWidth: 1,
        borderBottomColor: skin.colors.divider,
    },
    tabsContainer: {
        height: TAB_HEIGHT,
        flexDirection: 'row',
    },
    baseTab: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        height: TAB_HEIGHT,
        backgroundColor: 'transparent',
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
    },
    tabWithIcon: {
        flexBasis: 112,
    },
    icon: {
        marginRight: 8,
        height: 24,
        width: 24,
    },
    animatedLine: {
        display: 'none',
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 2,
        background: skin.colors.controlActivated,
    },
});

export const tabVariantStyles = StyleSheet.create({
    default: {
        ...tabStyles.baseTab,
        maxWidth: TAB_MAX_WIDTH,
    },
    tabs2: {
        ...tabStyles.baseTab,
        maxWidth: TAB_MAX_WIDTH * 0.5,
    },
    tabs3: {
        ...tabStyles.baseTab,
        maxWidth: TAB_MAX_WIDTH * (1 / 3),
    },
});

export const tabSelectionVariantStyles = StyleSheet.create({
    noSelected: {
        color: skin.colors.textSecondary,
    },
    selected: {
        color: skin.colors.textPrimary,
        borderBottomWidth: 2,
        borderBottomColor: skin.colors.controlActivated,
    },
    selectedAnimating: {
        color: skin.colors.textPrimary,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
});