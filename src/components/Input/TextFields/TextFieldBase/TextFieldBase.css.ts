import {StyleSheet} from 'react-native';

export const styles = (textPrimary: string, textSecondary: string) => {
  const commonInputStyles = {
    backgroundColor: 'transparent',
    borderWidth: 0,
    minWidth: 0,
    color: textPrimary,
    width: '100%',
    paddingLeft: 12,
    paddingRight: 16,
    fontSize: 16,
    lineHeight: 24,
  };
  return StyleSheet.create({
    fullSize: {
      flex: 1,
    },
    textArea: {
      padding: 0,
      ...commonInputStyles,
    },
    textAreaWithLabel: {
      marginTop: 24,
    },
    textAreaWithoutLabel: {
      marginTop: 16,
    },
    input: {
      ...commonInputStyles,
    },
    inputWithLabel: {
      paddingTop: 24,
      paddingBottom: 8,
    },
    inputWithoutLabel: {
      paddingTop: 16,
      paddingBottom: 16,
    },
    endIconContainer: {
      //paddingRight: 16,
      paddingRight: 4,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
    },
    endIconElement: {
      width: 24,
      height: 24,
    },
    endIconWithoutError: {
      paddingRight: 16,
    },
    endIconWithError: {
      paddingRight: 0,
    },
    startIconElement: {
      paddingHorizontal: 12,
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
    },
    prefixElement: {
      paddingLeft: 12,
      paddingRight: 16,
    },
    prefixWithLabel: {
      paddingTop: 24,
      paddingBottom: 8,
    },
    prefixWithoutLabel: {
      paddingVertical: 16,
    },
  });
};