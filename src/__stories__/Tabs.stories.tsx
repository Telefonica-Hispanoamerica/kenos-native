import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tabs from '../components/Tabs/Tabs';
import { View } from 'react-native';

export default {
    title: 'Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>

export const Basic: ComponentStory<typeof Tabs> = ( args ) => (
    <View>
    </View>
)

Basic.storyName = 'Tabs';