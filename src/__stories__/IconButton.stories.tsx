import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from '../components/Icon Button/IconButton';
import { Text, View } from 'react-native';
import { IconComputerUserRegular } from '../kenos-icons';

export default {
  title: 'components/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

/* export type ImageType ={
  uri:string;
  type:string;
  name:string;
}

const[iconImg,setIconImg]=useState<string|undefined>(undefined);

export const iconImage = async ()=>{
  
  const options = {
    mediaType: 'photo',
    maxHeight: 50,
    maxWidth: 50,
  };

  const result = (await launchImageLibrary(options as any)) as {
    assets: ImageType[];
  }

  setIconImg(result.assets[0].uri)
} */

export const Basic: ComponentStory<typeof IconButton> = args => (
  <View>
    <IconButton {...args} icon={IconComputerUserRegular} onPress={() => console.log("Pressed")}/> 
  </View>
);

Basic.args = {
  children:'Texto',
  inverse:false,
  light:false,
  medium:false,
  highlight:false,
};
 
Basic.storyName = 'IconButton'