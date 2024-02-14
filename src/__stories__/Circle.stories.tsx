import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Circle} from '../components/Circle/Circle';

export default {
  title: 'Primitives/Circle',
  component: Circle,
} as ComponentMeta<typeof Circle>;

export const Basic: ComponentStory<typeof Circle> = args => (
  <Circle {...args} />
);

Basic.args = {
  backgroundImage:
    'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F07%2F25%2Fbengal-cat-sleeping-perch-978539904-2000.jpg',
  backgroundColor: 'rgb(1, 157, 244)',
  size: 96,
};

Basic.storyName = 'Circle';
