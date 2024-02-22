import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Platform } from 'react-native';

interface TextFieldBaseProps {
  error?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  maxLength?: number;
  // Agrega más propiedades según sea necesario
}

const TextFieldBase: React.FC<TextFieldBaseProps> = ({
  error,
  helperText,
  label,
  placeholder,
  defaultValue,
  value,
  autoFocus,
  disabled,
  maxLength,
  // Agrega más propiedades según sea necesario
}) => {
  const [inputValue, setInputValue] = useState(defaultValue || value);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        ref={inputRef}
        style={[styles.input, error ? styles.errorInput : null]}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder={placeholder}
        editable={!disabled}
        maxLength={maxLength}
        // Agrega más propiedades de TextInput según sea necesario
      />
      {helperText && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Ajusta el estilo del contenedor según tu diseño
  },
  label: {
    // Ajusta el estilo de la etiqueta según tu diseño
  },
  input: {
    // Ajusta el estilo del input según tu diseño
  },
  errorInput: {
    // Ajusta el estilo del input cuando hay un error
  },
  helperText: {
    // Ajusta el estilo del texto de ayuda según tu diseño
  },
  // Agrega más estilos según sea necesario
});

export default TextFieldBase;
