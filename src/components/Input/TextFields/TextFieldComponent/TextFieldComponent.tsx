import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../../../utils/ThemeContextProvider';
import {styles} from './TextFieldComponent.css';

export type InputState = 'focused' | 'filled' | 'default';

type LabelProps = {
  shrinkLabel?: boolean;
  forId: string;
  inputState: InputState;
  error?: boolean;
  children: string;
  style?: React.CSSProperties;
  optional?: boolean;
};

export const Label: React.FC<LabelProps> = ({
  shrinkLabel,
  forId,
  inputState,
  error,
  children,
  style,
  optional,
}) => {
  const isShrinked =
    shrinkLabel || inputState === 'focused' || inputState === 'filled';
  const [transitionStyle, setTransitionStyle] = React.useState('initial');
  const vars = useTheme().skin;
  const texts = useTheme().texts;

  useLayoutEffect(() => {
    const tid = setTimeout(() => {
      if (process.env.NODE_ENV !== 'test') {
        setTransitionStyle('transform 150ms, width 150ms');
      }
    });
    return () => {
      clearTimeout(tid);
    };
  }, []);

  let color = vars.colors.textSecondary;
  if (error && inputState !== 'default') {
    color = vars.colors.errorHigh;
  } else if (inputState === 'focused') {
    color = vars.colors.textPrimary;
  }

  return (
    <View style={[styles.labelContainer, isShrinked && styles.shrinkedContainer]}>
      <Text style={[styles.labelText, isShrinked && styles.shrinkedText, {color}]}>{children}
      {optional ? (
         <Text>&nbsp;({texts.formFieldOptionalLabelSuffix})</Text>
        ) : null}
      </Text>
     
    </View>
  );
};

type HelperTextProps = {
  leftText?: string;
  rightText?: string;
  error?: boolean;
  children?: void;
};

export const HelperText: React.FC<HelperTextProps> = ({
  leftText,
  rightText,
  error,
}) => {
  const vars = useTheme().skin;
  const leftColor = error ? vars.colors.errorHigh : vars.colors.textPrimary;
  const rightColor = vars.colors.textSecondary;

  return (
    <View style={styles.helperContainer}>
      {leftText && (
        <Text style={[styles.helperText, styles.leftText, {color: leftColor}]}>
          {leftText}
        </Text>
      )}
      {rightText && (
        <Text
          style={[styles.helperText, styles.rightText, {color: rightColor}]}>
          {rightText}
        </Text>
      )}
    </View>
  );
};

type FieldContainerProps = {
  multiline?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  helperText?: React.ReactNode;
  fullWidth?: boolean;
  fieldRef?: React.RefObject<View>;
  readOnly?: boolean;
  inputState: InputState;
  error?: boolean;
};

export const FieldContainer: React.FC<FieldContainerProps> = ({
  multiline,
  disabled,
  children,
  helperText,
  fieldRef,
  fullWidth,
  readOnly,
  inputState,
  error,
}) => {
  const vars = useTheme().skin;
  const getBorderStyle = () => {
    if (error && inputState !== 'default') {
      return borderStyles.borderError;
    } else if (inputState === 'focused') {
      return borderStyles.borderSelected;
    } else {
      return borderStyles.borderDark;
    }
  };

  const borderStyles = StyleSheet.create({
    borderError: {
      borderWidth: 2,
      borderColor: vars.colors.error,
    },
    borderSelected: {
      borderWidth: 2,
      borderColor: vars.colors.borderSelected,
    },
    borderDark: {
      borderWidth: 1,
      borderColor: vars.colors.borderDark,
    },
  });

  return (
    <View
      style={[
        styles.fieldContainer,
        fullWidth ? styles.fullWidth : styles.normalWidth,
        disabled && styles.disabled,
      ]}>
      <View
        style={[
          styles.field,
          multiline ? styles.fieldMulti : styles.fieldSingle,
          {
            backgroundColor: readOnly
              ? vars.colors.neutralLow
              : vars.colors.backgroundContainer,
          },
          getBorderStyle()
        ]}
        ref={fieldRef}>
        {children}
      </View>
      {helperText}
    </View>
  );
};
