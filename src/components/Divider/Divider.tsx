import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';

const Divider = () => {
  const { skin } = useTheme();
  const { divider, dividerInverse } = skin.colors;
  const isInverse = false; //TODO: Add an isInverse implementation in the future.

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