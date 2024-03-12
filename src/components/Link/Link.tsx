import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, StyleProp, TextStyle } from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { getStylesLink } from './Link.css';

interface LinkProps extends TouchableOpacityProps {
  onPress: () => void;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const Link: React.FC<LinkProps> = ({ onPress, children, style }) => {
  const {skin} = useTheme();
  const styles = getStylesLink(skin.colors)
  return (
    <TouchableOpacity onPress={onPress} style={[styles.link, style]}>
      <Text style={styles.linkText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Link;