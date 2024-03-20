import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import TextField from '../components/Input/TextFields/TextField/TextField';
import {Text, View} from 'react-native';
import {IconMobileDeviceRegular, IconMusicFilled} from '../kenos-icons';
import PassswordField from '../components/Input/PasswordField/PasswordField';
import PhoneField from '../components/Input/PhoneField/PhoneField';
import DoubleField from '../components/Input/DoubleField/DoubleField';

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

  const DoubleFieldLeft = (
    <TextField
      {...argsPhoneField}
      label='CVV'
      helperText=''
      fullWidth
      keyboardType='numeric'
    />
  );

  const DoubleFieldRigth = (
    <TextField
      {...args}
      label='Expire'
      helperText=''
      fullWidth
    />
  );

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
      <View style={{marginTop: 20}} />
      <DoubleField
        leftField={DoubleFieldLeft}
        rightField={DoubleFieldRigth}
        layout="30/70"
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
