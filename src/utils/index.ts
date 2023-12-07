import { Platform } from 'react-native';

export const isAndroid = (): boolean => Platform.OS === 'android';

export const isIos = (): boolean => Platform.OS === 'ios';

export const isWeb = (): boolean => Platform.OS === 'web';