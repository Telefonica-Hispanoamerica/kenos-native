import React, { useState } from 'react';
import {ComponentStory} from '@storybook/react';
import TextField from '../components/Input/TextFields/TextField/TextField';
import {View} from 'react-native';
import {IconMusicFilled} from '../kenos-icons';
import PassswordField from '../components/Input/PasswordField/PasswordField';

export default {
  title: 'TextField',
  component: TextField,
};

export const Basic: ComponentStory<typeof TextField> = args => {
  const [password, setPassword] = useState("");
  
  const argsPasswordField = {
    ...args,
    label: 'Password',
    name: 'password',
    onChangeValue: setPassword,
    value: password,
    defaultValue: '',
  };

  return (
    <View
      style={{
        padding: 20
      }}>
      <TextField {...args} endIcon={<IconMusicFilled />} fullWidth></TextField>
      <View style={{ marginTop: 20 }} />
      <PassswordField {...argsPasswordField} fullWidth />
    </View>
  );
};

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
