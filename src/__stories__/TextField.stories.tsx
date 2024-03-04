import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import TextField from '../components/Input/TextFields/TextField/TextField';
import {View} from 'react-native';
import {IconMusicFilled} from '../kenos-icons';

export default {
  title: 'TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = args => (
  <View
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <TextField {...args} endIcon={<IconMusicFilled />}></TextField>
  </View>
);

Basic.args = {
  label: 'Nombre',
  placeholder: '',
  helperText: '',
  maxLength: 20,
  error: false,
  optional: false,
  multiline: false,
  readOnly: false,
  disabled: false,
  fullWidth: false,
};

Basic.storyName = 'TextField';