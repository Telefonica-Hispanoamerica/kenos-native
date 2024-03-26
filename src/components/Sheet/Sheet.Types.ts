import { GestureResponderHandlers } from "react-native";

export interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    dismisable?: boolean;
    dragableHead?: boolean;
}

export interface HeaderSheetPanResponderProps {
    panHandlers: GestureResponderHandlers;
    color: string;
    dismisable: boolean;
    dismisableAction: () => void;
    dragableHead?: boolean;
}
