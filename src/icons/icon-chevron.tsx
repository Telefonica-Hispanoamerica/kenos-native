import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '../utils/ThemeContextProvider';
import {StyleProp, ViewStyle} from 'react-native';

type IcnChevronRightSvgProps = {
  size: number;
  color: string;
  transform: string;
  style?: StyleProp<ViewStyle>;
};

function IconChevronRightSvg(props: IcnChevronRightSvgProps) {
  return (
    <Svg
      style={props.style}
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24">
      <Path
        fill={props.color}
        fillRule="evenodd"
        d="M14.338 11.478a.75.75 0 010 1.044l-3.837 3.997a.75.75 0 11-1.082-1.038L12.76 12 9.42 8.52a.75.75 0 011.082-1.04l3.837 3.998z"
        transform={props.transform}
      />
    </Svg>
  );
}

type Direction = 'up' | 'down' | 'left' | 'right';

const rotateAngleByDirection: Record<Direction, number> = {
  up: -90,
  down: 90,
  left: 180,
  right: 0,
};

type Props = {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  direction?: Direction;
};

const IconChevron: React.FC<Props> = ({
  size = 24,
  color,
  style,
  direction = 'right',
}) => {
  const vars = useTheme().skin;
  const fillColor = color || vars.colors.neutralHigh;
  const props = {
    size,
    color: fillColor,
    transform: `rotate(${rotateAngleByDirection[direction]} 12 12)`,
    style,
  };

  return <IconChevronRightSvg {...props} />;
};

export default IconChevron;
