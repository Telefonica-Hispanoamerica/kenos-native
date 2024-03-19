import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import TextField from '../components/Input/TextFields/TextField/TextField';
import {Alert, Text, View} from 'react-native';
import {IconCreditCardVisaRegular, IconMobileDeviceRegular, IconMusicFilled} from '../kenos-icons';
import PassswordField from '../components/Input/PasswordField/PasswordField';
import PhoneField from '../components/Input/PhoneField/PhoneField';
import PinPassField from '../components/Input/PinPassField/PinPassField';
import CreditCardNumberField from '../components/Input/CreditCardNumberField/CreditCardNumberField';

export default {
  title: 'TextField',
  component: TextField,
};

export const Basic: ComponentStory<typeof TextField> = args => {
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [pinPass, setPinPass] = useState('');

  const handleChangePin = () => {
    Alert.alert('PIN ingresado correctamente: ', pinPass);
  }

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

  const argsCreditCardNumber = {
    ...args,
    label: 'Card number',
    name: 'card',
    onChangeValue: setCreditCardNumber,
    value: creditCardNumber,
    helperText: 'Helper text',
    maxLength: 19, //Debe incluir cantidad de numeros + espacios
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
      <View style={{marginTop: 20}} />
      <Text>Credit Card: {creditCardNumber}</Text>
      <CreditCardNumberField
        {...argsCreditCardNumber}
        endIcon={<IconCreditCardVisaRegular/>}
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
