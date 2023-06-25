import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Welcome } from './Welcome';

export default {
    title: 'Welcome',
    component: Welcome,
} as ComponentMeta<typeof Welcome>;

export const Basic: ComponentStory<typeof Welcome> = () => {
    return <Welcome />;
};

Basic.storyName = 'Welcome';