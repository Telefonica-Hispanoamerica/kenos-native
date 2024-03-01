import { IconProps } from "../../utils";

export interface IconButtonLayoutProps {
    icon?: React.ComponentType<IconProps>;
    inverse?: boolean;
    medium?: boolean;
    highlight?: boolean;
    light?: boolean;
    dark?:boolean;
    onPress?: () => void;
    buttonsOptions: Array<{
      text: string,
      icon?: React.ComponentType<IconProps>
    }>;
  };


export type LayoutIconButton = IconButtonLayoutProps