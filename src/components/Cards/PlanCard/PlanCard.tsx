import React from 'react';
import {
  IconLightningRegular,
  IconOfferPercentFilled,
  IconQuestionRegular,
} from '../../../kenos-icons';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {Boxed} from '../../Primitives/Boxed/Boxed';
import {DataCardProps} from '../Cards.Types';
import {styles} from '../Cards.css';
import FeatureTag from './FeatureTag/FeatureTag';
import Header from './Header/Header';
import Pricing, {PricingProps} from './Pricing/Pricing';
import TagLabel from './TagLabel/TagLabel';
import {Button} from '../../Buttons';
import {View} from 'react-native';

// TODO: crear un type que incluya un objeto con los datos de la tarjeta

export const PlanCard: React.FC<DataCardProps> = ({dataAttributes}) => {
  const {skin} = useTheme();
  const {borderSelected} = skin.colors;

  const pricingData: PricingProps = {
    offerDescription: 'Offer Description',
    price: '$2.199',
    priceDescription: 'x month',
    duration: 'x12 month.',
    durationDescription: 'Offer description',
    type: 'vertical',
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
      <FeatureTag
        icon={IconLightningRegular}
        text="¡El plan más top!"></FeatureTag>

      <Header
        name="Plan Name"
        quantity="32 GB"
        duration="x12 month."
        description="Luego 16 GB"
        price="$18.893"
        priceDuration="x12 month."
        priceDescription="Luego $24.990"
        type="vertical"
        icon={IconQuestionRegular}></Header>

      <TagLabel
        text="30% Dcto. x 3 meses"
        icon={IconOfferPercentFilled}></TagLabel>

      <Pricing {...pricingData}></Pricing>

      {/* TODO: Validar si es necesario crear un ButtonGroup ya que es muy común este diseño de botones en vertical */}

      <View style={{padding: 10}}>
        <Button
          type="primary"
          rounded
          onPress={() => {
            console.log('Click');
          }}>
          Primary button
        </Button>
      </View>

      {/* TODO: revisar el border del button type secondary no coincide con el diseño de figma */}

      <View style={{padding: 10}}>
        <Button
          type="secondary"
          rounded
          onPress={() => {
            console.log('Click');
          }}>
          Secondary button
        </Button>
      </View>
    </Boxed>
  );
};
