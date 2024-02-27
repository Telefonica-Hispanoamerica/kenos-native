import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert, ScrollView, View } from 'react-native';
import { IconPhotoCameraFilled } from '..';
import { Button } from '../components/Buttons';
import { ButtonType } from '../components/Buttons/Button/Button.Types';

export default {
  title: 'components/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => {
  const buttonTypes: Array<ButtonType> = ['primary', 'secondary', 'danger', 'link'];
  const onPress = () => Alert.alert('Clicked!', 'Clicked successfully!');
  return (
    <ScrollView>
      <View style={{ gap: 16, margin: 16, width: 143 }}>
        {buttonTypes.map((aButtonType, index) => (
          <React.Fragment key={`button-${aButtonType}-${index}`}>
            <Button {...args} loadingText="" type={aButtonType} onPress={onPress}>
              Send
            </Button>
            {/* <Button loadingText="" type={aButtonType} onPress={onPress} rounded={true}>
              Send
            </Button> */}
            <Button
              {...args}
              loadingText=""
              type={aButtonType}
              leftIcon={IconPhotoCameraFilled}
              onPress={onPress}>
              Send
            </Button>
            <Button
              {...args}
              loadingText=""
              type={aButtonType}
              rightIcon={IconPhotoCameraFilled}
              onPress={onPress}>
              Send
            </Button>
            {/* <Button {...args} loadingText="" type={aButtonType} disabled showSpinner={false}>
              Send
            </Button> */}
            <Button {...args} loadingText="Sending file" type={aButtonType} showSpinner>
              Send
            </Button>
           {/*  <Button {...args} loadingText="" disabled={false} type={aButtonType} showSpinner>
              Send
            </Button> */}
            {/* <Button loadingText="" type={aButtonType} small onPress={onPress}>
              Send
            </Button>
            <Button
              loadingText=""
              type={aButtonType}
              small
              showSpinner={false}
              leftIcon={IconPhotoCameraFilled}
              onPress={onPress}>
              Send
            </Button>
            <Button
              loadingText=""
              type={aButtonType}
              small
              showSpinner={false}
              rightIcon={IconPhotoCameraFilled}
              onPress={onPress}>
              Send
            </Button>
            <Button loadingText="" type={aButtonType} small disabled>
              Send
            </Button>
            <Button
              loadingText="Sending file"
              type={aButtonType}
              small
              showSpinner>
              Send
            </Button>
            <Button
              loadingText="Sending file"
              type={aButtonType}
              small
              disabled
              showSpinner>
              Send
            </Button>
            <Button
              loadingText=""
              type={aButtonType}
              small
              disabled
              showSpinner>
              Send
            </Button>
            <Button loadingText="" type={aButtonType} showSpinner small>
              Send
            </Button> */}
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

Basic.args = {
  showSpinner: false,
  disabled: false,
  children: 'Send',
  loadingText: 'Sending file',
  inverse: false,
  selected:false
};


Basic.storyName = 'Buttons'