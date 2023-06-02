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
    outputRange: [0, -62],
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
      height: displayMinimal ? 0 : 62,
      backgroundColor: navigationBarBackground,
      justifyContent: 'flex-end',
    },
    smallHeader: {
      height: 37,
      backgroundColor: navigationBarBackground,
      justifyContent: 'center',
      zIndex: 1,
    },
    scrollView: {
      elevation: -1,
    },
    textBig: {
      marginTop: 'auto',
      color: 'white',
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 4,
      fontWeight: '300',
      fontSize: 28,
      lineHeight: 32,
      opacity: displayMinimal ? 0 : opacity,
    },
    textSmall: {
      flex: 1,
      color: 'white',
      marginLeft: 12,
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 24,
      textAlign: 'center',
      opacity: displayMinimal ? 100 : opacitySmall,
      width: 215,
    },
    leftButtonContainer: {
      marginLeft: 10,
    },
    rightButtonContainer: {
      flexDirection: 'row',
      marginRight: 10,
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
