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
};

type InternalProps = {
  borderRadius: 8 | 16;
  background?: string;
};

const getBorderStyle = (
  isInverseOutside: boolean,
  isInverseInside: boolean,
): StyleProp<ViewStyle> => {
  const {skin} = useTheme();
  const {backgroundContainer} = skin.colors;

  if (isInverseOutside && !isInverseInside) {
    return {
      borderWidth: 1,
      borderColor: backgroundContainer,
    };
  }

  if (isInverseInside) {
    return {borderWidth: 0};
  }

  return {borderWidth: 1}; //sprinkles({border: 'regular'});
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
}: Props & InternalProps) => {
  const {skin} = useTheme();
  const {backgroundContainer, backgroundBrand} = skin.colors;

  const {isDarkMode} = useTheme();
  const isInverseOutside = useIsInverseVariant();

  const styleBoxed = StyleSheet.flatten([
    styles,
    {
      borderRadius: borderRadius,
      overflow: 'hidden' as const,
      background: !background
        ? isInverseInside && !isDarkMode
          ? backgroundBrand
          : backgroundContainer
        : undefined,
    },
    getBorderStyle(isInverseOutside, isInverseInside),
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

export const Boxed = (props: Props & InternalProps) => {
  return <InternalBoxed {...props} borderRadius={8}></InternalBoxed>;
};
