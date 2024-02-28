import * as React from 'react';
import Box from '../../layout/Box/Box';
import {Text} from '../Text/Text';
import {useTheme} from '../../utils/ThemeContextProvider';
import {IconProps} from '../../utils/types';
import {StyleSheet, View} from 'react-native';

export type TagType =
  | 'promo'
  | 'active'
  | 'inactive'
  | 'success'
  | 'warning'
  | 'error';

export type TagProps = {
  type?: TagType;
  children: string;
  Icon?: React.ComponentType<IconProps>;
};

export const styles = StyleSheet.create({
  tag: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 56,
    paddingBottom: 4,
    paddingTop: 4,
    paddingRight: 12,
    verticalAlign: 'middle',
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
});

const Tag: React.FC<TagProps> = ({Icon, children, type = 'promo'}) => {
  const {skin} = useTheme();
  const {colors} = skin;

  const isInverse = false;

  if (!children) {
    return null;
  }

  const tagTypeToColors = {
    // [textColor, inverseTextColor, backgroundColor]
    promo: [colors.promoHigh, colors.promoHighInverse, colors.promoLow],
    active: [colors.brand, colors.brand, colors.brandLow],
    inactive: [
      colors.neutralMedium,
      colors.neutralMediumInverse,
      colors.neutralLow,
    ],
    success: [colors.successHigh, colors.successHighInverse, colors.successLow],
    warning: [colors.warningHigh, colors.warningHighInverse, colors.warningLow],
    error: [colors.errorHigh, colors.errorHighInverse, colors.errorLow],
  } as const;

  const [textColor, inverseTextColor, backgroundColor] = tagTypeToColors[type];

  return (
    <View style={[styles.tag, {paddingLeft: Icon ? 8 : 12, backgroundColor}]}>
      {Icon && (
        <Box paddingRight={4}>
          <Icon color={textColor} size={16} />
        </Box>
      )}
      <Text
        color={isInverse ? inverseTextColor : textColor}
        size={14}
        lineHeight={20}
        weight="medium"
        truncate>
        {children}
      </Text>
    </View>
  );
};

export default Tag;
