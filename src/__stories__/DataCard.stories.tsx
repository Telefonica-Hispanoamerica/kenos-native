// crea el story para el componente DataCard

import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {DataCard} from '../components/Cards/DataCard/DataCard';
import {DataCardProps} from '../components/Cards/Card.Types';
import {Text, View} from 'react-native';
import {Button, Circle, Placeholder} from '../components';

export default {
  title: 'components/Cards/DataCard',
  component: DataCard,
} as ComponentMeta<typeof DataCard>;

export const Basic: ComponentStory<typeof DataCard> = args => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <DataCard {...args} />
    </View>
  );
};

const ButtonComponent = () => {
  return <Button type="primary">Action</Button>;
};

const ButtonComponentLink = () => {
  return <Button type="danger">Action</Button>;
};

Basic.args = {
  icon: <Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />,
  headline: 'Headline',
  pretitle: 'Pretitle',
  title: 'Title',
  subtitle: 'Subtitle',
  description: 'This is a description for the card',
  extra: <Placeholder></Placeholder>,
  'aria-label': 'aria-label',
  onClose: undefined,

  // button: <Button type="primary">Action</Button>,
  // buttonLink: <Button type="primary">Link</Button>,
};

Basic.storyName = 'DataCard';
