import React, { useRef, useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Animated
} from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { useElementDimensions } from '../../hooks/hooks';
import { DataAttributes } from '../../utils/types';
import { Text2, Text3 } from '../Text/Text';

const LINE_ANIMATION_DURATION_MS = 200;
type TabsProps = {
  selectedIndex: number;
  onChange: (selectedIndex: number) => void;
  tabs: ReadonlyArray<{
    readonly text: string;
    readonly icon?: React.ReactNode;
    readonly 'aria-controls'?: string;
  }>;
  background?: boolean;
  rounded?: boolean;
  scrollable?: boolean;
  children?: void;
  dataAttributes?: DataAttributes;
  variant: 'primary' | 'secondary' | 'arrow';
};
const Tabs: React.FC<TabsProps> = ({
  selectedIndex, onChange, tabs, scrollable, background, rounded, dataAttributes, variant,
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
    tabs.map(() => useRef<View>(null))
  );

  const colorMap = {
    primary: {
      selected: skin.colors.textPrimary,
      unselected: skin.colors.textPrimary,
    },
    secondary: {
      selected: skin.colors.textPrimaryInverse,
      unselected: skin.colors.textPrimary,
    },
    arrow: {
      selected: skin.colors.textPrimaryInverse,
      unselected: skin.colors.textPrimary,
    },
  };

  const getTextColor = (
    isSelected: boolean,
    variant: 'primary' | 'secondary' | 'arrow'
  ) => {
    const { selected, unselected } = colorMap[variant];
    return isSelected ? selected : unselected;
  };

  const TAB_HEIGHT = 56;

  const baseTabStyles = StyleSheet.create({
    baseMainContainer: {},
    baseContainer: {
      flexDirection: 'row',
      overflow: scrollable !== undefined
        ? scrollable
          ? 'scroll'
          : 'hidden'
        : 'hidden',
    },
    baseTab: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      height: TAB_HEIGHT,
      paddingHorizontal: 16,
      flexShrink: 1,
    },
    iconTab: {
      height: 24,
      width: 24,
    },
    scrollableContainer: {},
  });

  const variantTabStyles = {
    primary: StyleSheet.create({
      mainContainerTabs: {
        height: TAB_HEIGHT,
      },
      containerTabs: {
        ...baseTabStyles.baseContainer,
        backgroundColor: background ? skin.colors.background : 'transparent',
        borderTopLeftRadius: rounded ? 16 : 0,
        borderTopRightRadius: rounded ? 16 : 0,
      },
      optionTabs: {
        ...baseTabStyles.baseTab,
        minWidth: 100,
        columnGap: 8,
        borderBottomWidth: 2,
        borderBottomColor: skin.colors.divider,
      },
      scrollableTabs: {
        ...baseTabStyles.scrollableContainer,
        borderTopLeftRadius: rounded ? 16 : 0,
        borderTopRightRadius: rounded ? 16 : 0,
      },
      selectedTab: {
        borderBottomWidth: 4,
        borderBottomColor: skin.colors.controlActivated,
      },
    }),
    secondary: StyleSheet.create({
      mainContainerTabs: {
        height: TAB_HEIGHT,
        backgroundColor: skin.colors.background,
      },
      containerTabs: {
        ...baseTabStyles.baseContainer,
        padding: 8,
        columnGap: 8,
      },
      optionTabs: {
        ...baseTabStyles.baseTab,
        minWidth: 100,
        height: 40,
        columnGap: 8,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: skin.colors.border,
      },
      scrollableTabs: {
        ...baseTabStyles.scrollableContainer,
      },
      selectedTab: {
        backgroundColor: skin.colors.buttonPrimaryBackground,
      },
    }),
    arrow: StyleSheet.create({
      mainContainerTabs: {
        backgroundColor: skin.colors.background,
        borderRadius: 8,
        height: 68,
        elevation: 0,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      containerTabs: {
        ...baseTabStyles.baseContainer,
        borderRadius: 8,
      },
      optionTabs: {
        ...baseTabStyles.baseTab,
        paddingVertical: 12,
        flexDirection: 'column',
        minWidth: 75,
        height: '100%',
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: skin.colors.divider,
      },
      scrollableTabs: {
        ...baseTabStyles.scrollableContainer,
      },
      selectedTab: {
        backgroundColor: skin.colors.backgroundBrandSecondary,
      },
    }),
  };

  const specificTabStyles = {
    primary: StyleSheet.create({
      animatedLineTabs: {
        position: 'absolute',
        bottom: 0,
        height: 4,
        borderTopRightRadius: 2,
        borderTopLeftRadius: 2,
        backgroundColor: skin.colors.controlActivated,
      },
      selectedAnimatingTab: {
        borderBottomWidth: 4,
        borderBottomColor: 'transparent',
      },
    }),
    arrow: StyleSheet.create({
      firstTab: {
        borderLeftWidth: 0,
      },
      lastTab: {
        borderRightWidth: 0,
      },
    }),
  };

  useEffect(() => {
    const allTabsMounted = tabRefs.current.every(ref => ref.current !== null);
    if (tabsContainerRef.current && allTabsMounted) {
      const newTabWidths: number[] = [];
      let cumulativeWidth = 0;
      const measureTabs = (index: number) => {
        if (index >= tabs.length) {
          tabWidths.current = newTabWidths;
          animateLine(selectedIndex);
          return;
        }

        const tabRef = tabRefs.current[index];
        tabRef.current?.measureLayout(
          tabsContainerRef.current!,
          (x, y, width) => {
            newTabWidths.push(width);
            cumulativeWidth += width;
            if (index === selectedIndex) {
              linePositionX.setValue(cumulativeWidth - width);
              lineWidth.setValue(width);
            }
            measureTabs(index + 1);
          },
          () => {
            console.error("Error al medir la pestaña");
          }
        );
      };

      // Iniciar la medición desde la primera pestaña
      measureTabs(0);
    }
  }, [selectedIndex, tabs.length]); // Dependencias del useEffect

  const animateLine = (toIndex: number) => {
    if (isAnimating || toIndex === selectedIndex) return;
    setIsAnimating(true);
    const newPosition = tabWidths.current
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
    <View
      role="tablist"
      onLayout={onLayout}
      ref={tabsContainerRef}
      style={variantTabStyles[variant].mainContainerTabs}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={scrollable !== undefined ? scrollable : false}
        style={variantTabStyles[variant].scrollableTabs}>
        <View style={variantTabStyles[variant].containerTabs}>
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
                    if (variant === 'primary') {
                      animateLine(index);
                    }
                  }
                }}
                disabled={isSelected}>
                <View
                  style={[
                    variantTabStyles[variant].optionTabs,
                    isArrowVariant &&
                    isFirstTab &&
                    specificTabStyles.arrow.firstTab,
                    isArrowVariant &&
                    isLastTab &&
                    specificTabStyles.arrow.lastTab,
                    isSelected
                      ? isAnimating
                        ? specificTabStyles.primary.selectedAnimatingTab
                        : variantTabStyles[variant].selectedTab
                      : null,
                  ]}
                  aria-controls={ariaControls}
                  ref={tabRefs.current[index]}>
                  {icon && (
                    <View style={baseTabStyles.iconTab}>
                      {React.cloneElement(icon as React.ReactElement, {
                        color: isSelected && variant !== 'primary'
                          ? skin.colors.inverse
                          : undefined,
                      })}
                    </View>
                  )}
                  {variant !== 'arrow' ? (
                    <Text3
                      color={getTextColor(isSelected, variant)}
                      {...(isSelected ? { bold: true } : { regular: true })}>
                      {text}
                    </Text3>
                  ) : (
                    <Text2
                      color={getTextColor(isSelected, variant)}
                      {...(isSelected ? { bold: true } : { medium: true })}>
                      {text}
                    </Text2>
                  )}
                </View>
              </TouchableWithoutFeedback>
            );
          })}
          {variant === 'primary' && (
            <Animated.View
              ref={animatedLineRef}
              style={[
                specificTabStyles.primary.animatedLineTabs,
                {
                  width: lineWidth,
                  transform: [{ translateX: linePositionX }],
                },
              ]} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};
export default Tabs;
