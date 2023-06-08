import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import LoadingBar from './LoadingBar';

export default {
  title: 'components/LoadingBar',
  component: LoadingBar,
} as ComponentMeta<typeof LoadingBar>;

export const Basic: ComponentStory<typeof LoadingBar> = () => <LoadingBar />;

Basic.storyName = 'Loading bar';
