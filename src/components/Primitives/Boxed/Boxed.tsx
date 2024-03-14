import * as React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {getPrefixedDataAttributes} from '../../../utils/dom';
import {DataAttributes} from '../../../utils/types';
import {
  ThemeVariant,
  useIsInverseVariant,
} from '../../../utils/ThemeVariantContext';

type Props = {
  'aria-label'?: string;
  /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
  accessibilityLabel?: string;
  children: React.ReactNode;
  dataAttributes?: DataAttributes;
  height?: number | string;
  isInverse?: boolean;
  minHeight?: number | string;
  styles?: StyleProp<ViewStyle>;
  width?: number | string;
  borderRadius: 8 | 16;
  borderWidth?: number;
  borderColor?: string;
  background?: string;
};

export const InternalBoxed = ({
  'aria-label': ariaLabel,
  accessibilityLabel,
  children,
  dataAttributes,
  isInverse: isInverseInside = false,
  styles,
  borderRadius,
  background,
  borderWidth,
  borderColor,
}: Props) => {
  const {skin, isDarkMode} = useTheme();
  const {backgroundContainer, backgroundBrand, border} = skin.colors;

  const isInverseOutside = useIsInverseVariant();
  const borderWidthApply = borderWidth ?? (isInverseInside ? 0 : 1);
  const borderColorApply = borderColor ?? border; // (isInverseOutside && !isInverseInside ? border : undefined);
  const backgroundApply =
    background ?? (isInverseInside && !isDarkMode)
      ? backgroundBrand
      : backgroundContainer;

  const styleBoxed = StyleSheet.flatten([
    styles,
    {
      borderRadius: borderRadius,
      overflow: 'hidden' as const,
      borderWidth: borderWidthApply,
      borderColor: borderColorApply,
      background: backgroundApply,
    },
  ]);

  return (
    <View
      style={styleBoxed}
      accessibilityLabel={accessibilityLabel}
      aria-label={ariaLabel}
      {...getPrefixedDataAttributes(dataAttributes)}>
      <ThemeVariant isInverse={isInverseInside}>{children}</ThemeVariant>
    </View>
  );
};

export const Boxed = (props: Props) => {
  return <InternalBoxed {...props}></InternalBoxed>;
};
