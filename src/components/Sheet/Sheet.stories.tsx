import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from 'react-native';
import Sheet from './Sheet';
import {Button} from '../Button/Button';
import {Text2, Text3, Text5} from '../Text/Text';

// export default {
//   title: 'components/Sheet',
//   component: Sheet,
// } as ComponentMeta<typeof Sheet>;

export const Basic: ComponentStory<typeof Sheet> = args => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  return (
    <View style={{flex: 1, padding: 16}}>
      <View style={{height: 50}}>
        <Button
          type="primary"
          onPress={() => setBottomSheetOpen(true)}
          children="Abrir Sheet"
        />
      </View>
      <Sheet isOpen={bottomSheetOpen} onClose={() => setBottomSheetOpen(false)}>
        <View style={{gap: 8, padding: 16}}>
          <Text5>Title</Text5>
          <Text3>Subtitle</Text3>
          <Text2 color="gray">Description</Text2>
          <Button type="primary" children="Primary Button" />
          <Button type="secondary" children="Secondary Button" />
        </View>
      </Sheet>
    </View>
  );
};

Basic.args = {};

Basic.storyName = 'Sheet';
