import * as React from 'react';
import { View } from 'react-native';


const AspectRatioSupport = React.createContext(true);

type Props = {
    children: React.ReactNode;
};

export const AspectRatioSupportProvider: React.FC<Props> = ({children}) => {
    // In SSR (and in first client side render) we assume the browser will support it
    const [isSupported, setIsSupported] = React.useState(true);

    // React Native doesn't have an equivalent API to CSS.supports, so we can't check for aspect-ratio support.
    // If you need to handle this in React Native, you might need to use a different approach.

    return <AspectRatioSupport.Provider value={isSupported}>{children}</AspectRatioSupport.Provider>;
};

export const useSupportsAspectRatio = (): boolean => React.useContext(AspectRatioSupport);

type AspectRatioElementProps = {
    width?: number | string;
    height?: number | string;
    aspectRatio: number;
    children: React.ReactNode;
    as?: React.ComponentType<any> | string;
    style?: object;
    className?: string;
};

export const AspectRatioElement = (props: AspectRatioElementProps): JSX.Element => {
    // if width or height are numeric, we can calculate the other with the ratio without css.
    // if aspect ratio is 0, we use the original image proportions
    const withCssAspectRatio =
        typeof props.width !== 'number' && typeof props.height !== 'number' && props.aspectRatio !== 0;

    const aspectRatio = withCssAspectRatio ? props.aspectRatio : undefined;

    let width: number | string | undefined = props.width;
    let height = props.height;

    if (props.width !== undefined && props.height !== undefined) {
        width = props.width;
        height = props.height;
    } else if (typeof props.width === 'number') {
        height = props.aspectRatio !== 0 ? props.width / props.aspectRatio : undefined;
    } else if (typeof props.height === 'number') {
        width = props.aspectRatio !== 0 ? props.height * props.aspectRatio : undefined;
    } else {
        width = props.width || '100%';
    }

    const needsWrapper = withCssAspectRatio;

    const container = React.createElement(
        props.as ?? View,
        {
            style: {
                ...(needsWrapper
                    ? {
                          ...props.style,
                          position: 'absolute',
                          width: '100%',
                      }
                    : {
                          ...props.style,
                          width: !isNaN(Number(width)) ? Number(width) : width,
                          height: !isNaN(Number(height)) ? Number(height) : height,
                      }),
            },
        },
        props.children
    );

    if (needsWrapper) {
        const paddingTop = (() => {
            if (!aspectRatio) {
                return 0;
            }
            if (props.width && typeof props.width === 'string' && props.width.endsWith('%')) {
                return `${Number(props.width.replace('%', '')) / aspectRatio}%`;
            }
            return `${100 / aspectRatio}%`;
        })();

        return (
            <View style={{width, height, paddingTop}}>
                {container}
            </View>
        );
    } else {
        return container;
    }
};