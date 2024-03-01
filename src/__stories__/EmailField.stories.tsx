import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import EmailField from '../components/Input/EmailField/EmailField';
import {View} from 'react-native';

export default {
  title: 'EmailField',
  component: EmailField,
} as ComponentMeta<typeof EmailField>;

export const Basic: ComponentStory<typeof EmailField> = args => (
  <View
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    }}>
    <EmailField {...args}></EmailField>
  </View>
);

Basic.args = {
  label: 'Email',
  placeholder: '',
  helperText: '',
  maxLength: 20,
  error: false,
  optional: false,
  readOnly: false,
  disabled: false,
  fullWidth: false,
};

Basic.storyName = 'EmailField';