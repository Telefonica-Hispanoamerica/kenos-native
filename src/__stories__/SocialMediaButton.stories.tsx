import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SocialMediaButton } from '../components/SocialMediaButton/SocialMediaButton';
import { View } from 'react-native';

export default {
  title: 'SocialMediaButton',
  component: SocialMediaButton,
} as ComponentMeta<typeof SocialMediaButton>;


export const Basic: ComponentStory<typeof SocialMediaButton> = args => (
  <View>
    <SocialMediaButton {...args} />
  </View>
);

Basic.args = {
  text: 'Entrar con Red Social',
  small: false,
  rounded: false
};


Basic.storyName = 'SocialMediaButton'