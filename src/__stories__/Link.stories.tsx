import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Link from '../components/Link/Link';

// Define la historia del componente Link
storiesOf('Link', module)
  .add('Default', () => (
    <Link onPress={() => console.log('Link clicked')}>Click me</Link>
  ));

