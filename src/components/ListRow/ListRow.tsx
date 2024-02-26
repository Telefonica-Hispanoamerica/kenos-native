import React, { useState } from 'react';
import { TouchableOpacity, View} from 'react-native';
import { Text,Text2 } from '../Text/Text';
import Radio from '../Radio/Radio';
import IconChevron from '../../icons/icon-chevron';
import Tag from '../Tag/Tag';
import { useTheme } from '../../utils/ThemeContextProvider';
import { getStylesRow } from './ListRow.css';

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
  style?: 'divider' | 'bordered';
  icon?: React.ReactNode;
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
  style = 'divider',
  icon
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue); 
  const {skin,textPresets} = useTheme()

  const styles = getStylesRow(skin.colors)

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
          {icon && (
            <View >
              {icon}
            </View>
           )}
          </View>
          <View style={styles.rightContent}>
          {headline !== undefined &&  <Tag children={headline} type='promo' /> }
          <Text
            mobileSize={18}
            mobileLineHeight="24px"
            desktopSize={20}
            desktopLineHeight="28px"
            weight={textPresets.cardTitle.weight}
            as="h3">
             {title}
            </Text>
            <Text2 as="div" regular>
              {subtitle}
            </Text2>
            <Text2 as="div" regular>
              {description}
            </Text2>
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



export default Row;