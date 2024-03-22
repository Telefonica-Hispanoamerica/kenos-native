import React from "react";
import { IconProps } from "../../../utils";

export interface SheetHeaderSharedProps {
    icon?: React.ComponentType<IconProps>;
    title: string;
    subtitle?: string;
    rightAction?:{
        icon: React.ComponentType<IconProps>;
        onPress: () => void;
    }
    
}