import { IconProps } from '../../utils';

export interface IconButtonProps {
  children?: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
  type?: IconButtonType;
  onPress: () => void;
}

export type IconButtonType =
  | 'inverse'
  | 'light'
  | 'medium'
  | 'highlight'
  | 'lightBlank';

export type IconTypeProps = IconButtonProps;


