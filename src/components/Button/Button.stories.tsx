// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {MyButton} from './Button';

export default {
  title: 'components/Buttons',
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

export const Basic: ComponentStory<typeof MyButton> = args => (
  <MyButton {...args} />
);

Basic.args = {
  text: 'Action1',
  onPress: () => alert('Pressed!'),
};
