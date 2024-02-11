import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';

type FontWeight = 'light' | 'regular' | 'medium' | 'bold';

type TextPresetProps = {
  color?: string;
  decoration?: 'underline' | 'line-through' | 'none';
  transform?: 'uppercase' | 'capitalize' | 'lowercase' | 'none';
  children?: React.ReactNode;
  truncate?: boolean | number;
  wordBreak?: boolean;
  textAlign?: 'center';
  id?: string;
  as?: React.ComponentType<any> | string;
  role?: string;
  'aria-level'?: number;
  forceMobileSizes?: boolean;
};

type TextProps = TextPresetProps & {
  weight?: FontWeight;
  size?: number;
  mobileSize?: number;
  desktopSize?: number;
  lineHeight?: string | number;
  mobileLineHeight?: string | number;
  desktopLineHeight?: string | number;
  letterSpacing?: number;
};

interface LightProps extends TextPresetProps {
  light?: boolean;
  regular?: undefined;
  medium?: undefined;
  bold?: undefined;
}
interface RegularProps extends TextPresetProps {
  light?: undefined;
  regular?: boolean;
  medium?: undefined;
  bold?: undefined;
}

interface MediumProps extends TextPresetProps {
  light?: undefined;
  regular?: undefined;
  medium?: boolean;
  bold?: undefined;
}

interface BoldProps extends TextPresetProps {
  light?: undefined;
  regular?: undefined;
  medium?: undefined;
  bold?: boolean;
}

type BoldRegularProps = RegularProps | BoldProps;
type RegularMediumProps = RegularProps | MediumProps;
type LightRegularMediumProps =  LightProps | RegularProps | MediumProps;
type LightRegularMediumBoldProps = LightProps | RegularProps | MediumProps | BoldProps;

const lineClamp = (truncate?: boolean | number) => {
  if (truncate === true) {
    return 1;
  }
  if (truncate) {
    return truncate;
  }
  return 'initial';
};

const getTextSizes = ({
  forceMobileSizes,
  mobileSize,
  mobileLineHeight,
  desktopSize,
  desktopLineHeight,
}: {
  forceMobileSizes?: boolean;
  mobileSize?: number;
  mobileLineHeight?: string | number;
  desktopSize?: number;
  desktopLineHeight?: string | number;
}) => {
  if (forceMobileSizes) {
    return {
      size: mobileSize,
      lineHeight: mobileLineHeight,
    };
  } else {
    return {
      mobileSize,
      mobileLineHeight,
      desktopSize,
      desktopLineHeight,
    };
  }
};

export const Text = ({
  weight,
  color,
  decoration,
  truncate,
  transform,
  wordBreak = true,
  children,
  size,
  mobileSize = size,
  lineHeight,
  mobileLineHeight = lineHeight,
  letterSpacing,
  textAlign,
  id,
}: TextProps) => {
  const theme = useTheme();
  const {
    textPrimary,
    textSecondary,
    textLink,
    textPrimaryInverse,
    textSecondaryInverse,
    textLinkInverse,
  } = theme.skin.colors;

  const lineClampValue = lineClamp(truncate);

  const inverseColorsMap = {
    [textPrimary]: textPrimaryInverse,
    [textSecondary]: textSecondaryInverse,
    [textLink]: textLinkInverse,
  };

  if (!children && children !== 0) {
    return null;
  }

  const mapToWeight : Record<FontWeight, TextStyle['fontWeight']> = {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
  };

  const getNumberofLines = () => {
    if (truncate === 1 || truncate === true) {
      return 1;
    } else if (truncate && truncate > 1) {
      return truncate;
    }
  };

  const style: TextStyle = {
    fontSize: mobileSize ? mobileSize : size,
    lineHeight: typeof mobileLineHeight === 'number' || typeof mobileLineHeight === 'undefined'
    ? mobileLineHeight
    : parseFloat(mobileLineHeight),
    fontWeight: weight ? mapToWeight[weight] : '400' as TextStyle['fontWeight'],
    textTransform: transform || 'none',
    textDecorationLine: decoration ?? 'none',
    color: color || textPrimary,
    letterSpacing,
    textAlign,
    flexShrink: wordBreak ? 1 : 0,
  };

  return (
    <RNText numberOfLines={getNumberofLines()} id={id} style={style}>
      {children}
    </RNText>
  );
};

const getWeight = (props: LightRegularMediumBoldProps) => {
  if (props.light) {
    return 'light';
  }
  if (props.regular) {
    return 'regular';
  }
  if (props.medium) {
    return 'medium';
  }
  if (props.bold) {
    return 'bold';
  }
  return undefined;
};

export const Text10: React.FC<BoldRegularProps> = ({
  forceMobileSizes,
  ...props
}) => {
  const theme = useTheme();
  const { textPresets } = theme.skin;
  return (
    <Text
      {...getTextSizes({
        forceMobileSizes,
        mobileSize: 48,
        mobileLineHeight: 56,
        desktopSize: 64,
        desktopLineHeight: 72,
      })}
      weight={getWeight(props)}
      {...props}
    />
  );
};

export const Text9: React.FC<BoldRegularProps> = ({
  forceMobileSizes,
  ...props
}) => {
  const theme = useTheme();
  const { textPresets } = theme.skin;
  return (
    <Text
      {...getTextSizes({
        forceMobileSizes,
        mobileSize: 40,
        mobileLineHeight: 48,
        desktopSize: 56,
        desktopLineHeight: 64,
      })}
      weight={getWeight(props)}
      {...props}
    />
  );
};

export const Text8: React.FC<BoldRegularProps> = ({
  forceMobileSizes,
  ...props
}) => {
  const theme = useTheme();
  const { textPresets } = theme.skin;
  return (
    <Text
      {...getTextSizes({
        forceMobileSizes,
        mobileSize: 32,
        mobileLineHeight: 40,
        desktopSize: 48,
        desktopLineHeight: 56,
      })}
      weight={getWeight(props)}
      {...props}
    />
  );
};

export const Text7: React.FC<BoldRegularProps> = ({
  forceMobileSizes,
  ...props
}) => {
  const theme = useTheme();
  const { textPresets } = theme.skin;
  return (
    <Text
      {...getTextSizes({
        forceMobileSizes,
        mobileSize: 28,
        mobileLineHeight: 32,
        desktopSize: 40,
        desktopLineHeight: 48,
      })}
      weight={getWeight(props)}
      {...props}
    />
  );
};

export const Text6: React.FC<BoldRegularProps> = ({
  forceMobileSizes,
  ...props
}) => {
  const theme = useTheme();
  const { textPresets } = theme.skin;
  return (
    <Text
      {...getTextSizes({
        forceMobileSizes,
        mobileSize: 24,
        mobileLineHeight: 32,
        desktopSize: 32,
        desktopLineHeight: 40,
      })}
      weight={getWeight(props)}
      {...props}
    />
  );
};

export const Text5: React.FC<BoldRegularProps> = ({
  forceMobileSizes,
  ...props
}) => {
  const theme = useTheme();
  const { textPresets } = theme.skin;
  return (
    <Text
      {...getTextSizes({
        forceMobileSizes,
        mobileSize: 22,
        mobileLineHeight: 24,
        desktopSize: 28,
        desktopLineHeight: 32,
      })}
      weight={getWeight(props)}
      {...props}
    />
  );
};

export const Text4: React.FC<LightRegularMediumProps> = ({
  forceMobileSizes,
  ...props
}) => (
  <Text
    {...getTextSizes({
      forceMobileSizes,
      mobileSize: 18,
      mobileLineHeight: 24,
      desktopSize: 20,
      desktopLineHeight: 28,
    })}
    weight={getWeight(props)}
    {...props}
  />
);

export const Text3: React.FC<LightRegularMediumBoldProps> = ({
  forceMobileSizes,
  ...props
}) => (
  <Text
    {...getTextSizes({
      forceMobileSizes,
      mobileSize: 16,
      mobileLineHeight: 24,
      desktopSize: 18,
      desktopLineHeight: 24,
    })}
    weight={getWeight(props)}
    {...props}
  />
);

export const Text2: React.FC<RegularMediumProps> = ({
  forceMobileSizes,
  ...props
}) => (
  <Text
    {...getTextSizes({
      forceMobileSizes,
      mobileSize: 14,
      mobileLineHeight: 20,
      desktopSize: 16,
      desktopLineHeight: 24,
    })}
    weight={getWeight(props)}
    {...props}
  />
);

export const Text1: React.FC<RegularMediumProps> = ({
  forceMobileSizes,
  ...props
}) => (
  <Text
    {...getTextSizes({
      forceMobileSizes,
      mobileSize: 12,
      mobileLineHeight: 16,
      desktopSize: 14,
      desktopLineHeight: 20,
    })}
    weight={getWeight(props)}
    {...props}
  />
);
