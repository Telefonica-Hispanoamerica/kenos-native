import {StyleSheet} from 'react-native';

export const LABEL_LEFT_POSITION = 12;
export const DEFAULT_WIDTH = 328;

export const LABEL_SCALE_DESKTOP = 0.78;
export const LABEL_SCALE_MOBILE = 0.75;

export const styles = StyleSheet.create({

  labelContainer: {
    position: 'absolute',
    top: 0,
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    left: LABEL_LEFT_POSITION,
  },

  shrinked: {
    height: 16 / LABEL_SCALE_MOBILE,
    lineHeight: 16 / LABEL_SCALE_MOBILE,
    width: '100%',
  },

  helperContainer: {
    paddingLeft: 12,
    paddingRight: 16,
    display: 'flex',
  },

  helperText: {
    margin: 0,
    marginTop: 4,
    flexGrow: 1,
  },

  leftText: {
    textAlign: 'left',
  },

  rightText: {
    textAlign: 'right',
  },

  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 96,
    borderRadius: 8,
  },

  fullWidth: {
    width: '100%',
  },

  normalWidth: {
    width: 328,
  },

  disabled: {
    opacity: 0.5,
  },

  field: {
    overflow: 'hidden',
    display: 'flex',
    position: 'relative',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#737578',
  },

  fieldMulti: {
    height: 152,
  },

  fieldSingle: {
    height: 56,
  },

  labelText: {
    overflow: 'hidden',
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    fontSize: 16,
    lineHeight: 24,
  },
});
