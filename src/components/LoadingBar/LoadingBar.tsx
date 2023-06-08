import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated, Easing, Dimensions} from 'react-native';
import {useTheme} from '../../hooks/ThemeContextProvider';

const LoadingBar = () => {
  const [animation] = useState(new Animated.Value(0));
  const windowWidth = Dimensions.get('window').width;
  const barWidth = windowWidth * 0.8;

  const {skin} = useTheme();
  const {loadingBar, loadingBarBackground} = skin.colors;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: false, // Cambiado a false
      }),
    ).start();
  };

  const styles = StyleSheet.create({
    container: {
      overflow: 'hidden',
      width: '100%',
      backgroundColor: loadingBarBackground,
      height: 4,
    },
    bar: {
      width: '100%',
      position: 'absolute',
      height: 4,
      backgroundColor: loadingBar,
    },
  });

  const barTranslateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-barWidth, windowWidth],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.bar,
          {width: barWidth, transform: [{translateX: barTranslateX}]},
        ]}
      />
    </View>
  );
};

export default LoadingBar;
