import React, {useState, useEffect} from 'react';
import {View, Animated} from 'react-native';
import {useTheme} from '../../utils/ThemeContextProvider';

const Skeleton = () => {
  const {skin} = useTheme();
  const {backgroundSkeleton} = skin.colors;
  const [fadeAnim] = useState(new Animated.Value(0.8));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.4,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
        backgroundColor: backgroundSkeleton,
      }}
    />
  );
};

type SkeletonCircleProps = {
  size: number;
};

const SkeletonCircle = ({size = 40}: SkeletonCircleProps) => {
  return (
    <View
      style={{
        height: size,
        width: size,
        borderRadius: 1000,
        overflow: 'hidden',
      }}>
      <Skeleton />
    </View>
  );
};

const SkeletonText = () => {
  return (
    <View style={{flexDirection: 'column', gap: 16}}>
      <SkeletonLine />
      <SkeletonLine />
      <SkeletonLine width="75%" />
    </View>
  );
};

type SkeletonLineProps = {
  width?: string | number;
};

const SkeletonLine = ({width = '100%'}: SkeletonLineProps) => {
  return (
    <View style={{height: 8, width, borderRadius: 800, overflow: 'hidden'}}>
      <Skeleton />
    </View>
  );
};

type SkeletonRectangleProps = {
  width?: string | number;
  height?: string | number;
  noBorderRadius: boolean;
};

const SkeletonRectangle = ({
  width = 100,
  height = 100,
}: SkeletonRectangleProps) => {
  return (
    <View style={{height, width, borderRadius: 8, overflow: 'hidden'}}>
      <Skeleton />
    </View>
  );
};

type SkeletonRowProps = {
  width?: string | number;
};

const SkeletonRow = ({width}: SkeletonRowProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <SkeletonCircle size={45} />
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 12,
          padding: 8,
          flex: 1,
        }}>
        <SkeletonLine width={width} />
      </View>
    </View>
  );
};

const ListSkeleton = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <SkeletonCircle size={45} />
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 12,
          padding: 8,
          flex: 1,
        }}>
        <SkeletonLine />
        <SkeletonLine width="40%" />
      </View>
    </View>
  );
};

type QuantityListSkeletonProps = {
  count?: number;
};

const QuantityListSkeleton = ({count = 1}: QuantityListSkeletonProps) => {
  const componentArray = Array.from({length: count}, (_, index) => index);
  return (
    <View style={{flexDirection: 'column', gap: 30}}>
      {componentArray.map(aComponent => (
        <ListSkeleton key={aComponent} />
      ))}
    </View>
  );
};

export {
  SkeletonCircle,
  SkeletonLine,
  ListSkeleton,
  QuantityListSkeleton,
  SkeletonRectangle,
  SkeletonText,
  SkeletonRow,
};
