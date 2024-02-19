import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tabs from '../components/Tabs/Tabs';
import { View } from 'react-native';
import { IconLightningRegular } from '../kenos-icons';
import { Text4, Text8 } from '../components';

export default {
    title: 'Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>

export const Basic: ComponentStory<typeof Tabs> = (args) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
        <Text4>Primary Tab</Text4>
        <View style={{marginVertical: 20}}>
            <Tabs variant="primary" selectedIndex={selectedIndex} onChange={setSelectedIndex}
            tabs={['Combos', 'Navega', 'Combos', 'Navega'].map((text) => ({
                text,
                icon: <IconLightningRegular></IconLightningRegular>
            }))}
            ></Tabs>
        </View>
        <Text4>Secondary Tab</Text4>
        <View style={{marginVertical: 20}}>
            <Tabs variant="secondary" selectedIndex={selectedIndex} onChange={setSelectedIndex}
            tabs={['Combos', 'Navega', 'Combos', 'Navega'].map((text) => ({
                text,
                icon: <IconLightningRegular></IconLightningRegular>
            }))}
            ></Tabs>
        </View>
        <Text4>Arrow Tab</Text4>
        <View style={{marginVertical: 20}}>
            <Tabs variant="arrow" selectedIndex={selectedIndex} onChange={setSelectedIndex}
            tabs={['Combos', 'Navega', 'Combos', 'Navega'].map((text) => ({
                text,
                icon: <IconLightningRegular></IconLightningRegular>
            }))}
            ></Tabs>
        </View>
        </>
        
        
    )
}

Basic.storyName = 'Tabs';