// Este objeto debe corresponderse con el mismo que se encuentra en src\skins\skin-contract.css.ts
// En caso de cambiar el archivo mencionado, debe modificarse este objecto colors

const colors = {
  appBarBackground: '',
  background: '',
  backgroundContainer: '',
  backgroundBrand: '',
  backgroundBrandSecondary: '',
  backgroundOverlay: '',
  backgroundSkeleton: '',
  backgroundSkeletonInverse: '',
  backgroundAlternative: '',
  backgroundFeedbackBottom: '',
  navigationBarBackground: '',

  skeletonWave: '',

  // BORDERS
  border: '',
  borderLow: '',
  borderHigh: '',
  borderSelected: '',
  borderLight: '', // ?
  borderDark: '', // ?

  // BUTTONS
  buttonDangerBackground: '',
  buttonDangerBackgroundSelected: '',
  buttonDangerBackgroundHover: '',
  buttonLinkBackgroundSelected: '',
  buttonLinkBackgroundSelectedInverse: '', // IS -> SI
  buttonPrimaryBackground: '',
  buttonPrimaryBackgroundInverse: '',
  buttonPrimaryBackgroundSelected: '',
  buttonPrimaryBackgroundSelectedInverse: '', // IS -> SI
  buttonPrimaryBackgroundHover: '',
  buttonSecondaryBorder: '',
  buttonSecondaryBorderSelected: '',
  buttonSecondaryBorderInverse: '',
  buttonSecondaryBorderSelectedInverse: '',
  buttonSecondaryBackground: '', // +
  buttonSecondaryBackgroundHover: '',
  buttonSecondaryBackgroundSelected: '',
  buttonSecondaryBackgroundInverseHover: '',
  buttonSecondaryBackgroundSelectedInverse: '',

  // CONTROLS
  control: '',
  controlActivated: '',
  controlError: '',
  loadingBar: '',
  loadingBarBackground: '',
  ProgressBarBackground: '', // +

  toggleAndroidInactive: '',
  toggleAndroidBackgroundActive: '',
  iosControlKnob: '',

  // DIVIDERS
  divider: '',
  dividerInverse: '',
  navigationBarDivider: '',

  // FEEDBACKS
  badge: '',
  feedbackErrorBackground: '',
  feedbackInfoBackground: '',

  // GLOBAL
  brand: '',
  brandHigh: '',
  inverse: '',
  neutralHigh: '',
  neutralLow: '',
  neutralMedium: '',
  neutralMediumInverse: '',
  promo: '',

  // STATES
  error: '',
  highlight: '',
  success: '',
  warning: '',

  // TEXT GLOBAL
  textPrimary: '',
  textPrimaryInverse: '',
  textSecondary: '',
  textSecondaryInverse: '',

  // TEXT BUTTONS
  textButtonPrimary: '',
  textButtonPrimaryInverse: '',
  textButtonPrimaryInverseSelected: '',
  textButtonSecondary: '',
  textButtonSecondarySelected: '',
  textButtonSecondaryInverse: '',
  textButtonSecondaryInverseSelected: '',

  // TEXT LINKS
  textLink: '',
  textLinkInverse: '',
  textLinkDanger: '',
  textLinkSnackbar: '',

  // TEXT NAVIGATION BARS
  textNavigationBarPrimary: '',
  textNavigationBarSecondary: '',
  textNavigationSearchBarHint: '',
  textNavigationSearchBarText: '',
  textAppBar: '',
  textAppBarSelected: '',

  // TAGS
  successLow: '',
  warningLow: '',
  errorLow: '',
  promoLow: '',
  brandLow: '',
  successHigh: '',
  warningHigh: '',
  errorHigh: '',
  promoHigh: '',
  successHighInverse: '',
  warningHighInverse: '',
  errorHighInverse: '',
  promoHighInverse: '',
};

const sections = {
  BACKGROUNDS: [
    'background',
    'skeletons',
    'appBarBackground',
    'navigationBarBackground',
    '',
  ],
  BRODERS: ['border'],
  BUTTONS: ['button', 'textButton', 'textLink'],
  CONTROLS: ['control', 'loadingBar', 'toggleAndroid'],
  DIVIDERS: ['divider', 'navigationBarDivider'],
  FEEDBACKS: ['badge', 'feedback'],
  STATES: ['error', 'success', 'warning'],
  BARS_TEXTS: ['textNavigation', 'textAppBar'],
  TAGS: [
    ['successLow', 'warningLow', 'errorLow', 'promoLow', 'brandLow'],
    ['successHigh', 'warningHigh', 'errorHigh', 'promoHigh'],
    [
      'successHighInverse',
      'warningHighInverse',
      'errorHighInverse',
      'promoHighInverse',
      'neutralMediumInverse',
    ],
  ],
};

module.exports = {colors, sections};
