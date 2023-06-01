import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

type CircleProps = {
  backgroundColor?: string;
  backgroundImage?: string;
  size?: number | string;
  children?: React.ReactElement;
};

export const Circle = ({
  backgroundColor,
  backgroundImage,
  size,
  children,
}: CircleProps) => {
  return (
    <ImageBackground
      style={{...styles.circle, backgroundColor, width: size, height: size}}
      imageStyle={{}}
      source={{uri: backgroundImage}}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  circle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    overflow: 'hidden',
  },
});
