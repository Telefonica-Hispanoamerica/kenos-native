import React, {useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {useTheme} from '../../utils/ThemeContextProvider';
import {Text4, Text6} from '../Text/Text';

type NavBarProps = {
  headerTitle: string;
  children: any;
  displayMinimal: boolean;
  leftButton: JSX.Element;
  rightButtons: JSX.Element;
};

const NavBar = ({
  headerTitle,
  children,
  displayMinimal,
  leftButton,
  rightButtons,
}: NavBarProps) => {
  const {skin} = useTheme();
  const {navigationBarBackground, textPrimaryInverse} = skin.colors;

  const scrollY = useRef(new Animated.Value(0)).current;
  const translateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -56],
    extrapolate: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const opacitySmall = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const styles = StyleSheet.create({
    bigHeader: {
      height: displayMinimal ? 0 : 53,
      backgroundColor: navigationBarBackground,
      justifyContent: 'flex-end',
    },
    smallHeader: {
      height: 56,
      backgroundColor: navigationBarBackground,
      justifyContent: 'center',
      zIndex: 1,
    },
    scrollView: {
      elevation: -1,
    },
    textBig: {
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
      marginBottom: 8,
      opacity: displayMinimal ? 0 : opacity,
    },
    textSmall: {
      flex: 1,
      marginLeft: 12,
      lineHeight: 24,
      opacity: displayMinimal ? 100 : opacitySmall,
    },
    leftButtonContainer: {
      marginLeft: 8,
    },
    rightButtonContainer: {
      flexDirection: 'row',
      marginRight: 8,
      gap: 8,
    },
  });

  return (
    <View>
      <View style={styles.smallHeader}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.leftButtonContainer}>{leftButton}</View>
          <Animated.View style={styles.textSmall}>
            <Text4 medium color={textPrimaryInverse}>
              {headerTitle}
            </Text4>
          </Animated.View>
          <View style={styles.rightButtonContainer}>{rightButtons}</View>
        </View>
      </View>
      <Animated.View style={[styles.bigHeader, {transform: [{translateY}]}]}>
        <Animated.View style={styles.textBig}>
          <Text6 color={textPrimaryInverse}>{headerTitle}</Text6>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          paddingBottom: displayMinimal ? 0 : 53,
          flexGrow: 1,
        }}
        bounces={false}
        style={[styles.scrollView, {transform: [{translateY}]}]}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        {children}
      </Animated.ScrollView>
    </View>
  );
};

export default NavBar;
