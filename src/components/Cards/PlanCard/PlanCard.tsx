import React, {useMemo, useState} from 'react';
import {
  IconChevronDownRegular,
  IconChevronUpRegular,
} from '../../../kenos-icons';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {Boxed} from '../../Primitives/Boxed/Boxed';
import FeatureTag from './FeatureTag/FeatureTag';
import Header, {HeaderProps} from './Header/Header';
import Pricing, {PricingProps} from './Pricing/Pricing';
import TagLabel, {TagLabelProps} from './TagLabel/TagLabel';
import {Button} from '../../Buttons';
import {View} from 'react-native';
import Row, {RowProps} from '../../ListRow/ListRow';
import {FlatList} from 'react-native';
import {ButtonLayout} from '../../LayoutButton';
import {IconProps} from '../../../utils';
import {ButtonProps, ButtonType} from '../../Buttons/Button/Button.Types';

export type PlanCardProps = {
  borderRadius: 8 | 16 | undefined;
  namePrimaryButton: string;
  nameSecondaryButton: string;
  linkButtonMoreDetails: string;
  linkButtonHideDetails: string;
  dataRowList: Array<RowProps>;
  iconFeatureTag: React.ComponentType<IconProps>;
  textFeatureTag: string;
  header: HeaderProps;
  tagLabel: TagLabelProps;
  pricing: PricingProps;
  buttonPrimary: ButtonProps;
  buttonTypePrimary: ButtonType;
  buttonSecondary: ButtonProps;
  buttonTypeSecondary: ButtonType;
};

export const PlanCard: React.FC<PlanCardProps> = props => {
  const {
    borderRadius = 16,
    linkButtonMoreDetails,
    linkButtonHideDetails,
    dataRowList,
    iconFeatureTag,
    textFeatureTag,
    header,
    tagLabel,
    pricing,
    buttonPrimary,
    buttonTypePrimary,
    buttonSecondary,
    buttonTypeSecondary,
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

          <Header {...header} />
          <TagLabel {...tagLabel} />
          <Pricing {...pricing} />
          <ButtonLayout
            alignment="column-reverse"
            primaryButton={
              <Button {...buttonPrimary} type={buttonTypePrimary} />
            }
            secondaryButton={
              <Button {...buttonSecondary} type={buttonTypeSecondary} />
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
