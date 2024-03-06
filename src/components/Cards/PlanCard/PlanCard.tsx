import React, {useState} from 'react';
import {
  IconChevronDownRegular,
  IconChevronUpRegular,
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
import {Button, IconButton} from '../../Buttons';
import {Text, View} from 'react-native';
import Row from '../../ListRow/ListRow';
import {FlatList} from 'react-native';
import {ScrollView} from 'react-native';
import {ButtonLayout} from '../../LayoutButton';
// import {ListViewBase} from 'react-native';

// TODO: crear un type que incluya un objeto con los datos de la tarjeta

export const PlanCard: React.FC<DataCardProps> = ({dataAttributes}) => {
  const pricingData: PricingProps = {
    offerDescription: 'Offer Description',
    price: '$2.199',
    priceDescription: 'x month',
    duration: 'x12 month.',
    durationDescription: 'Offer description',
    type: 'vertical',
  };
  const {skin} = useTheme();
  const {borderSelected} = skin.colors;
  const [isExpanded, setIsExpanded] = useState(false); //defaultExpanded ? true :

  const handleExpandIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ScrollView>
      <Boxed
        borderRadius={16}
        borderColor={borderSelected}
        borderWidth={2}
        // styles={styles.boxed}
        dataAttributes={{'component-name': 'DataCard', ...dataAttributes}}
        // width="100%"
      >
        <FeatureTag icon={IconLightningRegular} text="¡El plan más top!" />
        <Header
          name="Plan Name"
          quantity="32 GB"
          duration="x12 month."
          description="Luego 16 GB"
          price="$18.893"
          priceDuration="x12 month."
          priceDescription="Luego $24.990"
          type="vertical"
          icon={IconQuestionRegular}
        />

        <TagLabel
          type="promo"
          text="30% Dcto. x 3 meses"
          icon={IconOfferPercentFilled}
        />

        <Pricing {...pricingData} />

        <ButtonLayout
          alignment="column-reverse"
          primaryButton={
            <Button
              type="primary"
              rounded
              onPress={() => {
                console.log('Click');
              }}>
              Primary button
            </Button>
          }
          secondaryButton={
            <Button
              type="secondary"
              rounded
              onPress={() => {
                console.log('Click');
              }}>
              Secondary button
            </Button>
          }
          buttonLink={
            !isExpanded ? (
              <Button
                type={'link'}
                rightIcon={IconChevronDownRegular}
                onPress={handleExpandIconClick}>
                More details
              </Button>
            ) : null
          }
        />

        {isExpanded ? (
          <View>
            <Row
              value="1"
              defaultValue="1"
              onSelect={value => console.log('Selected value:', value)}
              title="Title"
              subtitle="Subtitle"
              description="Description"
              rightComponent="Without"
              leftComponent={<IconButton icon={IconLightningRegular} />}
            />
            <Row
              value="1"
              defaultValue="1"
              onSelect={value => console.log('Selected value:', value)}
              title="Title"
              subtitle="Subtitle"
              description="Description"
              rightComponent="Without"
              leftComponent={<IconButton icon={IconLightningRegular} />}
            />
            <Row
              value="1"
              defaultValue="1"
              onSelect={value => console.log('Selected value:', value)}
              title="Title"
              subtitle="Subtitle"
              description="Description"
              rightComponent="Without"
              leftComponent={<IconButton icon={IconLightningRegular} />}
            />
            <Row
              value="1"
              defaultValue="1"
              onSelect={value => console.log('Selected value:', value)}
              title="Title"
              subtitle="Subtitle"
              description="Description"
              rightComponent="Without"
              leftComponent={<IconButton icon={IconLightningRegular} />}
            />
            <Row
              value="1"
              defaultValue="1"
              onSelect={value => console.log('Selected value:', value)}
              title="Title"
              subtitle="Subtitle"
              description="Description"
              rightComponent="Without"
              leftComponent={<IconButton icon={IconLightningRegular} />}
            />
          </View>
        ) : null}

        {isExpanded ? (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              padding: 10,
              alignItems: 'center',
            }}>
            <Button
              type={'link'}
              rightIcon={IconChevronUpRegular}
              onPress={handleExpandIconClick}>
              Hide details
            </Button>
          </View>
        ) : null}
      </Boxed>
    </ScrollView>
  );
};
