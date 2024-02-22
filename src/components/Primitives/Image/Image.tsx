import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {ImageResizeMode, Image as RNImage, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {useIsInverseVariant} from '../../../utils/ThemeVariantContext';
import {SkeletonRectangle} from '../../Skeletons/Skeletons';
import {FADE_IN_DURATION_MS, stylesImageError} from './Image.css';

const MediaBorderRadiusContext = createContext(true);

export const useMediaBorderRadius = (): boolean =>
  useContext(MediaBorderRadiusContext);

export const MediaBorderRadiusProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: boolean;
}): JSX.Element => (
  <MediaBorderRadiusContext.Provider value={value}>
    {children}
  </MediaBorderRadiusContext.Provider>
);

type ImageErrorProps = {
  noBorderRadius?: boolean;
};

const ImageError = ({noBorderRadius}: ImageErrorProps) => {
  const {skin} = useTheme();
  const isInverse = useIsInverseVariant();
  return (
    <View
      style={[
        stylesImageError.container,
        {
          backgroundColor: isInverse
            ? skin.colors.backgroundSkeletonInverse
            : skin.colors.backgroundSkeleton,
          borderRadius: noBorderRadius ? 0 : 8,
        },
      ]}>
      <Svg viewBox="0 0 24 24" role="presentation" style={stylesImageError.svg}>
        <Path
          fill={isInverse ? skin.colors.inverse : skin.colors.neutralMedium}
          d="M20.25 4.622c.832 0 1.591.664 1.591 1.393v11.98c0 .728-.76 1.392-1.591 1.392H3.746c-.863 0-1.591-.639-1.591-1.392V6.015c0-.754.728-1.393 1.59-1.393H20.25zm0 13.558c.193 0 .367-.146.39-.207l-.003-11.956a.555.555 0 00-.384-.182H3.746c-.21 0-.364.132-.387.19v11.973c.014.044.171.182.387.182H20.25zM6.152 9.068c0 .554.451 1.005 1.003 1.005a1.006 1.006 0 000-2.01c-.552 0-1.003.45-1.003 1.005zm1.003 2.215a2.216 2.216 0 010-4.43c1.218 0 2.207.993 2.207 2.215a2.213 2.213 0 01-2.207 2.215zm12.42 1.337l-3.18-2.44a.605.605 0 00-.742.005l-3.636 2.9-.879-.83a.6.6 0 00-.798-.025l-5.168 4.317a.607.607 0 00.386 1.07.59.59 0 00.384-.14l4.759-3.975 3.308 3.123c.241.23.625.221.852-.025a.605.605 0 00-.026-.854l-1.932-1.824 3.131-2.496 2.807 2.154a.603.603 0 00.846-.112.609.609 0 00-.112-.848z"
        />
      </Svg>
    </View>
  );
};

export type AspectRatio = '1:1' | '16:9' | '7:10' | '4:3';

export const RATIO = {
  '1:1': 1,
  '16:9': 16 / 9,
  '7:10': 7 / 10,
  '4:3': 4 / 3,
};

export type ImageProps = {
  src: string;
  width?: string | number;
  height?: string | number;
  aspectRatio?: AspectRatio | number;
  alt?: string;
  noBorderRadius?: boolean;
  onError?: () => void;
  onLoad?: () => void;
  loadingFallback?: boolean;
  errorFallback?: boolean;
  resizeMode?: ImageResizeMode;
};

const Image = React.forwardRef<RNImage, ImageProps>(
  (
    {
      aspectRatio = 0,
      alt = '',
      noBorderRadius,
      src,
      onError,
      onLoad,
      loadingFallback = true,
      errorFallback = true,
      ...props
    },
    ref,
  ) => {
    const imageRef = useRef<RNImage>(null);
    const noBorderSetting = noBorderRadius ?? true;
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hideLoadingFallback, setHideLoadingFallback] = useState(false);

    const ratio =
      typeof aspectRatio === 'number' ? aspectRatio : RATIO[aspectRatio];

    const onLoadHandler = useCallback(() => {
      setIsError(false);
      setIsLoading(false);
      setTimeout(() => {
        setHideLoadingFallback(true);
      }, FADE_IN_DURATION_MS);
      onLoad?.();
    }, [onLoad]);

    const img = (
      <RNImage
        ref={imageRef}
        style={{
          aspectRatio: ratio !== 0 ? ratio : undefined,
          opacity: isLoading && loadingFallback ? 0 : 1,          
          borderRadius: noBorderSetting ? 0 : 8,
          width: props.width,
          height: props.height,
          resizeMode: props.resizeMode,
        }}
        source={{uri: src}}
        onError={() => {
          setIsError(true);
          setIsLoading(false);
          setHideLoadingFallback(true);
          onError?.();
        }}
        onLoad={onLoadHandler}
      />
    );

    useEffect(() => {
      if (imageRef.current) {
        onLoadHandler();
      }
    }, [onLoadHandler]);

    return (
      <View>
        {isLoading && loadingFallback && !hideLoadingFallback && (
          <View style={{width: '100%', height: '100%'}}>
            <SkeletonRectangle
              width={props.width}
              height={props.height}
              noBorderRadius={noBorderSetting}
            />
          </View>
        )}
        {isError && errorFallback && (
          <View style={{width: '100%', height: '100%'}}>
            <ImageError noBorderRadius={noBorderSetting} />
          </View>
        )}
        {!isError && img}
      </View>
    );
  },
);

export default Image;
