import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  ScrollView,
  View
} from "react-native";
import { useTheme } from "../../utils/ThemeContextProvider";
import { styles } from "./Sheet.css";
import { SheetHeader } from "./SheetHeader/SheetHeader";

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  const { height } = Dimensions.get("window");
  const translateY = useRef(new Animated.Value(isOpen ? 0 : height)).current;
  const { skin } = useTheme();
  const { background, control, backgroundOverlay } = skin.colors;

  useEffect(() => {
    if (isOpen) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [isOpen]);

  const handleOpen = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(onClose);
  };

  const handlePanResponderMove = (
    _: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => {
    translateY.setValue(Math.min(Math.max(gestureState.dy, 0), height - 100));
  };

  const handlePanResponderRelease = (
    _: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => {
    // Si arrastramos más del 20% de la pantalla hacia abajo, ocultamos el Sheet.
    if (gestureState.dy > height * 0.2) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderRelease,
    })
  ).current;

  const bottomSheetStyle = {
    transform: [{ translateY }],
    backgroundColor: background,
    maxHeight: Dimensions.get("window").height * 0.7
  };


  return (
    <>
      {isOpen && (
        <View style={[
          styles.overlay,
          { backgroundColor: backgroundOverlay }
        ]}>
          <Animated.View style={[
            styles.bottomSheet,
            bottomSheetStyle,
          ]}>
            <SheetHeader
              panHandlers={panResponder.panHandlers}
              color={control}
              dismisable={true}
            />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              {children}
            </ScrollView>
          </Animated.View>
        </View>
      )}
    </>
  );
};


export default BottomSheet;