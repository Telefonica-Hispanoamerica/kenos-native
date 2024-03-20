import React from 'react';
import {View} from 'react-native';
import {DoubleFieldProps} from './DoubleField.Types';
import {styles} from './DoubleField.css';

const DoubleField = ({leftField, rightField, layout}: DoubleFieldProps) => {
  const [leftWidth, rightWidth] = layout
    .split('/')
    .map(value => parseInt(value));

  return (
    <View style={styles.container}>
      <View style={[styles.leftField, {width: `${leftWidth}%`}]}>
        {leftField}
      </View>
      <View style={[styles.rightField, {width: `${rightWidth}%`}]}>
        {rightField}
      </View>
    </View>
  );
};

export default DoubleField;
