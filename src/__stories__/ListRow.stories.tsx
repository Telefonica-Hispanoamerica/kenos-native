// Importa los módulos necesarios de Storybook
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, ScrollView } from 'react-native';
import { Circle } from '../components';
import { IconButton } from '../components/Buttons/IconButton/IconButton';
import { IconComputerAcademicRegular,IconEditPencilRegular} from '../kenos-icons';
import Row from '../components/ListRow/ListRow';
import { Button } from '../components';

const buttonLink = (
<View style={{marginLeft:-12}}>
  <Button type={'link'} rounded>
    Link Button
  </Button>
</View>
);

storiesOf('List', module)
  .add('Row', () => (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin:10, gap:8 }}>
      <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description={buttonLink}      
        leftComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        rightComponent="Without"
      />
       <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"      
        leftComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
      />
      <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"      
        leftComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        disabled={true}
      />
      <Row
        value="2"
        defaultValue="2"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"
        leftComponent={<IconButton icon={IconComputerAcademicRegular} />}
        rightComponent="IconChevron"
      />
       <Row
        value="2"
        defaultValue="2"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"
        leftComponent={<IconButton icon={IconComputerAcademicRegular} />}
      />
      <Row
        value="2"
        defaultValue="2"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"
        leftComponent={<IconButton icon={IconComputerAcademicRegular} />}
        disabled={true}
      />
      <Row
        value="3"
        defaultValue="3"
        onSelect={(value) => console.log('Selected value:', value)}
        title="Title"
        leftComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
      />
       <Row
        value="3"
        defaultValue="3"
        onSelect={(value) => console.log('Selected value:', value)}
        title="Title"
        leftComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        rightComponent="IconChevron"
      />
    </View>
    </ScrollView>
  ))
  .add('Boxed Row', () => (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',margin:10, gap:8  }}>
     <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description={buttonLink}           
        leftComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        rightComponent="IconChevron"
        style="bordered"
      />
       <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"      
        leftComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        style="bordered"
      />
      <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"      
        leftComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        disabled={true}
        style="bordered"
      />
      <Row
        value="2"
        defaultValue="2"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"
        leftComponent={<IconButton icon={IconComputerAcademicRegular} />}
        rightComponent="IconChevron"
        style="bordered"
      />
       <Row
        value="2"
        defaultValue="2"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"
        leftComponent={<IconButton icon={IconComputerAcademicRegular} />}
        style="bordered"
      />
      <Row
        value="2"
        defaultValue="2"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"
        leftComponent={<IconButton icon={IconComputerAcademicRegular} />}
        disabled={true}
        style="bordered"
      />
      <Row
        value="3"
        defaultValue="3"
        onSelect={(value) => console.log('Selected value:', value)}
        title="Title"
        leftComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        style="bordered"
      />
       <Row
        value="3"
        defaultValue="3"
        onSelect={(value) => console.log('Selected value:', value)}
        title="Title"
        leftComponent={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        rightComponent="IconChevron"
        style="bordered"
      />
    </View>
    </ScrollView>
  ))
  .add('List Structure', () => (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',margin:10, gap:8  }}>
     <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description={buttonLink}          
        leftComponent={<IconButton icon={IconComputerAcademicRegular} />}
        rightComponent="IconChevron"
        numberBagdeLS={10}
        priceLS={1000}
        iconLS={IconEditPencilRegular}
      />
      <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"      
        leftComponent={<IconButton icon={IconComputerAcademicRegular} />}
        rightComponent="IconChevron"
        numberBagdeLS={10}
      />
      <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"      
        leftComponent={<IconButton icon={IconComputerAcademicRegular} />}
        rightComponent="IconChevron"
        priceLS={1000}
      />
      <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"      
        leftComponent={<IconButton icon={IconComputerAcademicRegular} />}
        rightComponent="IconChevron"
        iconLS={IconEditPencilRegular}
      />
    </View>
    </ScrollView>
  ));