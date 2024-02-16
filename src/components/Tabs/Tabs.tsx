import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider'
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
  children?: void;
  dataAttributes?: DataAttributes;
};

const Tabs: React.FC<TabsProps> = ({
  selectedIndex,
  onChange,
  tabs,
  dataAttributes,
}: TabsProps) => {
  const animatedLineRef = useRef<View>(null);
  const scrollableContainerRef = useRef<ScrollView>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const { skin } = useTheme();
  const getTabVariant = (numberOfTabs: number): keyof typeof tabVariantStyles => {
    switch (numberOfTabs) {
      case 2:
        return 'tabs2';
      case 3:
        return 'tabs3';
      default:
        return 'default';
    }
  };

  const animateLine = (fromIndex: number, toIndex: number) => {
    
  };

  const TAB_MAX_WIDTH = 284;
  const TAB_HEIGHT = 56;

  const outerStyles = {
    height: TAB_HEIGHT,
  };

  const innerStyles = {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 80,
  };

  const tabStyles = StyleSheet.create({
    outerBorder: {
      borderBottomWidth: 2,
      borderBottomColor: skin.colors.divider,
    },
    tabsContainer: {
      height: TAB_HEIGHT,
      flexDirection: 'row',
    },
    baseTab: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 16,
      paddingRight: 16,
      height: TAB_HEIGHT,
      backgroundColor: 'transparent',
      flex: 1,
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
    },
    tabWithIcon: {
      flexBasis: 112,
    },
    icon: {
      marginRight: 8,
      height: 24,
      width: 24,
    },
    animatedLine: {
      display: 'none',
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 2,
      background: skin.colors.controlActivated,
    },
  });

  const tabVariantStyles = StyleSheet.create({
    default: {
      ...tabStyles.baseTab,
      maxWidth: TAB_MAX_WIDTH,
    },
    tabs2: {
      ...tabStyles.baseTab,
      maxWidth: TAB_MAX_WIDTH * 0.5,
    },
    tabs3: {
      ...tabStyles.baseTab,
      maxWidth: TAB_MAX_WIDTH * (1 / 3),
    },
  });

  const tabSelectionVariantStyles = StyleSheet.create({
    noSelected: {},
    selected: {
      color: skin.colors.textPrimary,
      borderBottomWidth: 2,
      borderBottomColor: skin.colors.controlActivated,
    },
    selectedAnimating: {
      color: skin.colors.textPrimary,
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
    },
  });

  return (
    <View role="tablist" style={tabStyles.outerBorder}>
      <View>
        <View style={outerStyles}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={scrollableContainerRef}
          >
            <View style={tabStyles.tabsContainer}>
              {tabs.map(({ text, icon, 'aria-controls': ariaControls }, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => {
                      if (!isAnimating && selectedIndex !== index) {
                        onChange(index);
                        animateLine(selectedIndex, index);
                      }
                    }}
                    disabled={isSelected}
                  >
                    <View style={[
                      tabStyles.baseTab,
                      tabVariantStyles[getTabVariant(tabs.length)],
                      isSelected
                        ? isAnimating
                          ? tabSelectionVariantStyles.selectedAnimating
                          : tabSelectionVariantStyles.selected
                        : tabSelectionVariantStyles.noSelected,
                      icon && tabStyles.tabWithIcon,
                    ]}>
                      {icon && <View style={tabStyles.icon}>{icon}</View>}
                      <Text3 medium>{text}</Text3>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          </ScrollView>
          <View ref={animatedLineRef} />
        </View>
      </View>
    </View>
  );
};

export default Tabs;
