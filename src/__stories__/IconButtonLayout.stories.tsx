import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from '../components/Icon Button/IconButton';
import { IconButtonLayout } from '../components/LayoutButton/IconButtonLayout';
import { ScrollView, Text, View } from 'react-native';
import { IconLightningRegular,IconFileImageRegular,IconChipSimCardRegular,IconFolderRegular,IconRobotRegular} from '../kenos-icons';


export default {
  title: 'ButtonLayout',
  component: IconButtonLayout,
} as ComponentMeta<typeof IconButtonLayout>;


export const Basic: ComponentStory<typeof IconButtonLayout> = args => {
  
  const buttonsOptions=[{text:'text1',icon:IconChipSimCardRegular},{text:'text2',icon:IconFileImageRegular},{text:'text3',icon:IconLightningRegular},{text:'text4',icon:IconFolderRegular},{text:'text5',icon:IconRobotRegular}]

  return (
    <>
      <View>
        <IconButtonLayout {...args} buttonsOptions={buttonsOptions}/>
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