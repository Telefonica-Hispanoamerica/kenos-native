import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tabs from '../components/Tabs/Tabs';
import { View } from 'react-native';

export default {
    title: 'Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>

export const Basic: ComponentStory<typeof Tabs> = (args) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <View>
            <Tabs selectedIndex={selectedIndex} onChange={setSelectedIndex}
            tabs={['First Tab', 'Second Tab', 'Third Tab'].map((text) => ({
                text,
            }))}
            ></Tabs>
        </View>
    )
}

Basic.storyName = 'Tabs';