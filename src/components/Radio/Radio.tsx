import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { getStylesRadio } from './Radio.css';

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
  const styles = getStylesRadio(skin.colors)
  const {control, iosControlKnob, controlActivated} = skin.colors

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