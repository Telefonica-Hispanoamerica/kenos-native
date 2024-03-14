import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {Alert, View} from 'react-native';
import { ComponentMeta } from '@storybook/react-native';
import { PinPassStatusType } from '../components/Input/PinPassField/PinPassField.Types';
import { PinPassField, Text3 } from '../components';

const stateTypes: Array<PinPassStatusType> = [
  'default','completed','correct','error','disabled','read-only'
];

export default {
  title: 'PinPassField',
  component: PinPassField,
  argTypes: {
    state: {
      options: stateTypes,
      control: {
        type: 'select',
      },
    },
    length: {
      step: 1,
      min: 1,
      max: 7,
      range: true,
    }
  },
}as ComponentMeta<typeof PinPassField>;

export const Basic: ComponentStory<typeof PinPassField> = args => {
  const [pinPass, setPinPass] = useState('');

  const handleChangePin = () => {
    Alert.alert('PIN ingresado correctamente: ', pinPass);
  }

  const argsPinPass = {
    ...args,
    name: 'pin',
    onChangeValue: setPinPass,
    value: pinPass,
  };

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <View style={{marginTop: 20}} />
      <Text3>PinPass Value: {pinPass}</Text3>
      <PinPassField
        {...argsPinPass}
        handleChange={handleChangePin}
      />
    </View>
  );
};

Basic.args = {
  state: 'default',
  length: 6,
  inverse: false,
  hiddenText: false,
  helperText: ''
};

Basic.storyName = 'PinPassField';
