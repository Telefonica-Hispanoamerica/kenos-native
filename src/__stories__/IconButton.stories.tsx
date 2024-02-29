import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';

import { IconButton } from '../components/Buttons/IconButton/IconButton';
import { IconButtonType } from '../components/Buttons/Buttons.Types';
import { IconComputerUserRegular } from '../kenos-icons';

const buttonTypes: Array<IconButtonType> = [
  'inverse',
  'light',
  'medium',
  'highlight',
  'lightBlank',
];

export default {
  title: 'components/IconButton',
  component: IconButton,
  argTypes: {
    type: {
      options: buttonTypes,
      control: {type: 'radio'},
    },
  },
} as ComponentMeta<typeof IconButton>;

export const Basic: ComponentStory<typeof IconButton> = args => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <View style={{flex: 1}}>
        <IconButton {...args} icon={IconComputerUserRegular} />
      </View>
      <View style={{flex: 2}}>
        {buttonTypes.map(type => (
          <View key={type}>
            <IconButton icon={IconComputerUserRegular} type={type} onPress={()=>{}}>
              {type}
            </IconButton>
          </View>
        ))}
      </View>
    </View>
  );
};

Basic.args = {
  children: 'Texto',
  type: 'light',
};

Basic.storyName = 'IconButton';
