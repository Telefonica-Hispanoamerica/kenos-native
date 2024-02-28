// Importa los módulos necesarios de Storybook
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Circle, IconButton } from '../components';
import { IconComputerAcademicRegular } from '../kenos-icons';
import { ScrollView } from 'react-native';
import Row from '../components/ListRow/ListRow';

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
        description="Description"      
        icon={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        rightComponent="IconChevron"
      />
       <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"      
        icon={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
      />
      <Row
        value="1"
        defaultValue="1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"      
        icon={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
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
        icon={<IconButton icon={IconComputerAcademicRegular} />}
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
        icon={<IconButton icon={IconComputerAcademicRegular} />}
      />
      <Row
        value="2"
        defaultValue="2"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Headline"
        title="Title"
        subtitle="Subtitle"
        description="Description"
        icon={<IconButton icon={IconComputerAcademicRegular} />}
        disabled={true}
      />
      <Row
        value="3"
        defaultValue="3"
        onSelect={(value) => console.log('Selected value:', value)}
        title="Title"
        icon={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
      />
       <Row
        value="3"
        defaultValue="3"
        onSelect={(value) => console.log('Selected value:', value)}
        title="Title"
        icon={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
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
        description="Description"      
        icon={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
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
        icon={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
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
        icon={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
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
        icon={<IconButton icon={IconComputerAcademicRegular} />}
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
        icon={<IconButton icon={IconComputerAcademicRegular} />}
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
        icon={<IconButton icon={IconComputerAcademicRegular} />}
        disabled={true}
        style="bordered"
      />
      <Row
        value="3"
        defaultValue="3"
        onSelect={(value) => console.log('Selected value:', value)}
        title="Title"
        icon={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        style="bordered"
      />
       <Row
        value="3"
        defaultValue="3"
        onSelect={(value) => console.log('Selected value:', value)}
        title="Title"
        icon={<Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />}
        rightComponent="IconChevron"
        style="bordered"
      />
    </View>
    </ScrollView>
  ));