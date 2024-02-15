import React, { useRef, useState } from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { DataAttributes } from '../../utils/types';
import * as styles from './Tabs.css';

const LINE_ANIMATION_DURATION_MS = 300;

const getTabVariant = (numberOfTabs: number): keyof typeof styles.tabVariantStyles => {
    switch (numberOfTabs) {
        case 2:
            return 'tabs2';
        case 3:
            return 'tabs3';
        default:
            return 'default';
    }
};

type TabsProps = {
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

const Tabs: React.FC<TabsProps> = ({ selectedIndex, onChange, tabs, dataAttributes }: TabsProps) => {
    const animatedLineRef = useRef<View>(null);
    const scrollableContainerRef = useRef<ScrollView>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const animateLine = (fromIndex: number, toIndex: number) => {
        // Implementa la lógica para animar la línea
    };

    return (
        <View> 
            <ScrollView horizontal>
                <View>
                    <View> 
                        <View style={styles.outerStyles}>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                ref={scrollableContainerRef}
                            >
                                <View style={styles.tabStyles.tabsContainer}>
                                    {tabs.map(({ text, icon, 'aria-controls': ariaControls }, index) => (
                                        <TouchableWithoutFeedback
                                            key={index}
                                            onPress={() => {
                                                if (!isAnimating && selectedIndex !== index) {
                                                    onChange(index);
                                                    animateLine(selectedIndex, index);
                                                }
                                            }}
                                            disabled={isAnimating || selectedIndex === index}
                                        >
                                            <View

                                            >
                                                {icon && <View style={styles.tabStyles.icon}>{icon}</View>}
                                                <Text>{text}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    ))}
                                </View>
                            </ScrollView>
                            <View ref={animatedLineRef} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Tabs;