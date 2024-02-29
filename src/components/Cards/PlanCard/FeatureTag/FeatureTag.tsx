import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../../../utils/ThemeContextProvider';
import {Text2} from '../../../Text/Text';
import {IconProps} from '../../../../utils/types';

export type FeatureTagProps = {
  icon?: React.ComponentType<IconProps>;
  text?: string;
};

const FeatureTag = (props: FeatureTagProps) => {
  const {skin} = useTheme();
  const {backgroundBrand, inverse} = skin.colors;
  const Icon = props.icon as React.ComponentType<IconProps>;
  const iconComponent: JSX.Element = <Icon size={16} color={inverse} />;

  return (
    <View style={[styles.container, {backgroundColor: backgroundBrand}]}>
      <View style={styles.content}>
        {props.icon && <View style={{marginRight: 5}}>{iconComponent}</View>}
        {props.text && (
          <Text2 medium color={inverse}>
            {props.text}
          </Text2>
        )}
      </View>
    </View>
  );
};

export default FeatureTag;

const styles = StyleSheet.create({
  container: {
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {flexDirection: 'row', gap: 2},
});