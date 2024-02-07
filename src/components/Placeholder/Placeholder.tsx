import {View} from 'react-native';
import Svg, {Line, Path} from 'react-native-svg';
import {applyAlpha} from '../../utils/color';
import {useTheme} from '../../utils/ThemeContextProvider';

type PlaceholderProps = {
  width?: string | number;
  height?: string | number;
  children?: void;
};

function Placeholder({width = 'auto', height = 120}: PlaceholderProps) {
  const {skin} = useTheme();
  const {colors} = skin;
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: applyAlpha(colors.neutralHigh, 0.08),
        borderColor: applyAlpha(colors.neutralHigh, 0.3),
        borderWidth: 2,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Svg
        style={{
          flex: 1,
        }}>
        <Line
          x2="100%"
          y2="100%"
          strokeWidth={2}
          stroke={applyAlpha(colors.neutralHigh, 0.08)}
        />
        <Line
          x1="100%"
          y2="100%"
          strokeWidth={2}
          stroke={applyAlpha(colors.neutralHigh, 0.08)}
        />
      </Svg>
    </View>
  );
}

export default Placeholder;
