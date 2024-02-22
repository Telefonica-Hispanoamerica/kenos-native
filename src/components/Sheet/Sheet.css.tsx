import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        //backgroundColor: backgroundOverlay, //TODO: Revisar opacidad del color con Sergio
        justifyContent: "flex-end",
        elevation: 1,
        zIndex: 1,
      },
      bottomSheet: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        minHeight: 200, // Altura mínima del Sheet.
        zIndex: 2,
        elevation: 2,
      },
      draggableHandle: {
        height: 5,
        width: 40,
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