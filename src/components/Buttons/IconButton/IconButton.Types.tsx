import { IconProps } from '../../../utils';

export interface IconButtonProps {
  children?: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
  type?: IconButtonType;
  topArea?:boolean;
  onPress?: () => void;
}

export type IconButtonType =
  | 'inverse'
  | 'light'
  | 'medium'
  | 'highlight'
  | 'darkLight'
  | 'lightBlank';

export type IconTypeProps = IconButtonProps;


