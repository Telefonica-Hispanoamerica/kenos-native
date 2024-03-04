import { IconProps } from "../../../utils";

export interface ButtonFixedFooterProps {
  buttonLink?: React.ReactNode;
  children?: React.ReactNode
  highlight?: boolean; 
  inverse?: boolean;
  light?: boolean; 
  medium?: boolean;
  primaryButton?: React.ReactNode;
  secondaryButton?: React.ReactNode; 
  shadow?: boolean; 
  buttonsOptions: Array<{
    text: string,
    onPress?: () => void;
    icon?: React.ComponentType<IconProps>
  }>  
};

export type ButtonFixedFooterLayout = ButtonFixedFooterProps