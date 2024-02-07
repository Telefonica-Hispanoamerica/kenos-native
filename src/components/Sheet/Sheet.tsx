import React, { useRef, useEffect } from "react";
import {
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Dimensions,
  ScrollView,
  GestureResponderEvent,
  PanResponderGestureState,
} from "react-native";
import { useTheme } from "../../utils/ThemeContextProvider";


export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}


const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  const { height } = Dimensions.get("window");
  const translateY = useRef(new Animated.Value(isOpen ? 0 : height)).current;
  const { skin } = useTheme();
  const { background, control, coverBackgroundPressed } = skin.colors;


  const styles = StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: coverBackgroundPressed,
      justifyContent: "flex-end",
      elevation: 1,
      zIndex: 1,
    },
    bottomSheet: {
      backgroundColor: background,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      minHeight: 200, // Altura mínima del Sheet.
      maxHeight: Dimensions.get("window").height * 0.7, //La altura máxima no puede superar el 70% de la pantalla.
      zIndex: 2,
      elevation: 2,
    },
    draggableHandle: {
      height: 5,
      width: 40,
      backgroundColor: control,
      alignSelf: "center",
      marginVertical: 10,
      borderRadius: 5,
    },
    draggableHandleContainer: {
      height: 20,
      width: '100%',
      alignSelf: "center",
    },
    scrollContainer: {
      flexGrow: 1,
      zIndex: 2,
      elevation: 2,
    },
  });


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
    if (gestureState.dy > height * 0.2) {
      // Si arrastramos más del 20% de la pantalla hacia abajo, ocultamos el Sheet.
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
  };


  return (
    <>
      {isOpen && (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.overlay}
          onPress={handleClose}
        >
          <Animated.View style={[styles.bottomSheet, bottomSheetStyle]}>
            <View
              style={styles.draggableHandleContainer}
              {...panResponder.panHandlers}
            >
              <View
                style={styles.draggableHandle}
              />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              {children}
            </ScrollView>
          </Animated.View>
        </TouchableOpacity>
      )}
    </>
  );
};


export default BottomSheet;