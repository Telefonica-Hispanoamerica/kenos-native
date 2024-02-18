import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View, Animated, Text, Platform } from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { useElementDimensions } from '../../hooks/hooks';
import { DataAttributes } from '../../utils/types';
import { Text3 } from '../Text/Text';

const LINE_ANIMATION_DURATION_MS = 300;

type TabsProps = {
    selectedIndex: number;
    onChange: (selectedIndex: number) => void;
    tabs: ReadonlyArray<{
        readonly text: string;
        readonly icon?: React.ReactNode;
        readonly 'aria-controls'?: string;
    }>;
    solidBackground?: boolean;
    roundedTopBorders?: boolean;
    scrollable?: boolean;
    children?: void;
    dataAttributes?: DataAttributes;
};

const Tabs: React.FC<TabsProps> = ({
    selectedIndex,
    onChange,
    tabs,
    scrollable,
    solidBackground,
    roundedTopBorders,
    dataAttributes,
}: TabsProps) => {
    const { skin } = useTheme();
    const { onLayout } = useElementDimensions();
    const animatedLineRef = useRef<typeof Animated.View>(null);
    const tabsContainerRef = useRef<View>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const linePositionX = useRef(new Animated.Value(0)).current;
    const lineWidth = useRef(new Animated.Value(0)).current;
    const tabWidths = useRef<number[]>([]);
    const tabRefs = useRef<React.RefObject<View>[]>(tabs.map(() => useRef<View>(null)));

    const TAB_HEIGHT = 56;

    const tabStyles = StyleSheet.create({
        tabsContainer: {
            flexDirection: 'row',
            overflow: scrollable !== undefined ? (scrollable ? 'scroll' : 'hidden') : 'hidden',
            backgroundColor: solidBackground ? skin.colors.background : 'transparent',
            borderTopLeftRadius: roundedTopBorders ? 16 : 0,
            borderTopRightRadius: roundedTopBorders ? 16 : 0,

        },
        scrollableContainer: {
            borderTopLeftRadius: roundedTopBorders ? 16 : 0,
            borderTopRightRadius: roundedTopBorders ? 16 : 0,
        },
        baseTab: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 16,
            height: TAB_HEIGHT,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            borderBottomWidth: 2,
            borderBottomColor: skin.colors.divider,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            flexShrink: 1,
            columnGap: 8,
        },
        icon: {
            height: 24,
            width: 24,
        },
        tabWithIcon: {
            flexBasis: 112,
        },
        animatedLine: {
            position: 'absolute',
            bottom: 0,
            height: 4,
            borderTopRightRadius: 2,
            borderTopLeftRadius: 2,
            backgroundColor: skin.colors.controlActivated,
        },
    });

    const tabSelectionVariantStyles = StyleSheet.create({
        noSelected: {
            color: skin.colors.textSecondary,
        },
        selected: {
            borderBottomWidth: 4,
            borderBottomColor: skin.colors.controlActivated,
        },
        selectedAnimating: {
            borderBottomWidth: 2,
            borderBottomColor: 'transparent',
        },
    });

    useEffect(() => {   
        if (tabsContainerRef.current) {
            const newTabWidths: number[] = [];
            let cumulativeWidth = 0;
            tabsContainerRef.current.measure(() => {
                for (let i = 0; i < tabs.length; i++) {
                    tabRefs.current[i]?.current?.measureLayout(
                        tabsContainerRef.current!,
                        (x, y, tabWidth) => {
                            newTabWidths.push(tabWidth);
                            if (i === selectedIndex) {
                                linePositionX.setValue(cumulativeWidth);
                                lineWidth.setValue(tabWidth);
                            }
                            cumulativeWidth += tabWidth;
                            if (i === tabs.length - 1) {
                                tabWidths.current = newTabWidths;
                            }
                        }
                    );
                }
            });
        }
    }, [selectedIndex, tabs]);

    const animateLine = (toIndex: number) => {
        if (isAnimating || toIndex === selectedIndex) return;
        setIsAnimating(true);
        const newPosition = tabWidths.current
            .slice(0, toIndex + 1)
            .reduce((acc, val) => acc + val, 0) - tabWidths.current[toIndex];
        const newWidth = tabWidths.current[toIndex] || 0;
        console.log('linePositionX: ', linePositionX);
        console.log('newPosition: ', newPosition);
        Animated.parallel([
            Animated.timing(linePositionX, {
                toValue: newPosition,
                duration: LINE_ANIMATION_DURATION_MS,
                useNativeDriver: false,
            }),
            Animated.timing(lineWidth, {
                toValue: newWidth,
                duration: LINE_ANIMATION_DURATION_MS,
                useNativeDriver: false,
            }),
        ]).start(() => {
            setIsAnimating(false);
        });
    };


    return (
        <View role="tablist" onLayout={onLayout} ref={tabsContainerRef}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled={scrollable !== undefined ? scrollable : false}
                style={tabStyles.scrollableContainer}>
                <View style={tabStyles.tabsContainer}>
                    {tabs.map(({ text, icon, 'aria-controls': ariaControls }, index) => {
                        const isSelected = index === selectedIndex;
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => {
                                    if (!isAnimating && selectedIndex !== index) {
                                        onChange(index);
                                        animateLine(index);
                                    }
                                }}
                                disabled={isSelected}
                            >
                                <View
                                    style={[tabStyles.baseTab,
                                        isSelected
                                        ? isAnimating
                                            ? tabSelectionVariantStyles.selectedAnimating
                                            : tabSelectionVariantStyles.selected: null
                                    ]}
                                    aria-controls={ariaControls}
                                    ref={tabRefs.current[index]}
                                >
                                    {icon && <View style={tabStyles.icon}>{icon}</View>}
                                    <Text3 {...(isSelected ? { bold: true } : { regular: true })}>{text}</Text3>
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    })}
                    <Animated.View
                        ref={animatedLineRef}
                        style={[
                            tabStyles.animatedLine,
                            {
                                width: lineWidth,
                                transform: [{ translateX: linePositionX }],
                            },
                        ]}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Tabs;
