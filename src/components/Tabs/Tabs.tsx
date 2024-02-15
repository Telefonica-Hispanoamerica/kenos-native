import React from 'react';
import { View } from 'react-native';
import { useElementDimensions } from '../../hooks/hooks'
import { DataAttributes } from '../../utils/types';
import styles from './Tabs.css';

const LINE_ANIMATION_DURATION_MS =  300;

export type TabsProps = {
    selectedIndex: number;
    onChange: (selectedIndex: number) => void;
    tabs: ReadonlyArray<{
        readonly text: string;
        readonly icon?: React.ReactNode;
        readonly 'aria-controls'?: string;
    }>;
    children?: void;
    dataAttributes?: DataAttributes;
};

const Tabs: React.FC<TabsProps> = ({selectedIndex, onChange, tabs, dataAttributes }: TabsProps) => {
    
    return (
        <>
        </>
    );
  };
  
  export default Tabs;