import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Checkbox from '../components/Checkbox/Checkbox';
import { ScrollView, View } from 'react-native';

storiesOf('Checkbox', module)
  .add('Checkbox', () => (
    <ScrollView>
    <View style={{ flexDirection: 'column', gap: 8, marginLeft: 10 }}>
    <Checkbox
      label="Unchecked"
      onChange={(isChecked) => console.log('Checkbox is checked:', isChecked)}
    />
    <Checkbox
      label="Checked"
      onChange={(isChecked) => console.log('Checkbox is checked:', isChecked)}
      checkedCheck={true}
    />
    <Checkbox
      label="Disabled"
      onChange={(isChecked) => console.log('Checkbox is checked:', isChecked)}
      disabled
    />
    <Checkbox
      label="Disabled Checked"
      onChange={(isChecked) => console.log('Checkbox is checked:', isChecked)}
      disabled
      checkedCheck={true}
    />
     <Checkbox
      label="Checkbox with Link"
      linkText="Learn more"
      linkURL="https://example.com"
      onChange={(isChecked) => console.log('Checkbox is checked:', isChecked)}
    />
    </View>
   </ScrollView>
  ))
 
