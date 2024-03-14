import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {Donuts} from '../components/Donuts/Donuts';

export default {
  title: 'Donuts',
  component: Donuts,
} as ComponentMeta<typeof Donuts>;

export const Basic: ComponentStory<typeof Donuts> = args => {
  return (
    <ScrollView horizontal={true}>
      <View style={{flexDirection: 'row', height: 'auto'}}>
        <Donuts
          {...args}
          consumptionGB={0}
          subtitle="SubTitle"
          title="Title"
          totalGB={0}
          type="Default"
          expirationDate="Expiration date"
        />
        <Donuts
          subtitle="SubTitle"
          title="Title"
          type="Unlimited"
          expirationDate="Expiration date"
        />
        <Donuts type="See more" />
      </View>
    </ScrollView>
  );
};

Basic.args = {
  percentage:50
};

Basic.storyName = 'Donuts';
