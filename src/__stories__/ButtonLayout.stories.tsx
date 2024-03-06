import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ButtonLayout} from '../components/LayoutButton';
import {Alert, View} from 'react-native';
import {Button} from '../components';

export default {
  title: 'ButtonsLayout',
  component: ButtonLayout,
} as ComponentMeta<typeof ButtonLayout>;

export const Basic: ComponentStory<typeof ButtonLayout> = args => {
  const onPress = () => Alert.alert('Clicked!', 'Clicked successfully!');

  const primaryButton = (
    <Button type={'primary'} rounded small={args.small} onPress={onPress}>
      Primary Button
    </Button>
  );
  const secondaryButton = (
    <Button type={'secondary'} rounded small={args.small} onPress={onPress}>
      Secondary Button
    </Button>
  );
  const buttonLink = (
    <Button type={'link'} rounded small={args.small} onPress={onPress}>
      Link Button
    </Button>
  );

  return (
    <View>
      <ButtonLayout buttonLink={buttonLink} primaryButton={primaryButton} />
      <ButtonLayout primaryButton={primaryButton} />
      <ButtonLayout
        secondaryButton={secondaryButton}
        primaryButton={primaryButton}
      />
      <ButtonLayout buttonLink={buttonLink} secondaryButton={secondaryButton} />
      <ButtonLayout secondaryButton={secondaryButton} />
      <ButtonLayout buttonLink={buttonLink} />
    </View>
  );
};

Basic.args = {};

Basic.storyName = 'ButtonsLayout';
