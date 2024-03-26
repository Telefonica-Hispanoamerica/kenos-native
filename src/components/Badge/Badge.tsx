import React from 'react';
import {View} from 'react-native';
import {useTheme} from '../../utils/ThemeContextProvider';
import { getStylesBadge } from './Badge.css';
import {Text1} from '../Text/Text';

type Props = {
  children?: React.ReactNode;
  value?: number;
  right?: number;
  top?: number;
  type?: string
};

const Badge: React.FC<Props> = ({children, value, right, top, type = 'bagde'}: Props) => {
  const {skin} = useTheme();
  const {colors} = skin;
  const isBigNumber = value && value > 9;
  
  const colorBadge = type === 'warning' ? colors.warning : type === 'success' ? colors.success : type === 'controlActivated' ? colors.controlActivated : colors.badge
  const styles = getStylesBadge(colorBadge,colors,isBigNumber,value)

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
