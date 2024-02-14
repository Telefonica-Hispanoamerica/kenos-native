import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dismissableContainer: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    flexShrink: 0,
  },
  dismissableButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  dismissableCircleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: 50,
    margin: '0 0 8px 8px',
  },
});
