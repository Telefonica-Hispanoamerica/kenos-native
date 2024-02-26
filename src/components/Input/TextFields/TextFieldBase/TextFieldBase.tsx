import React, { useState, useRef, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { FieldValidator } from '../../../../patterns/Forms/FormContext';
import { Text3 } from '../../../Text/Text';

// Define las propiedades basadas en las propiedades comunes y específicas de TextFieldBaseProps
interface TextFieldBaseProps {
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label: string;
  name: string;
  maxLength?: number;
  validate?: FieldValidator;
  optional?: boolean;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  // ... otras propiedades que necesites
}

const TextFieldBase: React.FC<TextFieldBaseProps> = ({
  autoFocus,
  disabled,
  error,
  helperText,
  label,
  placeholder,
  defaultValue,
  value,
  maxLength,
  // ... otras propiedades desestructuradas
}) => {
  const [inputValue, setInputValue] = useState(defaultValue || value);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  // Estilos adaptados para React Native
  const styles = StyleSheet.create({
    container: {
      // ... estilos para el contenedor
    },
    label: {
      // ... estilos para la etiqueta
    },
    input: {
      // ... estilos para el input
      borderColor: error ? 'red' : 'gray', // Ejemplo de estilo condicional basado en el error
    },
    helperText: {
      // ... estilos para el texto de ayuda
    },
    // ... otros estilos que necesites
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder={placeholder}
        editable={!disabled}
        maxLength={maxLength}
        // ... otras propiedades de TextInput
      />
      {helperText && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};

export default TextFieldBase;