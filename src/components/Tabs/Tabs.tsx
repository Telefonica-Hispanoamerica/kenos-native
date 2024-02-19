import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View, Animated } from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { useElementDimensions } from '../../hooks/hooks';
import { DataAttributes } from '../../utils/types';
import { Text3 } from '../Text/Text';
import { IconArrowDropDownFilled } from '../../kenos-icons';

const LINE_ANIMATION_DURATION_MS = 200;

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
    variant: 'primary' | 'secondary' | 'arrow';
};

const Tabs: React.FC<TabsProps> = ({
    selectedIndex,
    onChange,
    tabs,
    scrollable,
    solidBackground,
    roundedTopBorders,
    dataAttributes,
    variant,
}: TabsProps) => {
    const { skin } = useTheme();
    const { onLayout } = useElementDimensions();
    const animatedLineRef = useRef<typeof Animated.View>(null);
    const tabsContainerRef = useRef<View>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const linePositionX = useRef(new Animated.Value(0)).current;
    const lineWidth = useRef(new Animated.Value(0)).current;
    const tabWidths = useRef<number[]>([]);
    const tabRefs = useRef<React.RefObject<View>[]>(
        tabs.map(() => useRef<View>(null)),
    );

    const TAB_HEIGHT = 56;

    const getTextColor = (
        isSelected: boolean,
        variant: 'primary' | 'secondary' | 'arrow',
    ) => {
        let selectedColor = '';
        let unselectedColor = '';
        switch (variant) {
            case 'primary':
                selectedColor = skin.colors.textPrimary;
                unselectedColor = skin.colors.textPrimary;
                break;
            case 'secondary':
                selectedColor = skin.colors.textPrimaryInverse;
                unselectedColor = skin.colors.textPrimary;
                break;
            case 'arrow':
                selectedColor = skin.colors.textPrimaryInverse;
                unselectedColor = skin.colors.textPrimary;
                break;
        }

        return isSelected ? selectedColor : unselectedColor;
    };

    const baseTabStyles = StyleSheet.create({
        baseContainer: {
            flexDirection: 'row',
            overflow:
                scrollable !== undefined
                    ? scrollable
                        ? 'scroll'
                        : 'hidden'
                    : 'hidden',
        },
        baseTab: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 16,
            height: TAB_HEIGHT,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            flexShrink: 1,
        },
        icon: {
            height: 24,
            width: 24,
        },
        scrollableContainer: {},
    });

    const tabStylesByVariant = {
        primary: StyleSheet.create({
            tabStyles: {
                ...baseTabStyles.baseTab,
                columnGap: 8,
                borderBottomWidth: 2,
                borderBottomColor: skin.colors.divider,
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
            },
            tabsContainer: {
                ...baseTabStyles.baseContainer,
                backgroundColor: solidBackground
                    ? skin.colors.background
                    : 'transparent',
                borderTopLeftRadius: roundedTopBorders ? 16 : 0,
                borderTopRightRadius: roundedTopBorders ? 16 : 0,
            },
            tabScrollable: {
                ...baseTabStyles.scrollableContainer,
                borderTopLeftRadius: roundedTopBorders ? 16 : 0,
                borderTopRightRadius: roundedTopBorders ? 16 : 0,
            },
            animatedLine: {
                position: 'absolute',
                bottom: 0,
                height: 4,
                borderTopRightRadius: 2,
                borderTopLeftRadius: 2,
                backgroundColor: skin.colors.controlActivated,
            },
            noSelected: {},
            selected: {
                borderBottomWidth: 4,
                borderBottomColor: skin.colors.controlActivated,
            },
            selectedAnimating: {
                borderBottomWidth: 2,
                borderBottomColor: 'transparent',
            },
            mainContent: {

            }
        }),
        secondary: StyleSheet.create({
            tabStyles: {
                ...baseTabStyles.baseTab,
                columnGap: 8,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: skin.colors.border,
            },
            tabsContainer: {
                ...baseTabStyles.baseContainer,
                backgroundColor: skin.colors.background,
                padding: 8,
                columnGap: 8,
            },
            tabScrollable: {
                ...baseTabStyles.scrollableContainer,
            },
            animatedLine: {},
            noSelected: {},
            selected: {
                backgroundColor: skin.colors.buttonPrimaryBackground,
            },
            selectedAnimating: {},
            mainContent: {

            }
        }),
        arrow: StyleSheet.create({
            tabStyles: {
                ...baseTabStyles.baseTab,
                paddingVertical: 12,
                flexDirection: 'column',
                height: 'auto',
                borderLeftWidth: 0.5,
                borderRightWidth: 0.5,
                borderColor: skin.colors.divider,
            },
            tabsContainer: {
                ...baseTabStyles.baseContainer,
                backgroundColor: skin.colors.background,
                borderRadius: 8,
            },
            tabScrollable: {
                ...baseTabStyles.scrollableContainer,
            },
            animatedLine: {},
            noSelected: {},
            selected: {
                backgroundColor: skin.colors.backgroundBrandSecondary,
            },
            selectedAnimating: {},
            firstTab: {
                borderLeftWidth: 0,
            },
            lastTab: {
                borderRightWidth: 0,
            },
            mainContent: {
                elevation: 0, // Añadir elevación para sombra en Android
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 10,
            }
        }),
    };

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
                        },
                    );
                }
            });
        }
    }, [selectedIndex, tabs]);

    const animateLine = (toIndex: number) => {
        if (isAnimating || toIndex === selectedIndex) return;
        setIsAnimating(true);
        const newPosition =
            tabWidths.current
                .slice(0, toIndex + 1)
                .reduce((acc, val) => acc + val, 0) - tabWidths.current[toIndex];
        const newWidth = tabWidths.current[toIndex] || 0;
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
        <View role="tablist" onLayout={onLayout} ref={tabsContainerRef} style={tabStylesByVariant[variant].mainContent}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled={scrollable !== undefined ? scrollable : false}
                style={tabStylesByVariant[variant].tabScrollable}>
                <View style={tabStylesByVariant[variant].tabsContainer}>
                    {tabs.map(({ text, icon, 'aria-controls': ariaControls }, index) => {
                        const isSelected = index === selectedIndex;
                        const isArrowVariant = variant === 'arrow';
                        const isFirstTab = index === 0;
                        const isLastTab = index === tabs.length - 1;
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => {
                                    if (!isAnimating && selectedIndex !== index) {
                                        onChange(index);
                                        animateLine(index);
                                    }
                                }}
                                disabled={isSelected}>
                                <View
                                    style={[
                                        tabStylesByVariant[variant].tabStyles,
                                        isArrowVariant && isFirstTab && tabStylesByVariant[variant].firstTab,
                                        isArrowVariant && isLastTab && tabStylesByVariant[variant].lastTab,
                                        isSelected
                                            ? isAnimating
                                                ? tabStylesByVariant[variant].selectedAnimating
                                                : tabStylesByVariant[variant].selected
                                            : null,
                                    ]}
                                    aria-controls={ariaControls}
                                    ref={tabRefs.current[index]}>
                                    {icon && <View style={baseTabStyles.icon}>{icon}</View>}
                                    <Text3
                                        color={getTextColor(isSelected, variant)}
                                        {...(isSelected ? { bold: true } : { regular: true })}>
                                        {text}
                                    </Text3>
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    })}
                    {variant === 'primary' && (
                        <Animated.View
                            ref={animatedLineRef}
                            style={[
                                tabStylesByVariant[variant].animatedLine,
                                {
                                    width: lineWidth,
                                    transform: [{ translateX: linePositionX }],
                                },
                            ]}
                        />
                    )}
                </View>
            </ScrollView>
            {variant === 'arrow' && (
                <View style={{ position: 'absolute', bottom: -12, left: '55%', height: 20, width: '100%' }}>
                    <IconArrowDropDownFilled></IconArrowDropDownFilled>
                </View>
            )}
        </View>
    );
};

export default Tabs;
