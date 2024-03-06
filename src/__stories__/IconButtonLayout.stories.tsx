import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {IconButtonLayout} from '../components/LayoutButton';
import {View, Alert} from 'react-native';
import {
  IconLightningRegular,
  IconFileImageRegular,
  IconChipSimCardRegular,
  IconFolderRegular,
  IconRobotRegular,
} from '../kenos-icons';

export default {
  title: 'IconButtonLayout',
  component: IconButtonLayout,
} as ComponentMeta<typeof IconButtonLayout>;

export const Basic: ComponentStory<typeof IconButtonLayout> = args => {
  const onPress = () => Alert.alert('Clicked!', 'Clicked successfully!');
  const buttonsOptions = [
    {text: 'text1', icon: IconChipSimCardRegular, onPress: onPress},
    {text: 'text2', icon: IconFileImageRegular, onPress: onPress},
    {text: 'text3', icon: IconLightningRegular, onPress: onPress},
    {text: 'text4', icon: IconFolderRegular, onPress: onPress},
    {text: 'text5', icon: IconRobotRegular, onPress: onPress},
    {text: 'text6', icon: IconRobotRegular, onPress: onPress},
    {text: 'text7', icon: IconRobotRegular, onPress: onPress},
  ];

  return (
    <View>
      <IconButtonLayout {...args} buttonsOptions={buttonsOptions} />
    </View>
  );
};

Basic.args = {
  inverse: false,
  medium: false,
  highlight: false,
  light: false,
  dark: false,
};

Basic.storyName = 'IconButtonLayout';
