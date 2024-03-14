import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Alert, ScrollView, View} from 'react-native';
import {ButtonFixedFooter} from '../components/LayoutButton';
import {Button, Placeholder} from '../components';
import IconChipSimCardRegular from '../kenos-icons/IconChipSimCardRegular';
import IconFileImageRegular from '../kenos-icons/IconFileImageRegular';
import IconLightningRegular from '../kenos-icons/IconLightningRegular';
import IconFolderRegular from '../kenos-icons/IconFolderRegular';
import IconRobotRegular from '../kenos-icons/IconRobotRegular';
import {SocialMediaButton} from '../components';

export default {
  title: 'ButtonFixedFooterLayout',
  component: ButtonFixedFooter,
} as ComponentMeta<typeof ButtonFixedFooter>;

export const Basic: ComponentStory<typeof ButtonFixedFooter> = args => {
  const onPress = () => Alert.alert('Clicked!', 'Clicked successfully!');

  const buttonsOptions = [
    {text: 'text1', icon: IconChipSimCardRegular, onPress: onPress},
    {text: 'text2', icon: IconFileImageRegular, onPress: onPress},
    {text: 'text3', icon: IconLightningRegular, onPress: onPress},
    {text: 'text4', icon: IconFolderRegular, onPress: onPress},
    {text: 'text5', icon: IconRobotRegular, onPress: onPress},
  ];

  const primaryButton = (
    <Button type={'primary'} inverse={args.inverse} rounded onPress={() => {}}>
      Primary Button
    </Button>
  );

  const secondaryButton = (
    <Button
      type={'secondary'}
      inverse={args.inverse}
      rounded
      onPress={() => {}}>
      Secondary Button
    </Button>
  );

  const buttonLink = (
    <Button
      type={'link'}
      inverse={args.inverse}
      rounded
      rightIcon={IconFileImageRegular}
      onPress={() => {}}>
      Text Link
    </Button>
  );

  const slotZone = <SocialMediaButton text="Entrar con Red Social" />;

  return (
    <ScrollView>
      <View style={{margin: 10}}>
        <ButtonFixedFooter
          {...args}
          buttonsOptions={buttonsOptions}
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
          buttonLink={buttonLink}
        />
      </View>
      <View style={{margin: 10}}>
        <ButtonFixedFooter
          {...args}
          textTitle="Total (IVA incl.)"
          textPrice="229,42€"
          typeMsj="/mo"
          primaryButton={primaryButton}
          fixedFooter={true}
        ><Placeholder></Placeholder></ButtonFixedFooter>
      </View>
      <View style={{margin: 10, paddingBottom:10}}>
        <ButtonFixedFooter
          {...args}
        ><SocialMediaButton text="Entrar con Red Social" /></ButtonFixedFooter>
      </View>
    </ScrollView>
  );
};

Basic.args = {
  shadow: false,
  inverse: false,
  light: false,
};

Basic.storyName = 'ButtonFixedFooterLayout';
