import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextField from '../components/Input/TextFields/TextField/TextField';

export default {
  title: 'TextFieldBase',
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = args => (
    <TextField/>
)

Basic.args = {
};

Basic.storyName = 'TextField'
