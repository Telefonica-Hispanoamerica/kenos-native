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
    <SocialMediaButton icon='google'/> 
  </View>
);

/* Basic.args = {
  children:'algo',
  localPhoto:false,
  src:iconImg,
}; */
 
Basic.storyName = 'SocialMediaButton'