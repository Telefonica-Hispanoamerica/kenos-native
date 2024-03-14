/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../../../utils/ThemeContextProvider';
import {IconProps} from '../../../../utils/types';
import {Text1, Text2, Text7} from '../../../Text/Text';

export type PositionTypeProps = 'vertical' | 'horizontal' | 'double';

export type HeaderProps = {
  name?: string;
  quantity: string;
  duration?: string;
  description?: string;
  price?: string;
  priceDescription?: string;
  priceDuration?: string;
  icon?: React.ComponentType<IconProps>;
  type: PositionTypeProps;
};

const Header = (props: HeaderProps) => {
  const {type} = props;
  const {skin} = useTheme();
  const {backgroundBrandSecondary, textPrimaryInverse, brand, divider} =
    skin.colors;

  const Icon = props.icon as React.ComponentType<IconProps>;
  const iconComponent: JSX.Element = <Icon size={16} color={brand} />;

  // TODO: separar en componentes HeaderVertical, HeaderHorizontal y HeaderDouble

  if (type === 'vertical') {
    return (
      <View
        style={[
          stylesHeader.container,
          {backgroundColor: backgroundBrandSecondary},
        ]}>
        {props.name || props.icon ? (
          <View style={{flexDirection: 'row'}}>
            {props.name && (
              <View style={{marginRight: 10, marginBottom: 5}}>
                <Text2 regular color={textPrimaryInverse}>
                  {props.name}
                </Text2>
              </View>
            )}
            {iconComponent && iconComponent}
          </View>
        ) : null}

        {props.quantity && (
          <Text7 regular color={textPrimaryInverse}>
            {props.quantity}
          </Text7>
        )}

        {props.duration || props.description ? (
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <View style={{marginRight: 5}}>
              <Text1 bold color={textPrimaryInverse}>
                {props.duration}
              </Text1>
            </View>
            <Text1 regular color={textPrimaryInverse}>
              {props.description}
            </Text1>
          </View>
        ) : null}
      </View>
    );
  }

  if (type === 'double') {
    return (
      <View
        style={[
          stylesHeader.doubleContainer,
          {backgroundColor: backgroundBrandSecondary},
        ]}>
        {props.name || props.icon ? (
          <View style={{flexDirection: 'row'}}>
            {props.name && (
              <View style={{marginRight: 10, marginBottom: 5}}>
                <Text2 regular color={textPrimaryInverse}>
                  {props.name}
                </Text2>
              </View>
            )}
            {iconComponent && iconComponent}
          </View>
        ) : null}
        <View style={stylesHeader.doubleContainerData}>
          <View style={[stylesHeader.doubleDuration, {borderColor: divider}]}>
            <Text7 regular color={textPrimaryInverse}>
              {props.quantity}
            </Text7>
            <Text1 bold color={textPrimaryInverse}>
              {props.duration}
            </Text1>
            <Text1 regular color={textPrimaryInverse}>
              {props.description}
            </Text1>
          </View>

          <View style={stylesHeader.doublePrice}>
            <Text7 regular color={textPrimaryInverse}>
              {props.price}
            </Text7>
            <Text1 bold color={textPrimaryInverse}>
              {props.priceDuration}
            </Text1>
            <Text1 regular color={textPrimaryInverse}>
              {props.priceDescription}
            </Text1>
          </View>
        </View>
      </View>
    );
  }

  return null;
};

export default Header;

const stylesHeader = StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: 120,
    padding: 16,
    paddingBottom: 24,
    width: '100%',
  },
  doubleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 145,
    padding: 16,
    paddingBottom: 24,
    width: '100%',
  },
  doubleContainerData: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
  },
  doublePrice: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  doubleDuration: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 10,
    borderRightWidth: 1,
  },
});
