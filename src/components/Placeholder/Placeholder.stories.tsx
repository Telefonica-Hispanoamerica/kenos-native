import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Placeholder from './Placeholder';

export default {
  title: 'components/Primitives/Placeholder',
  component: Placeholder,
} as ComponentMeta<typeof Placeholder>;

export const Basic: ComponentStory<typeof Placeholder> = args => (
  <Placeholder {...args} />
);

Basic.args = {
  width: 200,
  height: 200,
};

Basic.storyName = 'Placeholder';
