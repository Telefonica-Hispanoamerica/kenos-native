import React, {useState} from 'react';
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
import Row from '../../ListRow/ListRow';
import {FlatList} from 'react-native';
import {ButtonLayout} from '../../LayoutButton';
import {PlanCardProps} from './PlanCard.Types';
import {Colors} from '../../../skins/colors';

export const PlanCard: React.FC<PlanCardProps> = props => {
  const {
    borderRadius = 16,
    linkButtonMoreDetails,
    linkButtonHideDetails,
    dataRowList,
    header,
    tagLabel,
    pricing,
    buttonPrimary,
    buttonTypePrimary,
    buttonSecondary,
    buttonTypeSecondary,
    featureTag,
    viewApps,
    listOffers,
  } = props;
  const {skin} = useTheme();
  const {borderSelected, border} = skin.colors;
  const [isExpanded, setIsExpanded] = useState(false);
  const colorBase = featureTag.color?.startsWith('#')
    ? featureTag.color
    : skin.colors[featureTag?.color as keyof Colors];
  const colorDefault = featureTag?.text ? borderSelected : border;
  const size = featureTag?.text ? 2 : 1;

  const handleExpandIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <FlatList
      data={[{key: 'content', content: 'yourContent'}]}
      renderItem={() => (
        <Boxed
          borderRadius={borderRadius}
          borderColor={colorBase ?? colorDefault}
          borderWidth={size}>
          {featureTag?.text && <FeatureTag {...featureTag} />}

          <Header {...header} />
          <TagLabel {...tagLabel} />
          <Pricing {...pricing} />
          {viewApps && <View style={{margin: 10}}>{viewApps}</View>}
          <ButtonLayout
            alignment="column-reverse"
            primaryButton={
              <Button
                {...buttonPrimary}
                style={{
                  backgroundColor: colorBase ?? colorDefault,
                  borderColor: colorBase ?? colorDefault,
                }}
                type={buttonTypePrimary}
              />
            }
            secondaryButton={
              buttonSecondary && (
                <Button {...buttonSecondary} type={buttonTypeSecondary} />
              )
            }
            buttonLink={
              linkButtonMoreDetails &&
              (!isExpanded ? (
                <Button
                  type={'link'}
                  rightIcon={IconChevronDownRegular}
                  onPress={handleExpandIconClick}>
                  {linkButtonMoreDetails}
                </Button>
              ) : null)
            }
          />
          {listOffers && <View style={{margin: 10}}>{listOffers}</View>}
          {isExpanded ? (
            <View>
              <FlatList
                data={dataRowList}
                renderItem={({item}) => <Row {...item} />}
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
