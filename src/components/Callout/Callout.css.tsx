import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  callout: {
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    overflow: 'hidden',
  },
  calloutIcon: {},
  calloutContent: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 0,
    flex: 1,
  },
  calloutTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Roboto-Regular',
    padding: 0,
    margin: 0,
  },
  calloutAction: {
    marginTop:0,
    alignItems: 'flex-end',
    position: 'relative',
  },
});
