import { IconProps } from "../../utils";

export interface ButtonFixedFooterProps {
  children?: React.ReactNode
  primaryButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
  addLink?: boolean;
  shadow?: boolean;
  primaryButtonText?:React.ReactNode
  secondaryButtonText?:React.ReactNode;
  linkText?:React.ReactNode;
  buttonLink?: React.ReactNode;
  inverse?: boolean;
  medium?: boolean;
  highlight?: boolean;
  iconButton?: boolean;
  light?: boolean;
  primary?: boolean;
  secondary?: boolean;
  buttonsOptions: Array<{
    text: string,
    icon?: React.ComponentType<IconProps>
  }>
  onPress?: () => void;
};

export type ButtonFixedFooterLayout = ButtonFixedFooterProps