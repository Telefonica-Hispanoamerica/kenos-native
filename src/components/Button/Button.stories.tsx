// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonType } from './Button';
import { ScrollView, View } from 'react-native';
import IconCamera from '../icons/icon-camera';

export default {
  title: 'components/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => {
  const buttonTypes: Array<ButtonType> = ['primary', 'secondary', 'danger'];
  return (
    <ScrollView >
      <View style={{ gap: 16, margin: 16 }}>
        <Button {...args}>Send</Button>
        {buttonTypes.map(aButtonType => <>
          <Button loadingText='' type={aButtonType}>Send</Button>
          <Button loadingText='' type={aButtonType} leftIcon={IconCamera}>Send</Button>
          <Button loadingText='' type={aButtonType} rightIcon={IconCamera}>Send</Button>
          <Button loadingText='' type={aButtonType} disabled>Send</Button>
          <Button loadingText='Sending file' type={aButtonType} showSpinner >Send</Button>
          <Button loadingText='' type={aButtonType} showSpinner>Send</Button>
          <Button loadingText='' type={aButtonType} small>Send</Button>
          <Button loadingText='' type={aButtonType} small leftIcon={IconCamera}>Send</Button>
          <Button loadingText='' type={aButtonType} small rightIcon={IconCamera}>Send</Button>
          <Button loadingText='' type={aButtonType} small disabled>Send</Button>
          <Button loadingText='Sending file' type={aButtonType} small showSpinner>Send</Button>
          <Button loadingText='Sending file' type={aButtonType} small disabled showSpinner>Send</Button>
          <Button loadingText='' type={aButtonType} small disabled showSpinner>Send</Button>
          <Button loadingText='' type={aButtonType} showSpinner small>Send</Button>
        </>)}
      </View>
    </ScrollView>

  );
}


Basic.args = {
  showSpinner: false,
  disabled: false,
  children: 'Send',
  loadingText: 'Sending file',
  type: 'primary'
};
