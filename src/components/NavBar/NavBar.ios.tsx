import React, {useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {useTheme} from '../../hooks/ThemeContextProvider';
import {Text4, Text7} from '../Text/Text';

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
      lineHeight: 32,
      opacity: displayMinimal ? 0 : opacity as unknown as number,
    },
    textSmall: {
      flex: 1,
      alignItems: 'center',
      opacity: displayMinimal ? 100 : opacitySmall as unknown as number,
      width: '100%',
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
          <Text7 color={textPrimaryInverse}>{headerTitle}</Text7>
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
