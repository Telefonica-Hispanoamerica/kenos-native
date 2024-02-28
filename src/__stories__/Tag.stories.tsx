import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tag from '../components/Tag/Tag';
import IconCamera from '../icons/icon-camera';
import { View, ScrollView} from 'react-native';
import { Text4, Text2 } from '../components/Text/Text';

export default {
  title: 'Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Basic: ComponentStory<typeof Tag> = args => (
  <ScrollView>
  <View style={{ flexDirection: 'row', gap: 64 }}>
    <View style={{ gap: 16, padding: 16, flexDirection: 'column' }}>
      <Text4 medium>Example</Text4>
      <Text2 medium>Primary</Text2>
      <Tag children='Promo' Icon={IconCamera} type='promo' />
      <Tag children='Active' Icon={IconCamera} type='active' />
      <Tag children='Inactive' Icon={IconCamera} type='inactive' />
      <Tag children='Success' Icon={IconCamera} type='success' />
      <Tag children='Warning' Icon={IconCamera} type='warning' />
      <Tag children='Error' Icon={IconCamera} type='error' />
      <Text2 medium>Inverse</Text2>
      <Tag children='Promo' Icon={IconCamera} type='promo' isInverseTag={true}/>
      <Tag children='Active' Icon={IconCamera} type='active' isInverseTag={true}/>
      <Tag children='Inactive' Icon={IconCamera} type='inactive' isInverseTag={true} />
      <Tag children='Success' Icon={IconCamera} type='success' isInverseTag={true} />
      <Tag children='Warning' Icon={IconCamera} type='warning' isInverseTag={true}/>
      <Tag children='Error' Icon={IconCamera} type='error' isInverseTag={true}/>
      <Text2 medium>Without Background</Text2>
      <Tag children='Promo' Icon={IconCamera} type='promo' withBackground={false}/>
      <Tag children='Active' Icon={IconCamera} type='active' withBackground={false}/>
      <Tag children='Inactive' Icon={IconCamera} type='inactive' withBackground={false}/>
      <Tag children='Success' Icon={IconCamera} type='success' withBackground={false}/>
      <Tag children='Warning' Icon={IconCamera} type='warning' withBackground={false}/>
      <Tag children='Error' Icon={IconCamera} type='error' withBackground={false}/>
    </View>
    <View style={{ gap: 16, padding: 16, flexDirection: 'column' }}>
      <Text4 medium>Without icon</Text4>
      <Text2 medium>Primary</Text2>
      <Tag children='Promo' type='promo' />
      <Tag children='Active' type='active' />
      <Tag children='Inactive' type='inactive' />
      <Tag children='Success' type='success' />
      <Tag children='Warning' type='warning' />
      <Tag children='Error' type='error' />
      <Text2 medium>Inverse</Text2>
      <Tag children='Promo' type='promo' isInverseTag={true} />
      <Tag children='Active' type='active' isInverseTag={true} />
      <Tag children='Inactive' type='inactive' isInverseTag={true} />
      <Tag children='Success' type='success' isInverseTag={true} />
      <Tag children='Warning' type='warning' isInverseTag={true}/>
      <Tag children='Error' type='error' isInverseTag={true} />
      <Text2 medium>Without Background</Text2>
      <Tag children='Promo' type='promo' withBackground={false} />
      <Tag children='Active' type='active' withBackground={false}/>
      <Tag children='Inactive' type='inactive' withBackground={false}/>
      <Tag children='Success' type='success' withBackground={false}/>
      <Tag children='Warning' type='warning' withBackground={false}/>
      <Tag children='Error' type='error' withBackground={false}/>
    </View>
  </View>
  </ScrollView>

);

Basic.args = {

};

Basic.storyName = 'Tag';