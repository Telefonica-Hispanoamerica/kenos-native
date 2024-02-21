import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Tabs from '../components/Tabs/Tabs';
import {View} from 'react-native';
import {
  IconBoxFilled,
  IconInternetRegular,
  IconLightningRegular,
  IconOutgoingCallRegular,
  IconPlaneRegular,
} from '../kenos-icons';
import {Text3} from '../components';

export default {
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Basic: ComponentStory<typeof Tabs> = args => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <View
        style={{
          marginVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
          rowGap: 8,
        }}>
        <Text3 medium>Primary Tab</Text3>
        <Tabs
          variant="primary"
          scrollable
          background
          
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          tabs={['Tab 1', 'Tab 2', 'Tab 3', 'Tab 3'].map(text => ({
            text,
            icon: <IconLightningRegular></IconLightningRegular>,
          }))}></Tabs>
      </View>

      <View
        style={{
          marginVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
          rowGap: 8,
        }}>
        <Text3 medium>Secondary Tab</Text3>
        <Tabs
        scrollable
          variant="secondary"
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          tabs={['Tab 1', 'Tab 2', 'Tab 3', 'Tab 3'].map(text => ({
            text,
            icon: <IconLightningRegular></IconLightningRegular>,
          }))}></Tabs>
      </View>

      <View
        style={{
          marginVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
          rowGap: 8,
        }}>
        <Text3 medium>Arrow Tab</Text3>
        <Tabs
          variant="arrow"
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          tabs={[
            {text: 'Combos', icon: <IconBoxFilled />},
            {text: 'Navega', icon: <IconInternetRegular />},
            {text: 'Habla', icon: <IconOutgoingCallRegular />},
            {text: 'Roaming', icon: <IconPlaneRegular />},
          ]}
        />
      </View>
    </>
  );
};

Basic.storyName = 'Tabs';
