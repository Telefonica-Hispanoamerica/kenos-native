import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinkButton, ButtonType } from '../components/LinkButton/LinkButton';
import { Alert, ScrollView, View } from 'react-native';
import {IconImageLight} from '..';

export default {
  title: 'LinkButton',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

export const Basic: ComponentStory<typeof LinkButton> = args => {
  const buttonTypes: Array<ButtonType> = ['primary'];

  return (
    <ScrollView>
      <View style={{ gap: 16, margin: 16, width: 143 }}>
        {buttonTypes.map((aButtonType, index) => (
          <React.Fragment key={`button-${aButtonType}-${index}`}>
            <LinkButton {...args} type={aButtonType}>
            </LinkButton>
            <LinkButton
              {...args}
              type={aButtonType}
              leftIcon={IconImageLight}>
            </LinkButton>
            <LinkButton
              {...args}
              type={aButtonType}
              rightIcon={IconImageLight}>
            </LinkButton>
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

Basic.args = {
  showSpinner: false,
  showBackground: false,
  disabled: false,
  children: 'Send',
  loadingText: 'Texto',
  inverse: false,
};


Basic.storyName = 'LinkButton'