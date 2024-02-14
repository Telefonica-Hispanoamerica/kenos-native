import * as React from 'react';
import {
  AccessibilityRole,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {DataAttributes} from '../../utils/types';
import {getPrefixedDataAttributes} from '../../utils/dom';

type Props = {
  space:
    | 0
    | 2
    | 4
    | 8
    | 12
    | 16
    | 24
    | 32
    | 40
    | 48
    | 56
    | 64
    | 72
    | 80
    | 'between'
    | 'around'
    | 'evenly';
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  role?: AccessibilityRole;
  'aria-labelledby'?: string;
  dataAttributes?: DataAttributes;
};

const styles = StyleSheet.create({
  marginStack: {},
  flexStack: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: 1,
  },
});

const Stack: React.FC<Props> = props => {
  const {space, style, children, role} = props;
  const isNumeric = typeof space === 'number';

  const stylesView = StyleSheet.flatten([
    style,
    isNumeric ? styles.marginStack : styles.flexStack,
    isNumeric ? {margin: space} : {justifyContent: `space-${space}`},
  ]);

  return (
    <View
      accessibilityRole={role}
      style={stylesView}
      aria-labelledby={props['aria-labelledby']}
      {...getPrefixedDataAttributes(props.dataAttributes)}>
      {React.Children.map(children, child => (
        <>{child}</>
      ))}
    </View>
  );
};

export default Stack;
