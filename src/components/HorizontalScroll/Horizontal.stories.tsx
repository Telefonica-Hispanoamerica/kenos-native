import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from 'react-native';
import HorizontalScroll from './Horizontal-scroll';
import Placeholder from '../Placerholder/Placeholder';
import Inline from '../Inline/Inline';

export default {
  title: 'layout/Horizontal',
  component: HorizontalScroll,
} as ComponentMeta<typeof HorizontalScroll>;

export const Basic: ComponentStory<typeof HorizontalScroll> = () => (
  <View style={{gap: 16}}>
    <Placeholder />
    <HorizontalScroll noScrollbar={true}>
      <Inline space={16}>
        <Placeholder width={200} height={200} />
        <Placeholder width={200} height={200} />
        <Placeholder width={200} height={200} />
        <Placeholder width={200} height={200} />
      </Inline>
    </HorizontalScroll>
    <Placeholder />
  </View>
);

Basic.storyName = 'HorizontalScroll';
