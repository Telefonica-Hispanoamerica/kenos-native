import {StyleSheet} from 'react-native';

export const stylesPricing = StyleSheet.create({
  verticalContainer: {alignItems: 'center', marginBottom: 10},
  verticalPrice: {flexDirection: 'row'},
  verticalDuration: {flexDirection: 'row', justifyContent: 'space-between'},
  horizontalContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  horizontalPrice: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  horizontalDuration: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: 10,
  },
});
