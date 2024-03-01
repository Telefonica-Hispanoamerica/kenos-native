import React, { useState, useEffect, useCallback } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Dimensions } from 'react-native';

export const useElementDimensions = (): {
  width: number;
  height: number;
  onLayout: (event: LayoutChangeEvent) => void;
} => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width: newWidth, height: newHeight } = event.nativeEvent.layout;
    setWidth(newWidth);
    setHeight(newHeight);
  }, []);

  return { width, height, onLayout };
};
