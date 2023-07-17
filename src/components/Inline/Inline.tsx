import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
    space: | -16 | -12 | -8 | -4 | -2 | 0 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 'between' | 'around' | 'evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    children: React.ReactNode;
    role?: string;
    fullWidth?: boolean;
    wrap?: boolean;
};

const Inline: React.FC<Props> = ({
    space,
    children,
    alignItems = 'stretch',
    fullWidth,
    wrap,
}) => {
    const isFullWith = fullWidth || typeof space === 'string';

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            marginTop: isFullWith ? 0 : -space,
            marginLeft: isFullWith ? 0 : -space,
            alignItems,
            flexWrap: wrap ? 'wrap' : 'nowrap',
            justifyContent:
                typeof space === 'string'
                    ? space === 'between'
                        ? 'space-between'
                        : space === 'around'
                            ? 'space-around'
                            : space === 'evenly'
                                ? 'space-evenly'
                                : 'flex-start'
                    : undefined,
        }
    })

    return (
        <View style={styles.container}>
            {React.Children.toArray(children).map((child) =>
                !!child || child === 0 ? <View style={{ marginLeft: space, marginTop: space }}>{child}</View> : null
            )}
        </View>
    );
};

export default Inline;