import React from 'react';
import { View } from 'react-native';

type PadSize = 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80;

type Props = {
    width?: number | string;
    padding?: PadSize;
    paddingX?: PadSize;
    paddingY?: PadSize;
    paddingTop?: PadSize;
    paddingBottom?: PadSize;
    paddingLeft?: PadSize;
    paddingRight?: PadSize;
    children?: React.ReactNode;
    style?: object;
    accessibilityLabel?: string;
};

const Box = React.forwardRef<View, Props>(
    ({
        style,
        children,
        width,
        padding = 0,
        paddingX = padding,
        paddingY = padding,
        paddingTop = paddingY,
        paddingBottom = paddingY,
        paddingLeft = paddingX,
        paddingRight = paddingX,
        accessibilityLabel,
    }, ref
    ) => {
        const paddingStyles = {
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
        };

        return (
            <View
                ref={ref}
                style={[style, width !== undefined ? { width, boxSizing: 'border-box' } : null, { ...paddingStyles }]}
                accessibilityLabel={accessibilityLabel}
            >
                {children}
            </View>
        );
    }
);

export default Box;