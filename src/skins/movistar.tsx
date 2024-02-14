import {applyAlpha} from '../utils/color';
import { MOVISTAR_SKIN } from "./constants";
import type { GetKnownSkin,  KnownSkin } from "./types" 

export const palette = {
    egg: '#f28d15',
    egg10: '#fef4e8',
    egg80: '#6d3f09',
    grey1: '#f6f6f6',
    grey2: '#eeeeee',
    grey3: '#dddddd',
    grey4: '#949494',
    grey5: '#737578',
    grey6: '#31323599',
    movistarBlue: '#019bef',
    movistarBlue10: '#e6f5fd',
    movistarBlue20: '#b3e1fb',
    movistarBlue30: '#80cef9',
    movistarBlue55: '#008edd',
    movistarGreen: '#5cb615',
    movistarGreen10: '#eff8e8',
    movistarGreen70: '#407f0f',
    movistarProminentBlue: '#0b2739',
    pepper: '#ff374a',
    pepper10: '#ffebed',
    pepper55: '#d73241',
    pepper70: '#b22634',
    pink: '#e63780',
    purple: '#a13ea1',
    purple10: '#f6ecf6',
    purple70: '#712b71',
    white: '#ffffff',
};

export const getMovistarSkin: GetKnownSkin = () => {
    const skin: KnownSkin = {
        name: MOVISTAR_SKIN,
        colors: {
            appBarBackground: palette.grey1,
            background: palette.white,
            backgroundContainer: palette.white,
            backgroundBrand: palette.movistarBlue,
            backgroundBrandSecondary: palette.movistarProminentBlue,
            backgroundOverlay: palette.grey6,
            backgroundSkeleton: palette.grey1,
            backgroundSkeletonInverse: palette.movistarBlue55,
            backgroundAlternative: palette.grey1,
            backgroundFeedbackBottom: palette.movistarBlue,
            navigationBarBackground: palette.movistarBlue,
            skeletonWave: palette.grey3,
            border: palette.grey3,
            borderSelected: palette.movistarBlue,
            borderLight: palette.grey1,
            borderDark: palette.grey5,
            buttonDangerBackground: palette.pepper,
            buttonDangerBackgroundSelected: palette.pepper55,
            buttonDangerBackgroundHover: palette.pepper55,
            buttonLinkBackgroundSelected: palette.movistarBlue10,
            buttonLinkBackgroundSelectedInverse: palette.white,
            buttonPrimaryBackground: palette.movistarBlue,
            buttonPrimaryBackgroundInverse: palette.white,
            buttonPrimaryBackgroundSelected: palette.movistarBlue55,
            buttonPrimaryBackgroundSelectedInverse: palette.movistarBlue30,
            buttonPrimaryBackgroundHover: palette.movistarBlue55,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBorderSelectedInverse: palette.movistarBlue30,
            buttonSecondaryBackground: palette.movistarBlue,
            buttonSecondaryBackgroundSelected: palette.movistarBlue55,
            control: palette.grey4,
            controlActivated: palette.movistarBlue,
            controlError: palette.pepper,
            loadingBar: palette.movistarBlue30,
            loadingBarBackground: palette.movistarBlue55,
            ProgressBarBackground: palette.grey3,
            toggleAndroidInactive: palette.grey2,
            toggleAndroidBackgroundActive: palette.movistarBlue20,
            iosControlKnob: palette.white,
            divider: palette.grey2,
            dividerInverse: palette.movistarBlue55,
            navigationBarDivider: palette.movistarBlue,
            badge: palette.pepper55,
            feedbackErrorBackground: palette.pepper,
            feedbackInfoBackground: palette.grey6,
            brand: palette.movistarBlue,
            brandHigh: palette.movistarBlue55,
            inverse: palette.white,
            neutralHigh: palette.grey6,
            neutralLow: palette.grey1,
            neutralMedium: palette.grey5,
            promo: palette.purple,
            error: palette.pepper,
            highlight: palette.pink,
            success: palette.movistarGreen,
            warning: palette.egg,
            textPrimary: palette.grey6,
            textPrimaryInverse: palette.white,
            textSecondary: palette.grey5,
            textSecondaryInverse: palette.white,
            textButtonPrimary: palette.white,
            textButtonPrimaryInverse: palette.movistarBlue,
            textButtonPrimaryInverseSelected: palette.movistarBlue,
            textButtonSecondary: palette.movistarBlue,
            textButtonSecondarySelected: palette.movistarBlue55,
            textButtonSecondaryInverse: palette.white,
            textButtonSecondaryInverseSelected: palette.white,
            textLink: palette.movistarBlue,
            textLinkInverse: palette.white,
            textLinkDanger: palette.pepper,
            textLinkSnackbar: palette.movistarBlue30,
            textNavigationBarPrimary: palette.white,
            textNavigationBarSecondary: palette.movistarBlue20,
            textNavigationSearchBarHint: palette.movistarBlue20,
            textNavigationSearchBarText: palette.white,
            textAppBar: palette.grey5,
            textAppBarSelected: palette.movistarBlue,
            successLow: palette.movistarGreen10,
            warningLow: palette.egg10,
            errorLow: palette.pepper10,
            promoLow: palette.purple10,
            brandLow: palette.movistarBlue10,
            successHigh: palette.movistarGreen70,
            warningHigh: palette.egg80,
            errorHigh: palette.pepper70,
            promoHigh: palette.purple70,

            // Missing properties

            borderLow: "",
            borderHigh: "",
            buttonSecondaryBorder: "",
            buttonSecondaryBorderSelected: "",
            buttonSecondaryBackgroundHover: "",
            buttonSecondaryBackgroundInverseHover: "",
            buttonSecondaryBackgroundSelectedInverse: "",
            neutralMediumInverse: "",
            successHighInverse: "",
            warningHighInverse: "",
            errorHighInverse: "",
            promoHighInverse: "",
        },
        borderRadii: {
            avatar: '50%',
            bar: '999px',
            button: '4px',
            checkbox: '2px',
            container: '8px',
            indicator: '999px',
            input: '8px',
            legacyDisplay: '16px',
            popup: '8px',
            sheet: '8px',
          },
          textPresets: {
            cardTitle: {weight: 'regular'},
            text5: {weight: 'light'},
            text6: {weight: 'light'},
            text7: {weight: 'light'},
            text8: {weight: 'light'},
            text9: {weight: 'light'},
            text10: {weight: 'light'},
          },
    }
    return skin;
};
