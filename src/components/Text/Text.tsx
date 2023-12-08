import React from 'react';
import { Text as RNText } from 'react-native';
import { useTheme } from '../../hooks/ThemeContextProvider';

type Weight = 'light' | 'regular' | 'medium' | 'bold';

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

type TextTransform =
 | 'uppercase'
 | 'capitalize'
 | 'lowercase'
 | 'none'
 | undefined;

type TextDecoration = 
 | 'underline' 
 | 'line-through'  
 | 'none' 
 | undefined;

type TextPresetProps = {
  color?: string;
  decoration?: 'underline' | 'line-through' | 'inherit' | 'none';
  transform?: 'uppercase' | 'capitalize' | 'lowercase' | 'inherit' | 'none';
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
  weight?: Weight;
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
  regular?: boolean;
  medium?: boolean;
}

interface MediumProps extends TextPresetProps {
  light?: boolean;
  regular?: boolean;
  medium?: boolean;
}

interface RegularProps extends TextPresetProps {
  light?: boolean;
  regular?: boolean;
  medium?: boolean;
}

type RegularMediumProps = RegularProps | MediumProps;
type LightRegularMediumProps = LightProps | RegularProps | MediumProps;

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

  const mapToWeight = {
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

  // ******* Original Styles *******
  // const style = {
  //   fontSize: mobileSize ? mobileSize : size,
  //   lineHeight: mobileLineHeight ? mobileLineHeight : lineHeight,
  //   fontWeight: weight ? mapToWeight[weight] : '400',
  //   textTransform: transform || 'none',
  //   textDecorationLine: decoration ?? 'none',
  //   color: color || textPrimary,
  //   letterSpacing,
  //   textAlign,
  //   flexShrink: wordBreak ? 1 : 0,
  // };

  const style = {
    fontSize: mobileSize ? mobileSize : size,
    lineHeight: mobileLineHeight ? Number(mobileLineHeight) : Number(lineHeight),
    fontWeight: weight ? mapToWeight[weight] as FontWeight : '400',
    textTransform: transform as TextTransform || 'none',
    textDecorationLine: decoration as TextDecoration ?? 'none',
    color: color || textPrimary,
    letterSpacing,
    textAlign,
    flexShrink: wordBreak ? 1 : 0,
  }

  return (
    <RNText numberOfLines={getNumberofLines()} style={style} id={id}>
      {children}
    </RNText>
  );
};

const getWeight = (props: LightRegularMediumProps) => {
  if (props.light) {
    return 'light';
  }
  if (props.regular) {
    return 'regular';
  }
  if (props.medium) {
    return 'medium';
  }
  return undefined;
};

export const Text10: React.FC<TextPresetProps> = ({
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
      weight={textPresets?.text10?.weight}
      {...props}
    />
  );
};

export const Text9: React.FC<TextPresetProps> = ({
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
      weight={textPresets?.text9?.weight}
      {...props}
    />
  );
};

export const Text8: React.FC<TextPresetProps> = ({
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
      weight={textPresets?.text8?.weight}
      {...props}
    />
  );
};

export const Text7: React.FC<TextPresetProps> = ({
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
      weight={textPresets?.text7?.weight}
      {...props}
    />
  );
};

export const Text6: React.FC<TextPresetProps> = ({
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
      weight={textPresets?.text6?.weight}
      {...props}
    />
  );
};

export const Text5: React.FC<TextPresetProps> = ({
  forceMobileSizes,
  ...props
}) => {
  const theme = useTheme();
  const { textPresets } = theme.skin;
  return (
    <Text
      {...getTextSizes({
        forceMobileSizes,
        mobileSize: 20,
        mobileLineHeight: 24,
        desktopSize: 28,
        desktopLineHeight: 32,
      })}
      weight={textPresets?.text5?.weight}
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

export const Text3: React.FC<LightRegularMediumProps> = ({
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
