import React, { useState, useRef, ReactNode } from 'react';
import { View, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from '../../../utils/ThemeContextProvider';
import { getStylesSlideshow } from './Slideshow.css';

const { width } = Dimensions.get('window');

interface SlideshowProps {
  items: (string | ReactNode)[];
}

const Slideshow: React.FC<SlideshowProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<FlatList<any>>(null);
  const {skin} = useTheme();
  const styles = getStylesSlideshow(width,skin)

  const handlePrev = () => {
    if (currentIndex > 0 && carouselRef.current) {
      carouselRef.current.scrollToIndex({ index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1 && carouselRef.current) {
      carouselRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderIndicator = (index: number) => {
    const opacity = index === currentIndex ? 1 : 0.5; // Control de opacidad
    return (
      <View
        key={index}
        style={[
          styles.indicator,
          { opacity }, // Aplicar opacidad
          index === currentIndex && styles.activeIndicator,
        ]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <FlatList
          ref={carouselRef}
          data={items}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              {typeof item === 'string' ? (
                <Image source={{ uri: item }} style={styles.image} />
              ) : (
                item
              )}
            </View>
          )}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / width
            );
            setCurrentIndex(newIndex);
          }}
        />
        <View style={styles.indicatorContainer}>
          {items.map((_, index) => renderIndicator(index))}
        </View>
        <TouchableOpacity
          style={[styles.navButton, styles.prevButton]}
          onPress={handlePrev}
        >
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, styles.nextButton]}
          onPress={handleNext}
        >
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Slideshow;