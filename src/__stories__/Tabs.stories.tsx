import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tabs from '../components/Tabs/Tabs';
import { View } from 'react-native';
import { IconLightningRegular } from '../kenos-icons';

export default {
    title: 'Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>

export const Basic: ComponentStory<typeof Tabs> = (args) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <View>
            <Tabs scrollable solidBackground selectedIndex={selectedIndex} onChange={setSelectedIndex}
            tabs={['Combos', 'Navega', 'Combos', 'Navega', 'Combos', 'Navega','Navega', 'Combos', 'Navega', 'Navega', 'Combos', 'Navega'].map((text) => ({
                text,
                icon: <IconLightningRegular></IconLightningRegular>
            }))}
            ></Tabs>
        </View>
    )
}

Basic.storyName = 'Tabs';