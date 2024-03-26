import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '../Text/Text';
import Badge from '../Badge/Badge';
import { useTheme } from '../../utils/ThemeContextProvider';
import { getStylesSelectedBox } from './SelectedBox.css';

interface SelectedBoxProps {
  customComponent?: React.ReactNode;
  text?: string;
  badge?: number;
  width?: number;
  onSelect?: (selected: boolean, value?: any) => void; // Función de devolución de llamada con un valor opcional
  value?: any; // Valor opcional que se puede utilizar en el evento onSelect
}

const SelectedBox: React.FC<SelectedBoxProps> = ({ customComponent, text, badge, width, onSelect, value }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { skin } = useTheme();
  const styles = getStylesSelectedBox(skin.colors);

  const handlePress = () => {
    const newSelected = !isSelected; // Nuevo estado de selección
    setIsSelected(newSelected);
    if (onSelect) {
      onSelect(newSelected, value); // Llamar a la función de devolución de llamada con el nuevo estado de selección y el valor
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container, { width }, isSelected && styles.selected]}>
      {/* First Div */}
      {customComponent && ( <View style={styles.customComponentContainer}>
        {customComponent}
      </View>)}
      
      {/* Second Div */}
      {text && (<View style={styles.textContainer}>
        <Text>{text}</Text>
      </View>)}
      
      {/* Badge */}
      {isSelected && badge && (
        <View style={styles.badgeContainer}>
          <Badge type='controlActivated' value={badge} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SelectedBox;