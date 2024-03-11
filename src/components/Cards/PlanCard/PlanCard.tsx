import React, {useMemo, useState} from 'react';
import {
  IconChevronDownRegular,
  IconChevronUpRegular,
} from '../../../kenos-icons';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {Boxed} from '../../Primitives/Boxed/Boxed';
import FeatureTag from './FeatureTag/FeatureTag';
import Header from './Header/Header';
import Pricing from './Pricing/Pricing';
import TagLabel from './TagLabel/TagLabel';
import {Button} from '../../Buttons';
import {View} from 'react-native';
import Row, {RowProps} from '../../ListRow/ListRow';
import {FlatList} from 'react-native';
import {ButtonLayout} from '../../LayoutButton';
import {IconProps} from '../../../utils';
import {TagProps} from '../../Tag/Tag';

export type PlanCardProps = {
  borderRadius: number;
  namePrimaryButton: string;
  nameSecondaryButton: string;
  linkButtonMoreDetails: string;
  linkButtonHideDetails: string;
  dataRowList: Array<RowProps>;
  iconFeatureTag: React.ComponentType<IconProps>;
  textFeatureTag: string;
  name: string;
  quantity: string;
  duration: string;
  description: string;
  price: string;
  priceDuration: string;
  priceDescription: string;
  typeHeader: string;
  iconHeader: React.ComponentType<IconProps>;
  typeTagLabel: string;
  textTagLabel: string;
  iconTagLabel: React.ComponentType<IconProps>;
  offerDescription: string;
  pricePricing: string;
  priceDescriptionPricing: string;
  durationPricing: string;
  durationDescription: string;
  typePricing: string;
};

export const PlanCard: React.FC<PlanCardProps> = props => {
  const {
    borderRadius,
    namePrimaryButton,
    nameSecondaryButton,
    linkButtonMoreDetails,
    linkButtonHideDetails,
    dataRowList,
    iconFeatureTag,
    textFeatureTag,
    name,
    quantity,
    duration,
    description,
    price,
    priceDuration,
    priceDescription,
    typeHeader,
    iconHeader,
    typeTagLabel,
    textTagLabel,
    iconTagLabel,
    offerDescription,
    pricePricing,
    priceDescriptionPricing,
    durationPricing,
    durationDescription,
    typePricing,
  } = props;
  const {skin} = useTheme();
  const {borderSelected, border} = skin.colors;
  const [isExpanded, setIsExpanded] = useState(false);
  const [colorBorder, sizeBorder] = useMemo(() => {
    const color = textFeatureTag ? borderSelected : border;
    const size = textFeatureTag ? 2 : 1;
    return [color, size];
  }, [textFeatureTag, borderSelected, border]);

  const handleExpandIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <FlatList
      data={[{key: 'content', content: 'yourContent'}]}
      renderItem={() => (
        <Boxed
          borderRadius={borderRadius}
          borderColor={colorBorder}
          borderWidth={sizeBorder}>
          {textFeatureTag && (
            <FeatureTag icon={iconFeatureTag} text={textFeatureTag} />
          )}

          <Header
            name={name}
            quantity={quantity}
            duration={duration}
            description={description}
            price={price}
            priceDuration={priceDuration}
            priceDescription={priceDescription}
            type={typeHeader}
            icon={iconHeader}
          />
          <TagLabel
            type={typeTagLabel}
            text={textTagLabel}
            icon={iconTagLabel}
          />
          <Pricing
            offerDescription={offerDescription}
            price={pricePricing}
            priceDescription={priceDescriptionPricing}
            duration={durationPricing}
            durationDescription={durationDescription}
            type={typePricing}
          />
          <ButtonLayout
            alignment="column-reverse"
            primaryButton={
              <Button
                type="primary"
                rounded
                onPress={() => {
                  console.log('Click');
                }}>
                {namePrimaryButton}
              </Button>
            }
            secondaryButton={
              <Button
                type="secondary"
                rounded
                onPress={() => {
                  console.log('Click');
                }}>
                {nameSecondaryButton}
              </Button>
            }
            buttonLink={
              !isExpanded ? (
                <Button
                  type={'link'}
                  rightIcon={IconChevronDownRegular}
                  onPress={handleExpandIconClick}>
                  {linkButtonMoreDetails}
                </Button>
              ) : null
            }
          />
          {isExpanded ? (
            <View>
              <FlatList
                data={dataRowList}
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
                {linkButtonHideDetails}
              </Button>
            </View>
          ) : null}
        </Boxed>
      )}
      keyExtractor={item => item.key}
    />
  );
};
