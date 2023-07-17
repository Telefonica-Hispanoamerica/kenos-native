import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBar from './NavBar';
import NavBarButton from '../NavBarButton/NavBarButton';
import NavBarIcon from '../icons/NavBarIcon';
import Avatar from '../Avatar/Avatar';
import {
  QuantityListSkeleton,
  SkeletonCircle,
  SkeletonLine,
} from '../Skeletons/Skeletons';
import { View } from 'react-native';

export default {
  title: 'components/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

export const Basic: ComponentStory<typeof NavBar> = args => (
  <>
    <NavBar {...args}>
      <View style={{ alignItems: 'center', marginTop: 16 }}>
        <View style={{ flexDirection: 'row', gap: 128 }}>
          <SkeletonCircle size={150} />
          <View style={{ alignItems: 'center' }}>
            <SkeletonCircle size={150} />
            <View
              style={{
                alignItems: 'center',
                gap: 16,
                marginTop: 32,
                width: '100%',
              }}>
              <SkeletonLine width={120} />
              <SkeletonLine width={150} />
            </View>
          </View>
          <SkeletonCircle size={150} />
        </View>

        <View style={{ width: '90%', marginTop: 32 }}>
          <QuantityListSkeleton count={8} />
        </View>
      </View>
    </NavBar>
  </>
);

Basic.args = {
  headerTitle: 'Cuenta',
  displayMinimal: true,
  leftButton: (
    <NavBarButton
      onPress={() => alert('Left button pressed')}
      children={<NavBarIcon icon="left" />}
    />
  ),
  rightButtons: (
    <>
      <NavBarButton
        onPress={() => alert('Cart button pressed')}
        children={<NavBarIcon icon="cart" />}
      />
      <NavBarButton
        onPress={() => alert('Adjust button pressed')}
        children={<NavBarIcon icon="adjust" />}
      />
      <NavBarButton
        onPress={() => alert('Reload button pressed')}
        children={<NavBarIcon icon="reload" />}
      />
      <NavBarButton onPress={() => alert('Profile button pressed')}>
        <Avatar
          badge={5}
          size={42}
          src="https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1114&q=80"
        />
      </NavBarButton>
    </>
  ),
};

Basic.storyName = 'NavBar'