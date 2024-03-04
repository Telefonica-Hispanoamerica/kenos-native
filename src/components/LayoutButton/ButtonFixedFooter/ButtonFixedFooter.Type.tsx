import { IconProps } from "../../../utils";

export interface ButtonFixedFooterProps {
  buttonLink?: React.ReactNode;
  children?: React.ReactNode
  inverse?: boolean;
  light?: boolean; 
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