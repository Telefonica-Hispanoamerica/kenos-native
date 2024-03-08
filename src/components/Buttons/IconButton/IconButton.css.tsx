import {StyleSheet} from 'react-native';
import {IconTypeProps} from './IconButton.Types';

export const styles = (props: IconTypeProps, background: string) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    circle: {
      width: props.sizeCircle ?? 40,
      height: props.sizeCircle ?? 40,
      backgroundColor: background,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textButton: {
      paddingTop: 5,
    },
  });
};
