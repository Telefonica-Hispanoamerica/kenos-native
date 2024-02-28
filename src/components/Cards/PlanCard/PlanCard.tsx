import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IconLightningRegular,
  IconOfferPercentFilled,
} from '../../../kenos-icons';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {Boxed} from '../../Primitives/Boxed/Boxed';
import Tag from '../../Tag/Tag';
import {Text1, Text2, Text3, Text7} from '../../Text/Text';
import {DataCardProps} from '../Cards.Types';
import {styles} from '../Cards.css';

type PricingProps = {
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
      <View style={{alignItems: 'center'}}>
        <Text1 regular={true}>{offerDescription}</Text1>
        <View style={{flexDirection: 'row'}}>
          <Text7 regular={true}>{price}</Text7>
          <Text3 regular={true}>{priceDescription}</Text3>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text1 bold={true}>{duration}</Text1>
          <Text1>{durationDescription}</Text1>
        </View>
      </View>
    );

  if (type === 'horizontal')
    return (
      <View style={{alignItems: 'center'}}>
        <View style={{flex: 1}}>
          <Text7 regular={true}>{price}</Text7>
        </View>
        <View style={{flex: 1}}></View>
        <Text1 regular>{offerDescription}</Text1>
        <Text7 regular>{price}</Text7>
        <View style={{flexDirection: 'row'}}>
          <Text1 bold>{duration}</Text1>
          <Text1>{durationDescription}</Text1>
        </View>
      </View>
    );

  return null;
};

export const PlanCard: React.FC<DataCardProps> = ({
  icon,
  headline,
  pretitle,
  pretitleLinesMax,
  title,
  titleLinesMax,
  subtitle,
  subtitleLinesMax,
  description,
  descriptionLinesMax,
  extra,
  button,
  buttonLink,
  dataAttributes,
  'aria-label': ariaLabel,
  onClose,
}) => {
  const {skin} = useTheme();
  const {
    backgroundBrandSecondary,
    backgroundBrand,
    textPrimaryInverse,
    borderSelected,
    inverse,
  } = skin.colors;

  const pricingData: PricingProps = {
    offerDescription: 'Offer Description',
    price: '$2.199 x month',
    duration: 'x12 month.',
    durationDescription: 'Offer description',
    type: 'horizontal',
  };

  return (
    <Boxed
      borderRadius={16}
      borderColor={borderSelected}
      borderWidth={2}
      styles={styles.boxed}
      dataAttributes={{'component-name': 'DataCard', ...dataAttributes}}
      width="100%"
      height="100%">
      <View
        style={{
          height: 28,
          backgroundColor: backgroundBrand,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', gap: 2}}>
          <IconLightningRegular color={inverse} size={16} />
          <Text2 medium color={inverse}>
            Featured tag
          </Text2>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          minHeight: 144,
          backgroundColor: backgroundBrandSecondary,
          padding: 16,
          paddingBottom: 24,
        }}>
        <View style={{gap: 4, alignItems: 'center'}}>
          <Text style={[stylesPlan.planName, {color: textPrimaryInverse}]}>
            Plan name
          </Text>
          <Text style={[stylesPlan.dataAmount, {color: textPrimaryInverse}]}>
            0 GB
          </Text>
          <Text
            style={[stylesPlan.offerDescription, {color: textPrimaryInverse}]}>
            x12 meses. Descripción de la oferta
          </Text>
        </View>
      </View>
      <View style={{flex: 2}}>
        <View style={stylesPlan.tagLabelContainer}>
          <Tag Icon={IconOfferPercentFilled} type="promo">
            30% Dcto. x 3 meses
          </Tag>
        </View>

        <Pricing {...pricingData}></Pricing>

        {/* <Button title="Botón principal" onPress={() => {}} />

        <Button title="Botón secundario" onPress={() => {}} color="grey" />

        <Button title="Más detalles" onPress={() => {}} color="blue" /> */}
      </View>
    </Boxed>
  );
};

const stylesPlan = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataAmount: {
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 32,
  },
  offerDescription: {
    // Agrega tus estilos aquí
    // ...
  },
  tagLabelContainer: {
    top: -15,
    alignSelf: 'center',
  },
  tagLabel: {
    fontSize: 14,
    color: 'white',
    // Agrega más estilos según sea necesario
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    // Agrega más estilos según sea necesario
  },
});
