import React, { useState, useEffect } from 'react';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../utils/ThemeContextProvider';
import { getStylesCarousel } from './Carousel.css';

const { width } = Dimensions.get('window');

interface CarouselProps {
  items: (React.ReactNode | string)[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [containerWidth, setContainerWidth] = useState(width);
  const [totalItems, setTotalItems] = useState(0);
  const {skin} = useTheme();
  const styles = getStylesCarousel(skin)

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(Dimensions.get('window').width);
    };
    Dimensions.addEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    setTotalItems(items.length);
  }, [items]);

  const handleScroll = (event: any) => {
    const slideSize = containerWidth;
    const { contentOffset } = event.nativeEvent;
    const index = Math.floor(contentOffset.x / slideSize);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {items.map((item, index) => (
          <View key={index} style={[styles.slide, { width: containerWidth - 20, marginHorizontal: 10 }]}>
            {item}
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {Array.from({ length: totalItems }).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.paginationDot, index === activeIndex && styles.paginationDotActive]}
            onPress={() => setActiveIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};


export default Carousel;
