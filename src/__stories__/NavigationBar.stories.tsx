import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import NavigationBar from '../components/NavigationBar/NavigationBar.web';
import NavBarButton from '../components/NavBarButton/NavBarButton.web';
import NavBarIcon from '../icons/NavBarIcon';
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
  title: 'Cuenta',
  large: true,
  leftButton: (
    <NavBarButton
      onPress={() => console.log('xd')}
      children={<NavBarIcon icon="back" />}
    />
  ),
  rightButtons: (
    <>
      <NavBarButton
        onPress={() => console.log('xd')}
        children={<NavBarIcon icon="cart" />}
      />
      <NavBarButton
        onPress={() => console.log('xd')}
        children={<NavBarIcon icon="adjust" />}
      />
      <NavBarButton
        onPress={() => console.log('xd')}
        children={<NavBarIcon icon="reload" />}
      />
      <NavBarButton onPress={() => console.log('xd')}>
        <Avatar
          badge={5}
          size={42}
          src="https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1114&q=80"
        />
      </NavBarButton>
    </>
  ),
};

Basic.storyName = 'NavigationBar';
