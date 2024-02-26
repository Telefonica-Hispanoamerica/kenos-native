import React, {useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {default as RNVideo} from 'react-native-video';
import { AspectRatio, RATIO } from '../Primitives.Types';


export type VideoProps = {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: 'none' | 'auto' | 'metadata';
  aspectRatio?: AspectRatio | number;
  dataAttributes?: object;
  width?: string | number;
  height?: string | number;
};

const Video = React.forwardRef<RNVideo, VideoProps>(
  (
    {
      src,
      poster,
      autoPlay = true,
      muted = true,
      loop = true,
      preload = 'none',
      aspectRatio = 0,
      dataAttributes,
      ...props
    },
    ref,
  ) => {
    const videoRef = useRef<RNVideo>(null);

    useEffect(() => {
      const video = videoRef.current;
      if (video && autoPlay) {
        videoRef.current.seek(0); // Reinicia el video al principio
        videoRef.current.setState({paused: !autoPlay});
      }
    }, [autoPlay]);

    const ratio =
      typeof aspectRatio === 'number' ? aspectRatio : RATIO[aspectRatio];

    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            width: props.width,
            height: props.height,
          },
        ]}>
        <RNVideo
          ref={videoRef}
          source={{uri: src}}
          style={{flex: 1}}
          muted={muted}
          repeat={loop}
          resizeMode="cover"
          poster={poster}
          onLoadStart={() => preload !== 'none'}
          paused={!autoPlay}
        />
      </View>
    );
  },
);

export default Video;
