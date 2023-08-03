import React from 'react';
import {ScrollView} from 'react-native';

type Props = {
  children: React.ReactNode;
  noScrollbar?: boolean;
};

const HorizontalScroll = React.forwardRef<ScrollView, Props>(
  ({children, noScrollbar}: Props, ref) => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsHorizontalScrollIndicator={!noScrollbar}
        ref={ref}
        horizontal
        style={{
          overflow: 'hidden',
          display: 'flex',
          flexGrow: 1,
        }}>
        {children}
      </ScrollView>
    );
  },
);

export default HorizontalScroll;
