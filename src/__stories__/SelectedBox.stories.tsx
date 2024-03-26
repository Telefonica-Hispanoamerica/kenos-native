// SelectedBox.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ScrollView, View } from 'react-native';
import SelectedBox from '../components/SelectedBox/SelectedBox';
import { Circle } from '../components';


storiesOf('Selected Box', module)
  .add('Selected Box', () => (
    <ScrollView>
    <View style={{ flexDirection: 'column', gap: 8, marginLeft: 10, marginTop:15 }}>
    <SelectedBox
      customComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
      text="Example Text"
      badge={7}
      width={100}
      value="some value one"
       onSelect={(selected, value) => {
        if (selected) {
          //Selected with value
        } else {
          //Deselected with value
        }
     }}
    />
    <SelectedBox
      customComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
      badge={7}
      width={100}
      value="some value two"
      onSelect={(selected, value) => {
        if (selected) {
          //Selected with value
        } else {
          //Deselected with value
        }
      }}
    />
    <SelectedBox
      text="Example Text"
      badge={7}
      width={100}
      value="some value one"
       onSelect={(selected, value) => {
        if (selected) {
          //Selected with value
        } else {
          //Deselected with value
        }
     }}
    />
     </View>
   </ScrollView>
  ))
