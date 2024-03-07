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

const DataRow = [
  {
    id: '1',
    value: 'Value1',
    defaultValue: 'DefaultValue1',
    title: 'Title1',
    subtitle: 'Subtitle1',
    description: 'Description1',
    rightComponent: 'IconChevron',
    leftComponent: <IconButton icon={IconLightningRegular} />,
  },
  {
    id: '2',
    value: 'Value2',
    defaultValue: 'DefaultValue2',
    title: 'Title2',
    subtitle: 'Subtitle2',
    description: 'Description2',
    rightComponent: 'IconChevron',
    leftComponent: <IconButton icon={IconLightningRegular} />,
  },
  {
    id: '3',
    value: 'Value2',
    defaultValue: 'DefaultValue2',
    title: 'Title2',
    subtitle: 'Subtitle2',
    description: 'Description2',
    rightComponent: 'IconChevron',
    leftComponent: <IconButton icon={IconLightningRegular} />,
  },
  {
    id: '4',
    value: 'Value2',
    defaultValue: 'DefaultValue2',
    title: 'Title2',
    subtitle: 'Subtitle2',
    description: 'Description2',
    rightComponent: 'IconChevron',
    leftComponent: <IconButton icon={IconLightningRegular} />,
  },
];

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
    <>
      <Boxed
        borderRadius={16}
        borderColor={borderSelected}
        borderWidth={2}
        dataAttributes={{'component-name': 'DataCard', ...dataAttributes}}>
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
            <FlatList
              data={DataRow}
              renderItem={({item}) => (
                <Row
                  value={item.value}
                  defaultValue={item.defaultValue}
                  onSelect={value => console.log('Selected value:', value)}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  rightComponent={item.rightComponent}
                  leftComponent={item.leftComponent}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
        ) : null}

        {isExpanded ? (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              padding: 8,
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
    </>
  );
};
