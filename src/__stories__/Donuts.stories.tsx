import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { Donuts } from '../components/Donuts/Donuts';



export default {
  title: 'Donuts',
  component: Donuts,
} as ComponentMeta<typeof Donuts>;

export const Basic: ComponentStory<typeof Donuts> = args => {
  return (
    <View>
       <Donuts percentage={14} color='tomato' max={100} delay={0} radius={5} strokeWidth={10} duration={500} textColor='red'/>
    </View>
  );
};

Basic.args = {
  
};

Basic.storyName = 'Donuts';
