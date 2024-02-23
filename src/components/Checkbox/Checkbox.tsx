import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { Text3 } from '../Text/Text';

interface CheckboxProps {
  label: string;
  linkText?: string;
  linkURL?: string;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  checkedCheck?: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({ label, linkText, linkURL, onChange, disabled = false, checkedCheck = false }) => {

  const [checked, setChecked] = useState<boolean>(checkedCheck);
  const {skin} = useTheme();
  const {control, controlActivated,iosControlKnob} = skin.colors; 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: control,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: controlActivated, 
    borderColor: controlActivated, 
  },
  checkmark: {
    width: 13,
    height: 6,
    borderBottomWidth: 2,
    borderBottomColor: iosControlKnob,
    borderLeftWidth: 2,
    borderLeftColor: iosControlKnob,
    transform: [{ rotate: '-45deg' }],
    marginBottom:2,
  },
  label: {
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    color: controlActivated,
    marginLeft: 10,
  },
  disabled: {
    opacity: 0.7, 
  },
  disabledLabel: {
    color: control, 
  },
  disabledLink: {
    color: control, 
  },
});

  const toggleCheckbox = () => {
    if (!disabled) {
      const newValue = !checked;
      setChecked(newValue);
      onChange(newValue);
    }
  };

  const handleLinkPress = () => {
    if (linkURL) {
      Linking.openURL(linkURL);
    }
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.container}>
      <View style={[styles.checkbox, checked && styles.checked, disabled && styles.disabled]} >
      {checked &&  <View style={styles.checkmark} />}
      </View>
      <Text3 >{label}</Text3>
      {linkText && linkURL && (
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={[styles.link, disabled && styles.disabledLink]}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;