import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Divider from './Divider';
import {View} from 'react-native';

describe('Divider component test set', () => {
  jest.mock('../../hooks/ThemeContextProvider', () => ({
    useTheme: () => ({
      skin: {
        colors: {
          divider: 'divider_color',
          dividerInverse: 'divider_inverse_color',
        },
      },
    }),
  }));

  it('Divider render a View', () => {
    const component = ReactTestRenderer.create(<Divider />);
    const instance = component.root;
    const viewComponent = instance.findByType(View);
    expect(viewComponent).toBeDefined();
  });
});
