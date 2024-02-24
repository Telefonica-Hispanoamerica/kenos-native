import { IconProps } from '../../utils';

export interface IconButtonProps {
  children?: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
  type?:IconButtonType;
  text?:string;
  small?:boolean;
  rounded?:boolean;
}

export type IconButtonType =
  | 'largeButton'
  | 'circleButton'
  | 'largeButtonRounded'
  | 'squareButton';

export type IconTypeProps = IconButtonProps;