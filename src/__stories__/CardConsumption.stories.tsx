import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {CardConsumption} from '../components/Cards/CardConsumption/CardConsumption';

export default {
  title: 'CardConsumption',
  component: CardConsumption,
} as ComponentMeta<typeof CardConsumption>;

export const Basic: ComponentStory<typeof CardConsumption> = args => {
  return (
    <ScrollView horizontal={true}>
      <View style={{flexDirection: 'row', height: 'auto'}}>
        <CardConsumption
          {...args}
          internalSubtitle="de 0 GB"
          subtitle="SubTitle"
          title="Title"
          internalTitle="0 GB"
          type="Default"
          description="Expiration date"
        />
        <CardConsumption
          subtitle="SubTitle"
          title="Title"
          internalTitle="Unlimited"
          description="Expiration date"
          type='Unlimited'
        />
        <CardConsumption
          type="SeeMore"
          title="See more"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

Basic.args = {
  percentage: 50,
};

Basic.storyName = 'CardConsumption';
