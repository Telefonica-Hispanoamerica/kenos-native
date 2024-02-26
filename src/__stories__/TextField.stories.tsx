import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import TextField from '../components/Input/TextFields/TextField/TextField';
import { View } from 'react-native';

export default {
  title: 'TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = args => (
  <View style={{marginVertical: 20, display: 'flex', alignItems: 'center',}}>
    <TextField name="text" label="Nombre"></TextField>
  </View>
  
);

Basic.args = {};

Basic.storyName = 'TextField';
