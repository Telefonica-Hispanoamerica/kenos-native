import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '../components/Avatar/Avatar';
import { View } from 'react-native';
import { IconUserAccountRegular } from '../kenos-icons';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;



export const Basic: ComponentStory<typeof Avatar> = args => (
  <View style={{ padding: 16, gap: 16}}>
    <Avatar {...args} size={64}/>
    <Avatar size={args.size} badge={false} src={args.src}/>
    <Avatar Icon={IconUserAccountRegular} size={args.size} inverse={false} />
    <Avatar Icon={IconUserAccountRegular} size={args.size} inverse/>
    <Avatar initials='andrea' size={args.size} inverse/>
    <Avatar initials='andrea' size={args.size} inverse={false}/>

  </View>
);

Basic.args = {
  size: 64,
  src: 'https://www.purina.co.uk/sites/default/files/2020-12/Can%20Cats%20DreamHERO.jpg',
  badge: 51,
};

Basic.storyName = 'Avatar'