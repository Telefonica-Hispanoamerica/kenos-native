import React, { useRef, useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps } from 'react-native';
import  TextFieldBaseAutosuggest  from '../TextFieldBase/TextFieldBase'; // Asume que este componente ya está adaptado a React Native

export interface TextFieldProps extends TextInputProps {
  onChangeValue?: (value: string) => void;
  onPress?: () => void;
  multiline?: boolean;
  prefix?: React.ReactNode;
  endIcon?: React.ReactNode;
  getSuggestions?: (value: string) => ReadonlyArray<string>;
  // Agrega más props según sea necesario
}

const TextField: React.FC<TextFieldProps> = ({
  onChangeValue,
  onPress,
  multiline,
  prefix,
  endIcon,
  getSuggestions,
  ...rest
}) => {
  const [value, setValue] = useState('');

  // Maneja el cambio de texto
  const handleChangeText = (text: string) => {
    setValue(text);
    if (onChangeValue) onChangeValue(text);
  };

  // Aquí puedes agregar más lógica según sea necesario

  return (
    <View style={styles.container}>
      {/* Renderiza el prefijo si existe */}
      {prefix && <View style={styles.prefix}>{prefix}</View>}
      <TextInput
        {...rest}
        multiline={multiline}
        onChangeText={handleChangeText}
        value={value}
        style={styles.input}
        // Agrega más props y estilos según sea necesario
      />
      {/* Renderiza el icono final si existe */}
      {endIcon && <View style={styles.endIcon}>{endIcon}</View>}
    </View>
  );
};

// Define tus estilos aquí
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // Agrega más estilos según tu diseño
  },
  input: {
    flex: 1,
    // Estilos para tu TextInput
  },
  prefix: {
    // Estilos para el prefijo
  },
  endIcon: {
    // Estilos para el icono final
  },
});

export default TextField;
