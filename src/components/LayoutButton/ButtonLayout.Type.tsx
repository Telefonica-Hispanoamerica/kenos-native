import React from "react";

export interface ButtonsLayoutProps {
    primaryButton?: React.ReactNode;
    secondaryButton?: React.ReactNode;
    buttonLink?: React.ReactNode;
    primaryButtonText?:React.ReactNode
    secondaryButtonText?:React.ReactNode;
    linkText?:React.ReactNode;
    small?:boolean;
    onPress?: () => void;
  };

export type LayoutButtons = ButtonsLayoutProps