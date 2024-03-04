import {IconProps} from '../../../utils';

export interface IconButtonLayoutProps {
  icon?: React.ComponentType<IconProps>;
  inverse?: boolean;
  medium?: boolean;
  highlight?: boolean;
  light?: boolean;
  dark?: boolean;
  buttonsOptions: Array<{
    text: string;
    onPress?: () => void;
    icon?: React.ComponentType<IconProps>;
  }>;
}

export type LayoutIconButton = IconButtonLayoutProps;
