import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { DividerTypes } from './Divider.Types';

const Divider = ({isInverse}:DividerTypes) => {
  const { skin } = useTheme();
  const { divider, dividerInverse } = skin.colors;
 
  const styles = StyleSheet.create({
    default: {
      borderBottomWidth: 1,
      borderBottomColor: divider,
    },
    inverse: {
      borderBottomWidth: 1,
      borderBottomColor: dividerInverse,
    },
  });

  return <View style={styles[isInverse ? 'inverse' : 'default']} />;
};

export default Divider;