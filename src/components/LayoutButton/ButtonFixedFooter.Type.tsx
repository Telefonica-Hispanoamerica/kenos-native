
export interface ButtonFixedFooterProps {
    children?:React.ReactNode
    inverse?: boolean;
    medium?: boolean;
    highlight?: boolean;
    light?: boolean;
    primary?:boolean;
    secondary?:boolean;
    addLink?:boolean;
    onPress?: () => void;
  };

export type ButtonFixedFooterLayout = ButtonFixedFooterProps