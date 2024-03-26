import React from 'react';
import {View} from 'react-native';
import {styles} from './SheetHeaderShared.css';
import {SheetHeaderSharedProps} from './SheetHeaderShared.Types';
import {IconProps} from '../../../utils';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {Text2, Text4} from '../../Text/Text';
import {IconButton} from '../../Buttons';

export const SheetHeaderShared: React.FC<SheetHeaderSharedProps> = ({
  icon,
  title,
  subtitle,
  rightAction,
}) => {
  const {skin} = useTheme();
  const {
    brand,
    textSecondary,
    brandLow,
    appBarBackground,
    neutralHigh,
    textPrimary,
  } = skin.colors;

  const getIconComponent = () => {
    if (!icon) return;
    const Icon = icon as React.ComponentType<IconProps>;
    const iconComponent: JSX.Element = <Icon size={24} color={brand} />;
    return iconComponent;
  };

  const leftIconStyles = {
    ...styles.leftIcon,
    backgroundColor: brandLow,
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContain}>
        {icon && <View style={leftIconStyles}>{getIconComponent()}</View>}
        <View>
          <Text4 color={textPrimary} medium>
            {title}
          </Text4>
          {subtitle && <Text2 color={textSecondary}>{subtitle}</Text2>}
        </View>
      </View>
      <View style={styles.accionIcon}>
        {rightAction && (
          <IconButton
            icon={rightAction?.icon}
            type={'light'}
            sizeCircle={28}
            iconColor={neutralHigh}
            onPress={rightAction?.onPress}
            styles={{backgroundColor: appBarBackground}}
          />
        )}
      </View>
    </View>
  );
};
