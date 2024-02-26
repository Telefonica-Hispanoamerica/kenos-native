// Importa los módulos necesarios de Storybook
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

// Importa el componente `Row` que deseas mostrar en Storybook
import Row from '../components/ListRow/ListRow';

// Define una historia para el componente `Row`
storiesOf('Row', module)
  // Agrega una historia para un `Row` con un RadioButton en la parte derecha
  .add('with RadioButton', () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin:10, gap:8 }}>
      <Row
        value="option1"
        defaultValue="option1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Row headline"
        title="Row title"
        subtitle="Row subtitle"
        description="Row description"
        badge={true}
        style='bordered'
        disabled={true}
        extra={<View style={{ width: 50, height: 50, backgroundColor: 'red' }} />} // Ejemplo de un componente extra
      />
      <Row
        value="option1"
        defaultValue="option1"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Row headline"
        title="Row title"
        subtitle="Row subtitle"
        description="Row description"
        badge={true}
        extra={<View style={{ width: 50, height: 50, backgroundColor: 'red' }} />} // Ejemplo de un componente extra
      />
    </View>
  ))
  // Agrega una historia para un `Row` con un IconChevron en la parte derecha
  .add('with IconChevron', () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Row
        value="option2"
        defaultValue="option2"
        onSelect={(value) => console.log('Selected value:', value)}
        headline="Row headline"
        title="Row title"
        subtitle="Row subtitle"
        description="Row description"
        badge={true}
        rightComponent="IconChevron" // Usa el IconChevron como componente derecho
        extra={<View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />} // Ejemplo de un componente extra
      />
    </View>
  ));