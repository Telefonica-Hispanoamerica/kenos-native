import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tag from '../components/Tag/Tag';
import { View, ScrollView} from 'react-native';
import { Text4, Text2 } from '../components/Text/Text';
import { IconOfferPercentFilled } from '../kenos-icons';

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
      <Tag children='Promo' Icon={IconOfferPercentFilled} type='promo' />
      <Tag children='Active' Icon={IconOfferPercentFilled} type='active' />
      <Tag children='Inactive' Icon={IconOfferPercentFilled} type='inactive' />
      <Tag children='Success' Icon={IconOfferPercentFilled} type='success' />
      <Tag children='Warning' Icon={IconOfferPercentFilled} type='warning' />
      <Tag children='Error' Icon={IconOfferPercentFilled} type='error' />
      <Tag children='Highlight' Icon={IconOfferPercentFilled} type='highlight' />
      <Text2 medium>Inverse</Text2>
      <Tag children='Promo' Icon={IconOfferPercentFilled} type='promo' isInverseTag={true}/>
      <Tag children='Active' Icon={IconOfferPercentFilled} type='active' isInverseTag={true}/>
      <Tag children='Inactive' Icon={IconOfferPercentFilled} type='inactive' isInverseTag={true} />
      <Tag children='Success' Icon={IconOfferPercentFilled} type='success' isInverseTag={true} />
      <Tag children='Warning' Icon={IconOfferPercentFilled} type='warning' isInverseTag={true}/>
      <Tag children='Error' Icon={IconOfferPercentFilled} type='error' isInverseTag={true}/>
      <Tag children='Highlight' Icon={IconOfferPercentFilled} type='highlight' isInverseTag={true}/>
      <Text2 medium>Without Background</Text2>
      <Tag children='Promo' Icon={IconOfferPercentFilled} type='promo' withBackground={false}/>
      <Tag children='Active' Icon={IconOfferPercentFilled} type='active' withBackground={false}/>
      <Tag children='Inactive' Icon={IconOfferPercentFilled} type='inactive' withBackground={false}/>
      <Tag children='Success' Icon={IconOfferPercentFilled} type='success' withBackground={false}/>
      <Tag children='Warning' Icon={IconOfferPercentFilled} type='warning' withBackground={false}/>
      <Tag children='Error' Icon={IconOfferPercentFilled} type='error' withBackground={false}/>
      <Tag children='Highlight' Icon={IconOfferPercentFilled} type='highlight' withBackground={false}/>
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
      <Tag children='Highlight' type='highlight' />
      <Text2 medium>Inverse</Text2>
      <Tag children='Promo' type='promo' isInverseTag={true} />
      <Tag children='Active' type='active' isInverseTag={true} />
      <Tag children='Inactive' type='inactive' isInverseTag={true} />
      <Tag children='Success' type='success' isInverseTag={true} />
      <Tag children='Warning' type='warning' isInverseTag={true}/>
      <Tag children='Error' type='error' isInverseTag={true} />
      <Tag children='Highlight' type='highlight' isInverseTag={true}/>
      <Text2 medium>Without Background</Text2>
      <Tag children='Promo' type='promo' withBackground={false} />
      <Tag children='Active' type='active' withBackground={false}/>
      <Tag children='Inactive' type='inactive' withBackground={false}/>
      <Tag children='Success' type='success' withBackground={false}/>
      <Tag children='Warning' type='warning' withBackground={false}/>
      <Tag children='Error' type='error' withBackground={false}/>
      <Tag children='Highlight' type='highlight' withBackground={false}/>
    </View>
  </View>
  </ScrollView>

);

Basic.args = {

};

Basic.storyName = 'Tag';