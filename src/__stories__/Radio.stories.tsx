// RadioButton.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Radio from '../components/Radio/Radio';
import { ScrollView, View } from 'react-native';

storiesOf('Radio', module)
  .add('Radio', () => (
    <ScrollView>
    <View style={{ flexDirection: 'column', gap: 8, marginLeft: 10 }}>
    <Radio
      label={'Enabled'}
      value={'option1'}
      defaultValue={'option1'}
      onSelect={(value) => console.log('Selected option:', value)}
    />
     <Radio
      label={'Disabled'}
      value={'option1'}
      defaultValue={'option1'}
      onSelect={(value) => console.log('Selected option:', value)}
      disabled={true}
    />
    <Radio
      label={'Unselected'}
      value={'option1'}
      defaultValue={''} // No se selecciona ninguna opción por defecto
      onSelect={(value) => console.log('Selected option:', value)}
    />
     </View>
   </ScrollView>
  ))
