import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, Text1, Text2} from '../Text/Text';
import Radio from '../Radio/Radio';
import IconChevron from '../../icons/icon-chevron';
import Tag from '../Tag/Tag';
import {useTheme} from '../../utils/ThemeContextProvider';
import {getStylesRow} from './ListRow.css';
import Badge from '../Badge/Badge';
import {IconProps} from '../../utils';
import {Box} from '../../layout';

export interface RowProps {
  value: string;
  onSelect: (value: string) => void;
  defaultValue: string;
  disabled?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: 'RadioButton' | 'IconChevron' | 'Without';
  headline?: string;
  title?: string;
  subtitle?: string;
  description?: React.ReactNode; // Cambiado a componente React
  style?: 'divider' | 'bordered';
  numberBagdeLS?: number;
  priceLS?: number;
  iconLS?: React.ComponentType<IconProps>;
}

export const Row: React.FC<RowProps> = ({
  value,
  onSelect,
  defaultValue,
  disabled = false,
  leftComponent,
  rightComponent = 'RadioButton',
  headline,
  title,
  subtitle,
  description,
  style = 'divider',
  numberBagdeLS,
  priceLS,
  iconLS: IconLS,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const {skin, textPresets} = useTheme();
  const formatNumberPrice = (number: number) => {
    const numberConvert = number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$ ${numberConvert.toString()}`;
  };
  const styles = getStylesRow(skin.colors);
  const handleSelect = (newValue: string) => {
    setSelectedValue(newValue);
    onSelect(newValue);
  };

  return (
    <TouchableOpacity
      style={[
        styles.row,
        style === 'divider' ? styles.dividerRow : styles.borderedRow,
        disabled && styles.disabledRow,
      ]}
      onPress={() => handleSelect(value)}
      disabled={disabled}
      accessibilityLabel={''}
      testID={`row-${value}`}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.leftContent}>
            {leftComponent && <View>{leftComponent}</View>}
          </View>
          <View style={styles.rightContent}>
            {headline !== undefined && <Tag type="promo">{headline}</Tag>}
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

            {description && <Text>{description}</Text>}
          </View>
        </View>
        <View style={styles.listStructure}>
          {numberBagdeLS && <Badge value={numberBagdeLS}></Badge>}
          {priceLS && <Text1>{formatNumberPrice(priceLS)}</Text1>}
          {IconLS && (
            <Box paddingRight={4}>
              <IconLS color={skin.colors.controlActivated} size={24} />
            </Box>
          )}
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
          {rightComponent === 'Without' && null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
