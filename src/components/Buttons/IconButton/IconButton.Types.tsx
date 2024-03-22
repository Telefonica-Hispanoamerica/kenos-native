import { StyleProp, ViewStyle } from 'react-native';
import { IconProps } from '../../../utils';

export interface IconButtonProps {
  children?: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
  type?: IconButtonType;
  sizeCircle?:number;
  sizeIcon?:number;
  iconColor?: string;
  inverse?:boolean;
  onPress?: () => void;
  styles?: StyleProp<ViewStyle>;
}

export type IconButtonType =
  | 'inverse'
  | 'light'
  | 'medium'
  | 'highlight'
  | 'darkLight'
  | 'lightBlank';

export type IconTypeProps = IconButtonProps;


