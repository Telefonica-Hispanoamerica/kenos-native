import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextFieldBase from '../components/Input/TextFields/TextFieldBase/TextFieldBase';

export default {
  title: 'TextFieldBase',
  component: TextFieldBase,
} as ComponentMeta<typeof TextFieldBase>;

export const Basic: ComponentStory<typeof TextFieldBase> = args => (
    <></>
)

Basic.args = {
};

Basic.storyName = 'TextField'
