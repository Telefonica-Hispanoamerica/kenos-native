export interface CalloutProps {
    actionText?: string;
    dismissable?: boolean;
    dismissableAction?: () => void;
    icon?: boolean;
    inverse: boolean;
    size: Sizes;
    text: string;
    title?: string;
    type: UrgencyType;
    onClose?: () => void;
    linkText?: string;
    linkAction?: () => void;
}

export type UrgencyType = "general" | "info" | "success" | "warning" | "danger";
export type Sizes = "large" | "small";

export interface CalloutTheme {
    iconName: any;
    color: string;
    borderColor?: string;
    bgColor?: string;
}
export type TypeCallout = {
    [key in UrgencyType]: CalloutTheme;
};

export interface CalloutIconProps {
    iconName?: React.ComponentType;
    color: string;
    bgColor?: string;
    size?: number | string;
    inverse?: boolean;
  }