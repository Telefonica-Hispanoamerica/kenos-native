// crea el story para el componente DataCard

import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {View} from 'react-native';
import {Button, Placeholder} from '../components';
import {MediaCard} from '../components/Cards/MediaCard/MediaCard';
import Image from '../components/Primitives/Image/Image';

const VIDEO_SRC =
  'https://fr-cert1-es.mytelco.io/2O4-xBJqiMlAfLkseq8RkXs_mv2ACV7Hnt20HqXxNl-mK7KLI3M2dAw';

const IMAGE_SRC =
'https://images.unsplash.com/photo-1575903013621-1387ce8caa74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';

// const IMAGE_SRC =
//   'https://images.unsplash.com/photo-157sdf5903013621dfdfdfdf-1387ce8caa74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fasdfadfGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';

export default {
  title: 'components/Cards/MediaCard',
  component: MediaCard,
} as ComponentMeta<typeof MediaCard>;

export const Basic: ComponentStory<typeof MediaCard> = args => {
  return (
    <>
      <View style={{flex: 1, padding: 10}}>
        <MediaCard {...args} />
      </View>
      {/* <View style={{flex: 1, padding: 10, backgroundColor: 'green'}}>
        <Image width="100%" height="100%" src={IMAGE_SRC} noBorderRadius={false} />
      </View> */}
    </>
  );
};

const ButtonComponent = () => {
  return <Button type="primary">Action</Button>;
};

const ButtonComponentLink = () => {
  return <Button type="danger">Action</Button>;
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
  media: (
    <Image aspectRatio="16:9" src={IMAGE_SRC} width="100%" height="100%" />
  ),
  // button: <Button type="primary">Action</Button>,
  // buttonLink: <Button type="primary">Link</Button>,
};

Basic.storyName = 'MediaCard';
