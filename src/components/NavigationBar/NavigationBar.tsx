import React, {useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {useTheme} from '../../utils/ThemeContextProvider';
import {Text4, Text7} from '../Text/Text';

type NavigationBarProps = {
  title: string;
  children?: any;
  large?: boolean;
  inverse?: boolean;
  leftAction: JSX.Element;
  rightActions?: JSX.Element;
};

const NavigationBar = ({
  title,
  children,
  large,
  inverse,
  leftAction,
  rightActions,
}: NavigationBarProps) => {
  const {skin} = useTheme();
  const colors = skin.colors;
  const {navigationBarBackground, textNavigationBarPrimary} = colors;

  const textColor = inverse ? colors.textPrimary : textNavigationBarPrimary;
  const backgroundColor = inverse ? colors.inverse : navigationBarBackground;
  console.log('leftAction:', leftAction);
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
      height: !large ? 0 : 56,
      backgroundColor: backgroundColor,
      justifyContent: 'flex-end',
    },
    smallHeader: {
      height: 56,
      backgroundColor: backgroundColor,
      justifyContent: 'center',
      zIndex: 1,
    },
    smallHeaderContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    scrollView: {
      elevation: -1,
    },
    textBig: {
      marginLeft: 16,
      marginRight: 16,
      marginTop: 12,
      marginBottom: 12,
      // opacity: displayMinimal ? 0 : opacity,
    },
    textSmall: {
      flex: 1,
      marginLeft: 32,
      lineHeight: 24,
      // opacity: displayMinimal ? 100 : opacitySmall,
    },
    leftButtonContainer: {
      marginLeft: 16,
    },
    rightButtonContainer: {
      flexDirection: 'row',
      marginRight: 16,
      gap: 24,
    },
  });

  return (
    <View>
      <View style={styles.smallHeader}>
        <View style={styles.smallHeaderContent}>
          <View style={styles.leftButtonContainer}>
            {React.cloneElement(leftAction, {inverse})}
          </View>
          {!large && (
            <Animated.View style={styles.textSmall}>
              <Text4 medium color={textColor}>
                {title}
              </Text4>
            </Animated.View>
          )}
          <View style={styles.rightButtonContainer}>
            {rightActions &&
              React.Children.map(rightActions.props.children, child =>
                React.cloneElement(child, {inverse}),
              )}
          </View>
        </View>
      </View>
      <Animated.View style={[styles.bigHeader, {transform: [{translateY}]}]}>
        <Animated.View style={styles.textBig}>
          <Text7 color={textColor}>{title}</Text7>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          paddingBottom: !large ? 0 : 56,
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

export default NavigationBar;
