import * as React from 'react';
import Box from '../../layout/Box/Box';
import { Text } from '../Text/Text';
import { useTheme } from '../../utils/ThemeContextProvider';
import { IconProps } from '../../utils/types';
import { View } from 'react-native';
import { styles } from './Tag.css';

export type TagType = 'promo' | 'active' | 'inactive' | 'success' | 'warning' | 'error' | 'highlight';

export type TagProps = {
    type?: TagType
    children: string;
    Icon?: React.FC<IconProps>;
    isInverseTag?: boolean
    withBackground?: boolean
};

const Tag: React.FC<TagProps> = ({ Icon, children, type = 'promo', isInverseTag = false, withBackground = true}) => {
    const { skin } = useTheme();
    const { colors } = skin;


    if (!children) {
        return null;
    }

    const tagTypeToColors = {
        // [textColor, inverseTextColor, backgroundColor, inverseBackGroundColor]
        promo: [colors.promoHigh, colors.inverse, colors.promoLow, colors.promo],
        active: [colors.brand, colors.inverse, colors.brandLow,colors.brand],
        inactive: [
            colors.neutralMedium,
            colors.inverse,
            colors.neutralLow,
            colors.neutralMedium
        ],
        success: [colors.successHigh, colors.inverse, colors.successLow,colors.success],
        warning: [colors.warningHigh, colors.inverse, colors.warningLow,colors.warning],
        error: [colors.errorHigh, colors.inverse, colors.errorLow, colors.error],
        highlight: [colors.highlight, colors.inverse, colors.highlightLow, colors.highlight],
    } as const;

    const [textColor, inverseTextColor, backgroundColor, inverseBackGroundColor] = tagTypeToColors[type];

    return (
        <View
            style={withBackground ? [styles.tag, { paddingLeft: Icon ? 6 : 10,  backgroundColor: isInverseTag ? inverseBackGroundColor : backgroundColor }]: [styles.tag, { paddingLeft: Icon ? 8 : 12 }]}>
            {Icon && (
                <Box paddingRight={4}>
                    <Icon color={isInverseTag ? inverseTextColor : textColor} size={24} />
                </Box>
            )}
            <Text
                color={isInverseTag ? inverseTextColor : textColor}
                size={14}
                lineHeight={20}
                weight='medium'
                truncate>
                {children}
            </Text>
        </View>
    );
};

export default Tag;