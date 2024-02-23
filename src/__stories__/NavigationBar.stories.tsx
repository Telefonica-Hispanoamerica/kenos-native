import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import NavigationBarButton from '../components/NavigationBar/NavigationBarButton/NavigationBarButton';
import Avatar from '../components/Avatar/Avatar';

export default {
  title: 'components/NavigationBar',
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

export const Basic: ComponentStory<typeof NavigationBar> = args => (
  <>
    <NavigationBar {...args}></NavigationBar>
  </>
);

Basic.args = {
  title: 'Title',
  large: false,
  inverse: false,
  leftAction: (
    <NavigationBarButton onPress={() => console.log('xd')} icon='menu'/>
  ),
  rightActions: (
    <>
      <NavigationBarButton onPress={() => console.log('xd')} icon='profile'/>
      <NavigationBarButton onPress={() => console.log('xd')} icon='location'/>
      <NavigationBarButton onPress={() => console.log('xd')}>
        <Avatar
          badge={5}
          size={48}
          src="https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1114&q=80"
        />
      </NavigationBarButton>
    </>
  ),
};

Basic.storyName = 'NavigationBar';
