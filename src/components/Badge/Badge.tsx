import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '../../utils/ThemeContextProvider';
import {Text1} from '../Text/Text';

type Props = {
  children?: React.ReactNode;
  value?: number;
  right?: number;
  top?: number;
};

const Badge: React.FC<Props> = ({children, value, right, top}: Props) => {
  const {skin} = useTheme();
  const {colors} = skin;
  const isBigNumber = value && value > 9;
  const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    badge: {
      width: 8,
      height: 8,
      top: -2,
      right: -6,
      backgroundColor: colors.badge,
      borderRadius: 50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 1.5,
      elevation: 2,
    },
    badgeNumber: {
      width: 18,
      height: 18,
      top: -8,
      right: -9,
      backgroundColor: colors.badge,
      borderRadius: 50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 1.5,
      elevation: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.textPrimaryInverse,
      fontSize: 12,
      fontWeight: '500',
    },
    badgeWithChildren: {
      width: isBigNumber ? 24 : !value ? 8 : 18,
      height: !value ? 8 : 18,
      backgroundColor: colors.badge,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.textPrimaryInverse,
      zIndex: 1,
      elevation: 1,
    },
    badgeBigNumber: {
      width: 24,
      borderRadius: 50,
      backgroundColor: skin.colors.badge,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 1.5,
      elevation: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: -8,
      right: -14,
      height: 18,
      fontSize: 12,
      fontWeight: '500',
    },
  });

  if (children && value === 0) {
    return <>{children}</>;
  }

  if (!!value) {
    <View style={styles.badge} />;
  }

  const style = children
    ? styles.badgeWithChildren
    : isBigNumber
    ? styles.badgeBigNumber
    : value
    ? styles.badgeNumber
    : styles.badge;
  const styleWithRightTop = {...style, right, top};

  return (
    <View style={styles.container}>
      {value ? (
        <View
          role="presentation"
          accessibilityElementsHidden={true} // Hides the number from accessibility
          style={styleWithRightTop}>
          <Text1 color={colors.textPrimaryInverse}>
            {isBigNumber ? '+9' : value}
          </Text1>
        </View>
      ) : (
        <View style={styleWithRightTop} />
      )}
      {children}
    </View>
  );
};

export default Badge;
