/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ScrollView, View} from 'react-native';
import {Circle, IconButton, Placeholder, Text3} from '../components';
import Image from '../components/Primitives/Image/Image';
import {DataCard, MediaCard, PlanCard} from '../components/Cards';
import Video from '../components/Primitives/Video/Video';
import {
  IconLightningRegular,
  IconOfferPercentFilled,
  IconQuestionRegular,
} from '../kenos-icons';

//#region DataCard

export default {
  title: 'DataCard',
  component: DataCard,
} as ComponentMeta<typeof DataCard>;

export const Basic: ComponentStory<typeof DataCard> = args => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <DataCard {...args} />
    </View>
  );
};

Basic.storyName = 'DataCard';
Basic.args = {
  icon: <Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />,
  headline: 'Headline',
  pretitle: 'Pretitle',
  title: 'Title',
  subtitle: 'Subtitle',
  description: 'This is a description for the card',
  extra: <Placeholder />,
  'aria-label': 'aria-label',
  onClose: undefined,

  // button: <Button type="primary">Action</Button>,
  // buttonLink: <Button type="primary">Link</Button>,
};

//#endregion DataCard

//#region MediaCard

const VIDEO_SRC =
  'https://fr-cert1-es.mytelco.io/2O4-xBJqiMlAfLkseq8RkXs_mv2ACV7Hnt20HqXxNl-mK7KLI3M2dAw';

const IMAGE_SRC =
  'https://images.unsplash.com/photo-1575903013621-1387ce8caa74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';

const IMAGE_SRC_2 =
  'https://s3-alpha-sig.figma.com/img/908a/f0fa/5d65525af9a72156bf2533d449884c7b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CM9byo7OUC6Zz1AnOcoBrl0yc0Byo9MhA8S5q~LTDz9ihXFKGvg3ZJqIMmviS4dNJbyaHmytA4lJheNje9XIiZAtvtkooGNE6fh~o2hqVPp-zAUBe6FD7zYgHkPDqGy9D5Jltd-4wEccz~l19pQA~eGfFnHoz9iyBKvoCVk2Lj1jCl1aSXXMfsCRfeP96CglUmjFVt1qc~tEOanMcxEIYJp0xcM8lmJ3dwUU7hv8d~EG1sJpQMc6U216S4FVHSgiaeZtJSuTj4W9mXydPhPgBHyAWzaPKUQ7EPq~j0iv6dTg9EiF7Pgz~ceBhQgIYa94bZXt5bgxXVroZAMybzT5iQ__';

export const Media_Card: ComponentStory<typeof MediaCard> = args => {
  return (
    <ScrollView style={{flex: 1, padding: 10}}>
      <View style={{height: 500}}>
        <MediaCard {...args} />
      </View>
      <View style={{height: 500, paddingTop: 10}}>
        <MediaCard
          {...args}
          media={
            <Video
              aspectRatio="16:9"
              src={VIDEO_SRC}
              width="100%"
              height="100%"
              autoPlay={true}
            />
          }
        />
      </View>
      <View style={{height: 200, paddingTop: 10, marginBottom: 200}}>
        <MediaCard
          extra={
            <View
              style={{
                height: 100,
                marginTop: 10,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Text3>Descripción de la Card en extra prop</Text3>
            </View>
          }
          media={
            <Image
              src={IMAGE_SRC_2}
              width="100%"
              height={100}
              resizeMode="contain"
            />
          }
        />
      </View>
    </ScrollView>
  );
};

Media_Card.storyName = 'Media Card';
Media_Card.args = {
  headline: 'Headline',
  pretitle: 'Pretitle',
  title: 'Title',
  subtitle: 'Subtitle',
  description: 'This is a description for the card',
  extra: <Placeholder />,
  'aria-label': 'aria-label',
  onClose: undefined,
  media: <Image src={IMAGE_SRC} width="100%" height={150} resizeMode="cover" />,
};

//#endregion MediaCard

//#region PlanCard

export const Plan_Card: ComponentStory<typeof PlanCard> = args => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <PlanCard {...args} />
    </View>
  );
};

Plan_Card.storyName = 'Plan Card';

Plan_Card.args = {
  borderRadius: 16,
  buttonPrimary: {
    onPress: () => {},
    children: 'primary',
    rounded: true,
  },
  buttonTypePrimary: 'primary',
  buttonSecondary: {
    onPress: () => {},
    children: 'secondary',
    rounded: true,
  },
  buttonTypeSecondary: 'secondary',
  linkButtonMoreDetails: 'MoreDetails',
  linkButtonHideDetails: 'HideDetails',
  featureTag: {
    text: '¡El plan más top!',
    icon: IconLightningRegular,
  },
  header: {
    name: 'Plan Name',
    quantity: '32 GB',
    duration: 'x12 month.',
    description: 'Luego 16 GB',
    price: '$18.893',
    priceDuration: 'x12 month.',
    priceDescription: 'Luego $24.990',
    type: 'vertical',
    icon: IconQuestionRegular,
  },
  tagLabel: {
    type: 'promo',
    text: '30% Dcto. x 3 meses',
    icon: IconOfferPercentFilled,
  },
  pricing: {
    offerDescription: 'Offer Description',
    price: '$2.199',
    priceDescription: 'x month',
    duration: 'x12 month.',
    durationDescription: 'Offer description',
    type: 'vertical',
  },
  dataRowList: [
    {
      id: '1',
      value: 'Value1',
      defaultValue: 'DefaultValue1',
      title: 'Title1',
      subtitle: 'Subtitle1',
      description: 'Description1',
      rightComponent: 'Without',
      onSelect: () => {},
      leftComponent: <IconButton icon={IconLightningRegular} />,
    },
    {
      id: '2',
      value: 'Value2',
      defaultValue: 'DefaultValue2',
      title: 'Title2',
      subtitle: 'Subtitle2',
      description: 'Description2',
      rightComponent: 'Without',
      onSelect: () => {},
      leftComponent: <IconButton icon={IconLightningRegular} />,
    },
    {
      id: '3',
      value: 'Value2',
      defaultValue: 'DefaultValue2',
      title: 'Title2',
      subtitle: 'Subtitle2',
      description: 'Description2',
      rightComponent: 'Without',
      onSelect: () => {},
      leftComponent: <IconButton icon={IconLightningRegular} />,
    },
    {
      id: '4',
      value: 'Value2',
      defaultValue: 'DefaultValue2',
      title: 'Title2',
      subtitle: 'Subtitle2',
      description: 'Description2',
      rightComponent: 'Without',
      onSelect: () => {},
      leftComponent: <IconButton icon={IconLightningRegular} />,
    },
  ],
};

//#endregion PlanCard
