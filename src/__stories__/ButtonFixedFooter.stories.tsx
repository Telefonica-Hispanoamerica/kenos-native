import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { View } from 'react-native';
import { ButtonFixedFooter } from '../components/LayoutButton';
import { Button } from '../components';
import IconChipSimCardRegular from '../kenos-icons/IconChipSimCardRegular';
import IconFileImageRegular from '../kenos-icons/IconFileImageRegular';
import IconLightningRegular from '../kenos-icons/IconLightningRegular';
import IconFolderRegular from '../kenos-icons/IconFolderRegular';
import IconRobotRegular from '../kenos-icons/IconRobotRegular';

export default {
  title: 'ButtonFixedFooterLayout',
  component: ButtonFixedFooter,
} as ComponentMeta<typeof ButtonFixedFooter>;


export const Basic: ComponentStory<typeof ButtonFixedFooter> = args => {

  const buttonsOptions = [{ text: 'text1', icon: IconChipSimCardRegular }, { text: 'text2', icon: IconFileImageRegular }, { text: 'text3', icon: IconLightningRegular }, { text: 'text4', icon: IconFolderRegular }, { text: 'text5', icon: IconRobotRegular }]

  const primaryButton = <Button type={'primary'} inverse={args.inverse} rounded onPress={() => { }}>{args.primaryButtonText}</Button>;
  const secondaryButton = <Button type={'secondary'} inverse={args.inverse} rounded onPress={() => { }}>{args.secondaryButtonText}</Button>;
  const buttonLink = <Button type={'link'} inverse={args.inverse} rounded rightIcon={IconFileImageRegular} onPress={() => { }}>{args.linkText}</Button>;

  return (
    <View>
      <ButtonFixedFooter {...args} primaryButton={primaryButton} secondaryButton={secondaryButton} buttonLink={buttonLink} buttonsOptions={buttonsOptions} />
    </View>
  )

};

Basic.args = {
  children: 'text button',
  primaryButtonText: 'Primary Button',
  secondaryButtonText: 'Secondary Button',
  linkText: 'Text Link',
  iconButton: false,
  primary: true,
  secondary: false,
  addLink: false,
  shadow: false,
  inverse: false,
  medium: false,
  highlight: false,
  light: false
};

Basic.storyName = 'ButtonFixedFooterLayout'