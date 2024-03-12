import React, {useEffect, useRef, useState} from 'react';
import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Svg, {G, Circle, Rect, Path} from 'react-native-svg';
import {DonutsProps} from './Donuts.Types';
import { styles } from './Donuts.css';


const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedPath= Animated.createAnimatedComponent(Path);


export const Donuts = (props: DonutsProps) => {
  const {
    percentage,
    color,
    max,
    delay,
    radius,
    strokeWidth,
    duration,
    textColor,
  } = props;


  return (
    <View style={styles.container}>
       <View style={styles.card}>
          <Svg width="90" height="48" viewBox="0 0 90 48" fill="none">
            <Path d="M87 45C87 21.804 68.196 3 45 3C21.804 3 3 21.804 3 45" stroke="#F6F6F6" strokeWidth="5" strokeLinecap="round"/>
            <Path d="M3 45C3 44.3304 3 43.6636 3 43" stroke="#FF374A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
       </View>
    </View>
  );
};
