import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../../utils/ThemeContextProvider'; // Asegúrate de que useTheme sea compatible con React Native

export type InputState = 'focused' | 'filled' | 'default';

type LabelProps = {
    shrinkLabel?: boolean;
    forId: string;
    inputState: InputState;
    error?: boolean;
    children: string;
    optional?: boolean;
};

export const Label: React.FC<LabelProps> = ({
    shrinkLabel,
    inputState,
    error,
    children,
    optional,
}) => {
    const { skin, texts } = useTheme(); // Asume que useTheme devuelve un objeto con colores y textos

    let color = error && inputState !== 'default' ? skin.colors.errorHigh : skin.colors.textSecondary;
    if (inputState === 'focused') {
        color = skin.colors.textPrimary;
    }

    return (
        <Text style={[styles.label, { color }]}>
            {children}
            {optional && ` (${texts.formFieldOptionalLabelSuffix})`}
        </Text>
    );
};

type HelperTextProps = {
    leftText?: string;
    rightText?: string;
    error?: boolean;
};

export const HelperText: React.FC<HelperTextProps> = ({leftText, rightText, error}) => {
    const { skin } = useTheme(); // Asume que useTheme devuelve un objeto con colores

    const leftColor = error ? skin.colors.errorHigh : skin.colors.textPrimary;
    const rightColor = skin.colors.textSecondary;

    return (
        <View style={styles.helperContainer}>
            {leftText && (
                <Text style={[styles.helperText, { color: leftColor }]}>{leftText}</Text>
            )}
            {rightText && (
                <Text style={[styles.helperText, styles.rightText, { color: rightColor }]}>{rightText}</Text>
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
    readOnly?: boolean;
    inputState: InputState;
    error?: boolean;
};

export const FieldContainer: React.FC<FieldContainerProps> = ({
    multiline,
    disabled,
    children,
    helperText,
    fullWidth,
    readOnly,
    inputState,
    error,
}) => {
    const { skin } = useTheme(); // Asume que useTheme devuelve un objeto con colores

    const backgroundColor = readOnly ? skin.colors.neutralLow : skin.colors.backgroundContainer;
    const borderColor = error && inputState !== 'default' ? skin.colors.error : undefined;

    return (
        <View style={[styles.fieldContainer, fullWidth && styles.fullWidth, { backgroundColor, borderColor }]}>
            {children}
            {helperText}
        </View>
    );
};

// Define tus estilos aquí
const styles = StyleSheet.create({
  label: {
    // Estilos para Label
  },
  helperContainer: {
    // Estilos para HelperText
  },
  helperText: {
    // Estilos comunes para el texto de ayuda
  },
  rightText: {
    // Estilos específicos para el texto de ayuda derecho
  },
  fieldContainer: {
    // Estilos para FieldContainer
  },
  fullWidth: {
    // Estilos para cuando el contenedor debe ocupar el ancho completo
  },
  // Agrega más estilos según sea necesario
});

