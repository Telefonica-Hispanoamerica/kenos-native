import { IconProps } from '../../../utils';

interface IconButtonProps {
  children?: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
  type?:SocialMediaButtonType;
  text?:string;
  small?:boolean;
  rounded?:boolean;
}

export type SocialMediaButtonType =
  | 'largeButton'
  | 'circleButton'
  | 'largeButtonRounded'
  | 'squareButton';

export type SocialMediaButtonProps = IconButtonProps;