import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonLayout } from '../components/LayoutButton/ButtonLayout';
import { View } from 'react-native';
import { Button } from '../components';

export default {
  title: 'component/buttonLayout',
  component: ButtonLayout,
} as ComponentMeta<typeof ButtonLayout>;

export const Basic: ComponentStory<typeof ButtonLayout> = args => {
  const primaryButton = <Button type={'primary'} rounded small={args.small} onPress={args.onPress}>{args.primaryButtonText}</Button>;
  const secondaryButton = <Button type={'secondary'} rounded small={args.small} onPress={args.onPress}>{args.secondaryButtonText}</Button>;
  const buttonLink = <Button type={'link'} rounded small={args.small} onPress={args.onPress}>{args.linkText}</Button>;

  return (
      <View>
        <ButtonLayout {...args} buttonLink={buttonLink} primaryButton={primaryButton}/>
        <ButtonLayout {...args} primaryButton={primaryButton}/>
        <ButtonLayout {...args} secondaryButton={secondaryButton} primaryButton={primaryButton}/>
        <ButtonLayout {...args} buttonLink={buttonLink} secondaryButton={secondaryButton}/>
        <ButtonLayout {...args} secondaryButton={secondaryButton}/>
        <ButtonLayout {...args} buttonLink={buttonLink}/>
      </View>
  )
};

Basic.args = {
  primaryButtonText: 'Primary Button',
  secondaryButtonText: 'Secondary Button',
  linkText: 'Link Button',
};

Basic.storyName = 'ButtonsLayout'