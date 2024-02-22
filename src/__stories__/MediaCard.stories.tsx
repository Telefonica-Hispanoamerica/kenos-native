import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ScrollView, View } from 'react-native';
import { Placeholder, Text3 } from '../components';
import { MediaCard } from '../components/Cards/MediaCard/MediaCard';
import Image from '../components/Primitives/Image/Image';
import Video from '../components/Primitives/Video/Video';


const VIDEO_SRC =
  'https://fr-cert1-es.mytelco.io/2O4-xBJqiMlAfLkseq8RkXs_mv2ACV7Hnt20HqXxNl-mK7KLI3M2dAw';

const IMAGE_SRC =
  'https://images.unsplash.com/photo-1575903013621-1387ce8caa74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';

const IMAGE_SRC_2 =
  'https://s3-alpha-sig.figma.com/img/908a/f0fa/5d65525af9a72156bf2533d449884c7b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CM9byo7OUC6Zz1AnOcoBrl0yc0Byo9MhA8S5q~LTDz9ihXFKGvg3ZJqIMmviS4dNJbyaHmytA4lJheNje9XIiZAtvtkooGNE6fh~o2hqVPp-zAUBe6FD7zYgHkPDqGy9D5Jltd-4wEccz~l19pQA~eGfFnHoz9iyBKvoCVk2Lj1jCl1aSXXMfsCRfeP96CglUmjFVt1qc~tEOanMcxEIYJp0xcM8lmJ3dwUU7hv8d~EG1sJpQMc6U216S4FVHSgiaeZtJSuTj4W9mXydPhPgBHyAWzaPKUQ7EPq~j0iv6dTg9EiF7Pgz~ceBhQgIYa94bZXt5bgxXVroZAMybzT5iQ__';

export default {
  title: 'components/Cards/MediaCard',
  component: MediaCard,
} as ComponentMeta<typeof MediaCard>;

export const Basic: ComponentStory<typeof MediaCard> = args => {
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
          }></MediaCard>
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
              resizeMode="contain"></Image>
          }
        />
      </View>
    </ScrollView>
  );
};
Basic.args = {
  headline: 'Headline',
  pretitle: 'Pretitle',
  title: 'Title',
  subtitle: 'Subtitle',
  description: 'This is a description for the card',
  extra: <Placeholder></Placeholder>,
  'aria-label': 'aria-label',
  onClose: undefined,
  media: <Image src={IMAGE_SRC} width="100%" height={150} resizeMode="cover" />,
};

Basic.storyName = 'MediaCard';
