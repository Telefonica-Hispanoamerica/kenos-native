import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Radio from '../Radio/Radio';
import IconChevron from '../../icons/icon-chevron';
import { Text1 } from '../Text/Text';

interface RowProps {
  label: string;
  value: string;
  onSelect: (value: string) => void;
  defaultValue: string;
  disabled?: boolean;
  rightComponent?: 'RadioButton' | 'IconChevron'; // Nuevo prop para especificar el componente derecho
  // Incluye otros props existentes aquí
  // Por ejemplo:
  headline?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  badge?: boolean | number;
  extra?: React.ReactNode;
}

const Row: React.FC<RowProps> = ({
  label,
  value,
  onSelect,
  defaultValue,
  disabled = false,
  rightComponent = 'RadioButton', // Por defecto, mostrar RadioButton
  // Incluye otros props existentes aquí
  // Por ejemplo:
  headline,
  title,
  subtitle,
  description,
  badge,
  extra,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelect = (newValue: string) => {
    setSelectedValue(newValue);
    onSelect(newValue);
  };

  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => handleSelect(value)}
      disabled={disabled}
      // Pasa otros props existentes aquí
      // Por ejemplo:
      accessibilityLabel={label}
      testID={`row-${value}`}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Text1>holaaaa</Text1>
          <Text1>holaaaa</Text1>
          
        </View>
        {rightComponent === 'RadioButton' && (
          <Radio
            label={label}
            value={value}
            defaultValue={defaultValue}
            onSelect={onSelect}
            disabled={disabled}
          />
        )}
        {rightComponent === 'IconChevron' && (
          <IconChevron
            color={disabled ? 'grey' : 'black'}
            direction="right"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Row;