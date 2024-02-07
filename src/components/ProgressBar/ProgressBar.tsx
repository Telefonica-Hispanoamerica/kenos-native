import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {useTheme} from '../../utils/ThemeContextProvider';

type Props = {
  progressPercent: number;
  color?: string;
  reverse?: boolean;
};

const ProgressBar = ({progressPercent, color}: Props) => {
  const [progress, setProgress] = useState(new Animated.Value(progressPercent));
  const {skin} = useTheme();
  const {control, controlActivated} = skin.colors;
  const bar = skin.borderRadii?.bar || '0px';
  const barRN = parseFloat(bar.replace(/px/g, ''));

  const styles = StyleSheet.create({
    barBackground: {
      width: '100%',
      height: 4,
      backgroundColor: control,
      borderRadius: barRN,
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      backgroundColor: color ? color : controlActivated,
      borderRadius: barRN,
    },
  });

  useEffect(() => {
    Animated.timing(progress, {
      toValue: progressPercent,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progressPercent]);

  return (
    <View style={styles.barBackground}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: progress.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;
