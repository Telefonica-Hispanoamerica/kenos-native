import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from '../components/Icon Button/IconButton';
import { IconButtonLayout } from '../components/LayoutButton/IconButtonLayout';
import { ScrollView, Text, View } from 'react-native';
import { IconLightningRegular } from '../kenos-icons';

export default {
  title: 'ButtonLayout',
  component: IconButtonLayout,
} as ComponentMeta<typeof IconButtonLayout>;


export const Basic: ComponentStory<typeof IconButtonLayout> = args => {


  return (
    <>
      <View>
        <IconButtonLayout {...args} icon={IconLightningRegular} />
      </View>
    </>

  )

};

Basic.args = {
  inverse: false,
  medium: false,
  highlight: false,
};

Basic.storyName = 'IconButtonLayout'