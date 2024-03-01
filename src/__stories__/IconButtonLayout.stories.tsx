import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButtonLayout } from '../components/LayoutButton/IconButtonLayout';
import { View, Alert } from 'react-native';
import { IconLightningRegular, IconFileImageRegular, IconChipSimCardRegular, IconFolderRegular, IconRobotRegular } from '../kenos-icons';


export default {
  title: 'ButtonLayout',
  component: IconButtonLayout,
} as ComponentMeta<typeof IconButtonLayout>;


export const Basic: ComponentStory<typeof IconButtonLayout> = args => {

  const buttonsOptions = [{ text: 'text1', icon: IconChipSimCardRegular }, { text: 'text2', icon: IconFileImageRegular }, { text: 'text3', icon: IconLightningRegular }, { text: 'text4', icon: IconFolderRegular }, { text: 'text5', icon: IconRobotRegular }]
  const onPress = () => Alert.alert('Clicked!', 'Clicked successfully!');

  return (
    <View>
      <IconButtonLayout {...args} buttonsOptions={buttonsOptions} onPress={onPress} />
    </View>
  )

};

Basic.args = {
  inverse: false,
  medium: false,
  highlight: false,
  light: false,
  dark: false
};

Basic.storyName = 'IconButtonLayout'