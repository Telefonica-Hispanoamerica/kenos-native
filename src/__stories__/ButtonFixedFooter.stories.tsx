import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { View } from 'react-native';
import { ButtonFixedFooter } from '../components/LayoutButton/ButtonFixedFooter';

export default {
  title: 'ButtonFixedFooterLayout',
  component: ButtonFixedFooter,
} as ComponentMeta<typeof ButtonFixedFooter>;


export const Basic: ComponentStory<typeof ButtonFixedFooter> = args => {
  
  return (
      <View>
        <ButtonFixedFooter {...args} />
      </View>
  )

};

Basic.args = {
  children:'button primary',
  primary:true,
  secondary:false,
  addLink:false,
  inverse: false,
  medium: false,
  highlight: false,
  light: false
};

Basic.storyName = 'ButtonFixedFooterLayout'