import {KnownSkinName, Skin, getSkinByName} from '../skins';
import {TextPresetsConfig} from '../skins/types';
import {Locale, RegionCode} from './local';

//#region Texts

export const getTexts = (): ThemeTexts => {
  return TEXTS_ES;
};

// export const getTexts2 = (locale: string): typeof TEXTS_ES => {
//   // const lang = locale.toLocaleLowerCase().split('/[-_]/')[0];
//   const lang = locale ? locale.split(/[-_]/)[0].toLowerCase() : 'es';
//   switch (lang) {
//     case 'es':
//       return TEXTS_ES;
//     case 'pt':
//       return TEXTS_PT;
//     case 'de':
//       return TEXTS_DE;
//     case 'en':
//       return TEXTS_EN;
//     default:
//       return TEXTS_ES;
//   }
// };

const TEXTS_ES = {
  expirationDatePlaceholder: 'MM/AA',
  togglePasswordVisibilityLabel: 'Mostrar u ocultar contraseña',
  loading: 'Cargando',
  linkOpensInNewTab: 'Se abre en ventana nueva',
  modalClose: 'Cerrar',
  dialogCancelButton: 'Cancelar',
  dialogAcceptButton: 'Aceptar',
  formFieldOptionalLabelSuffix: 'opcional',
  formFieldErrorIsMandatory: 'Este campo es obligatorio',
  formCreditCardNumberLabel: 'Número de tarjeta',
  formCreditCardExpirationLabel: 'Caducidad',
  formCreditCardCvvLabel: 'CVV',
  formCreditCardCvvError: 'CVV incorrecto',
  formCreditCardCvvTooltipVisaMcButton: 'Mostrar ayuda CVV',
  formCreditCardCvvTooltipVisaMc:
    'El CVV son los 3 últimos dígitos del reverso de tu tarjeta',
  formCreditCardCvvTooltipAmex:
    'Si es American Express, añade los 4 dígitos del anverso',
  formCreditCardExpirationError: 'Fecha no válida',
  formCreditCardNumberError: 'No es un número de tarjeta válido',
  formDateOutOfRangeError: 'Fecha no permitida',
  formEmailError: 'Email incorrecto',
  formIbanError: 'IBAN incorrecto',
  closeButtonLabel: 'Cerrar',
  formSearchClear: 'Borrar búsqueda',
  menuLabelSuffix: 'menú',
  openNavigationMenu: 'Abrir menú de navegación',
  closeNavigationMenu: 'Cerrar menú de navegación',
  backNavigationBar: 'Atrás',
  clearButton: 'Borrar',
  carouselNextButton: 'siguiente',
  carouselPrevButton: 'anterior',
  passwordLevelExcellent: 'Excelente, Tu contraseña es segura',
  passwordLevelGood: 'Buena, Para hacerla más segura agrega un símbolo',
  passwordLevelMedium: 'Media, Debe contener al menos un número',
  passwordLevelLow: 'Débil, Debe contener al menos 6 caracteres y un número',
};

const TEXTS_EN: ThemeTexts = {
  expirationDatePlaceholder: 'MM/YY',
  togglePasswordVisibilityLabel: 'Toggle password visibility',
  loading: 'Loading',
  linkOpensInNewTab: 'Opens in a new window',
  modalClose: 'Close',
  dialogCancelButton: 'Cancel',
  dialogAcceptButton: 'Accept',
  formFieldOptionalLabelSuffix: 'optional',
  formFieldErrorIsMandatory: 'This field is required',
  formCreditCardNumberLabel: 'Card number',
  formCreditCardExpirationLabel: 'Expiry',
  formCreditCardCvvLabel: 'CVV',
  formCreditCardCvvError: 'Incorrect CVV',
  formCreditCardCvvTooltipVisaMcButton: 'Show CVV help',
  formCreditCardCvvTooltipVisaMc:
    'The CVV is the 3 digits of the back of your card',
  formCreditCardCvvTooltipAmex:
    "If it's American Express, add the 4-digit number on the front of the card",
  formCreditCardExpirationError: 'Invalid date',
  formCreditCardNumberError: 'The card number is not valid',
  formDateOutOfRangeError: 'Invalid date',
  formEmailError: 'Invalid email',
  formIbanError: 'Incorrect IBAN',
  closeButtonLabel: 'Close',
  formSearchClear: 'Clear search',
  menuLabelSuffix: 'menu',
  openNavigationMenu: 'Open navigation menu',
  closeNavigationMenu: 'Close navigation menu',
  backNavigationBar: 'Back',
  clearButton: 'Clear',
  carouselNextButton: 'next',
  carouselPrevButton: 'previous',
  passwordLevelExcellent: 'Excellent, Your password is secure',
  passwordLevelGood: 'Good, To make it more secure add a symbol',
  passwordLevelMedium: 'Medium, It must contain at least one number',
  passwordLevelLow: 'Weak, It must contain at least 6 characters and a number',
};

const TEXTS_DE: ThemeTexts = {
  expirationDatePlaceholder: 'MM/JJ',
  togglePasswordVisibilityLabel: 'Passwort un-/sichtbar machen',
  loading: 'Wird gespeichert',
  linkOpensInNewTab: 'Wird in neuem Fenster geöffnet',
  modalClose: 'Schließen',
  dialogCancelButton: 'Abbrechen',
  dialogAcceptButton: 'Akzeptieren',
  formFieldOptionalLabelSuffix: 'optional',
  formFieldErrorIsMandatory: 'Das ist ein Pflichtfeld',
  formCreditCardNumberLabel: 'Kartennummer',
  formCreditCardExpirationLabel: 'Ablaufdatum',
  formCreditCardCvvLabel: 'CVV',
  formCreditCardCvvError: 'Falsche CVV',
  formCreditCardCvvTooltipVisaMcButton: 'CVV-Hilfe anzeigen',
  formCreditCardCvvTooltipVisaMc:
    'Der CVV-Code besteht aus den 3 Ziffern auf der Kartenrückseite',
  formCreditCardCvvTooltipAmex:
    'Bei American Express 4-stelligen Code auf der Rückseite hinzufügen',
  formCreditCardExpirationError: 'Datum ungültig',
  formCreditCardNumberError: 'Kartennummer ungültig',
  formDateOutOfRangeError: 'Unzulässiges Datum',
  formEmailError: 'Falsche E-Mail-Adresse',
  formIbanError: 'Falsche IBAN',
  closeButtonLabel: 'Schließen',
  formSearchClear: 'Suche löschen',
  menuLabelSuffix: 'Menü',
  openNavigationMenu: 'Navigationsmenü öffnen',
  closeNavigationMenu: 'Navigationsmenü schließen',
  backNavigationBar: 'Zurück',
  clearButton: 'Löschen',
  carouselNextButton: 'nächste',
  carouselPrevButton: 'vorherige',
  passwordLevelExcellent: 'Ausgezeichnet, Ihr Passwort ist sicher',
  passwordLevelGood:
    'Gut, Um es sicherer zu machen, fügen Sie ein Symbol hinzu',
  passwordLevelMedium: 'Mittel, Es muss mindestens eine Zahl enthalten',
  passwordLevelLow:
    'Schwach, Es muss mindestens 6 Zeichen und eine Zahl enthalten',
};

const TEXTS_PT: ThemeTexts = {
  expirationDatePlaceholder: 'MM/AA',
  togglePasswordVisibilityLabel: 'Mostrar ou ocultar senha',
  loading: 'Carregando',
  linkOpensInNewTab: 'Abre em nova janela',
  modalClose: 'Fechar',
  dialogCancelButton: 'Cancelar',
  dialogAcceptButton: 'Aceitar',
  formFieldOptionalLabelSuffix: 'opcional',
  formFieldErrorIsMandatory: 'Este campo é obrigatório',
  formCreditCardNumberLabel: 'Número de cartão',
  formCreditCardExpirationLabel: 'Expiração',
  formCreditCardCvvLabel: 'CVV',
  formCreditCardCvvError: 'CVV incorreto',
  formCreditCardCvvTooltipVisaMcButton: 'Exibir ajuda CVV',
  formCreditCardCvvTooltipVisaMc:
    'O CVV são os 3  dígitos do reverso de seu cartão',
  formCreditCardCvvTooltipAmex:
    'Se for American Express, adicione os 4 dígitos do anverso',
  formCreditCardExpirationError: 'Data inválida',
  formCreditCardNumberError: 'Não é um número de cartão válido',
  formDateOutOfRangeError: 'Data não permitida',
  formEmailError: 'Email incorreto',
  formIbanError: 'IBAN incorreto',
  closeButtonLabel: 'Fechar',
  formSearchClear: 'Apagar pesquisa',
  menuLabelSuffix: 'menu',
  openNavigationMenu: 'Abrir menu de navegação',
  closeNavigationMenu: 'Fechar menu de navegação',
  backNavigationBar: 'Voltar',
  clearButton: 'Apagar',
  carouselNextButton: 'próximo',
  carouselPrevButton: 'anterior',
  passwordLevelExcellent: 'Excelente, Sua senha é segura',
  passwordLevelGood: 'Bom, Para torná-la mais segura, adicione um símbolo',
  passwordLevelMedium: 'Médio, Deve conter pelo menos um número',
  passwordLevelLow: 'Fraca, Deve conter pelo menos 6 caracteres e um número',
};

//#endregion

export type ThemeContextType = {
  skinName: KnownSkinName;
  skin: Skin;
  textPresets: TextPresetsConfig;
  texts: ThemeTexts;
  i18n: {
    locale: Locale;
    phoneNumberFormattingRegionCode: RegionCode;
  };
  isDarkMode: boolean;
};

export const DefaultThemeContext: ThemeContextType = {
  skinName: 'Movistar',
  skin: getSkinByName('Movistar'),
  textPresets: {
    text5: {weight: 'regular'},
    text6: {weight: 'regular'},
    text7: {weight: 'regular'},
    text8: {weight: 'regular'},
    text9: {weight: 'regular'},
    text10: {weight: 'regular'},
    cardTitle: {weight: 'bold'},
  },
  i18n: {
    locale: 'es-ES',
    phoneNumberFormattingRegionCode: 'ES',
  },
  texts: getTexts(),
  isDarkMode: false,
};

export type ThemeTexts = Readonly<typeof TEXTS_ES>;
