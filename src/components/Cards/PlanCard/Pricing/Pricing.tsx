import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Text1, Text3, Text7} from '../../../Text/Text';
import {stylesPricing} from './Pricing.css';

export type PricingProps = {
  offerDescription?: string;
  price?: string;
  priceDescription?: string;
  duration?: string;
  durationDescription?: string;
  type?: 'vertical' | 'horizontal'; 
};

const Pricing = ({
  offerDescription,
  price,
  priceDescription,
  duration,
  durationDescription,
  type,
}: PricingProps) => {
  if (type === 'vertical')
    return (
      <View style={stylesPricing.verticalContainer}>
        <Text1 regular={true}>{offerDescription}</Text1>
        <View style={stylesPricing.verticalPrice}>
          <Text7 regular={true}>{price}</Text7>
          <Text3 regular={true}>{priceDescription}</Text3>
        </View>
        <View style={stylesPricing.verticalDuration}>
          <Text1 bold={true}>{duration}</Text1>
          <Text1 regular={true}>{durationDescription}</Text1>
        </View>
      </View>
    );

  if (type === 'horizontal')
    return (
      <View style={stylesPricing.horizontalContainer}>
        <View style={stylesPricing.horizontalPrice}>
          <Text7 regular={true}>{price}</Text7>
          <Text3 regular={true}>{priceDescription}</Text3>
        </View>
        <View style={stylesPricing.horizontalDuration}>
          <Text1 bold={true}>{duration}</Text1>
          <Text1 regular={true}>{durationDescription}</Text1>
        </View>
      </View>
    );

  return null;
};

export default Pricing;
