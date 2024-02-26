import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';

interface RadioButtonProps {
  label: string;
  value: string;
  defaultValue: string;
  onSelect: (value: string) => void;
  disabled?: boolean;
}

const Radio: React.FC<RadioButtonProps> = ({
  label,
  value,
  defaultValue,
  onSelect,
  disabled = false,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const {skin} = useTheme();
  const {control, iosControlKnob, controlActivated} = skin.colors

  const styles = StyleSheet.create({
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    radioButton: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    disabledRadioButton: {
      opacity: 0.5, // Reduce la opacidad cuando está deshabilitado
    },
    innerCircle: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: controlActivated,
    },
    label: {
      marginLeft: 10,
      fontSize: 16,
      color: control
    },
  });

  const handleSelect = (newValue: string) => {
    if (selectedValue !== newValue) {
      setSelectedValue(newValue);
      onSelect(newValue);
    }
  };

  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => handleSelect(value)}
      disabled={disabled}>
      <View style={[
        styles.radioButton,
        {
          borderColor: selectedValue === value ? controlActivated : control,
          backgroundColor: selectedValue === value ? iosControlKnob : iosControlKnob,
        },
        disabled && styles.disabledRadioButton,
      ]}>
        {selectedValue === value && !disabled && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};



export default Radio;