import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Radio from '../Radio/Radio';
import IconChevron from '../../icons/icon-chevron';
import Tag from '../Tag/Tag';

interface RowProps {
  value: string;
  onSelect: (value: string) => void;
  defaultValue: string;
  disabled?: boolean;
  rightComponent?: 'RadioButton' | 'IconChevron';
  headline?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  badge?: boolean | number;
  extra?: React.ReactNode;
  style?: 'divider' | 'bordered';
}

const Row: React.FC<RowProps> = ({
  value,
  onSelect,
  defaultValue,
  disabled = false,
  rightComponent = 'RadioButton',
  headline,
  title,
  subtitle,
  description,
  badge,
  extra,
  style = 'divider',
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelect = (newValue: string) => {
    setSelectedValue(newValue);
    onSelect(newValue);
  };

  return (
    <TouchableOpacity
      style={[styles.row, style === 'divider' ? styles.dividerRow : styles.borderedRow, disabled && styles.disabledRow]}
      onPress={() => handleSelect(value)}
      disabled={disabled}
      accessibilityLabel={""}
      testID={`row-${value}`}
    >
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.leftContent}>
            <Text>Icono</Text>
          </View>
          <View style={styles.rightContent}>
          {headline !== undefined &&  <Tag children={headline} type='promo' /> }
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          {rightComponent === 'RadioButton' && (
            <Radio
              label=""
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  dividerRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  borderedRow: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  disabledRow: {
    opacity: 0.5, // Aplica opacidad cuando está deshabilitado
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  rightContent: {
    flex: 1,
    marginLeft: 10,
  },
  rightContainer: {},
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  description: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Row;