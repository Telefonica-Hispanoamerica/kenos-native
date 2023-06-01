import React, {useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {useTheme} from '../../hooks/ThemeContextProvider';

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
  const {navigationBarBackground} = skin.colors;

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
      color: 'white',
      marginLeft: 16,
      marginRight: 16,
      fontWeight: '300',
      marginTop: 8,
      marginBottom: 8,
      fontSize: 24,
      opacity: displayMinimal ? 0 : opacity,
    },
    textSmall: {
      flex: 1,
      color: 'white',
      marginLeft: 12,
      fontWeight: '500',
      fontSize: 18,
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
          <Animated.Text numberOfLines={1} style={styles.textSmall}>
            {headerTitle}
          </Animated.Text>
          <View style={styles.rightButtonContainer}>{rightButtons}</View>
        </View>
      </View>
      <Animated.View style={[styles.bigHeader, {transform: [{translateY}]}]}>
        <Animated.Text numberOfLines={1} style={styles.textBig}>
          {headerTitle}
        </Animated.Text>
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
