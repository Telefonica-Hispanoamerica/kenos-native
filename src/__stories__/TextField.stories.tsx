import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import TextField from '../components/Input/TextFields/TextField/TextField';
import {Text, View} from 'react-native';
import {IconMobileDeviceRegular, IconMusicFilled} from '../kenos-icons';
import PassswordField from '../components/Input/PasswordField/PasswordField';
import PhoneField from '../components/Input/PhoneField/PhoneField';

export default {
  title: 'TextField',
  component: TextField,
};

export const Basic: ComponentStory<typeof TextField> = args => {
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const argsPasswordField = {
    ...args,
    label: 'Password',
    name: 'password',
    onChangeValue: setPassword,
    value: password,
    defaultValue: '',
  };

  const argsPhoneField = {
    ...args,
    label: 'Phone with prefix',
    name: 'phone',
    onChangeValue: setPhoneNumber,
    value: phoneNumber,
    helperText: 'Helper text',
    maxLength: 12, //Debe incluir cantidad de numeros + espacios
  };

  return (
    <View
      style={{
        padding: 20,
      }}>
      <TextField {...args} endIcon={<IconMusicFilled />} fullWidth></TextField>
      <View style={{marginTop: 20}} />
      <PassswordField {...argsPasswordField} fullWidth />
      <View style={{marginTop: 20}} />
      <Text>Real Value: {phoneNumber}</Text>
      <PhoneField
        {...argsPhoneField}
        endIcon={<IconMobileDeviceRegular />}
        fullWidth
      />
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
