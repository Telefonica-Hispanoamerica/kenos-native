export interface PinPassProps {
    state?: PinPassStatusType;
    onChangeValue: (value: string) => void;
    value: number | string;
    handleChange?: () => void;
    length?: number;
    inverse?: boolean;
    hiddenText: boolean;
    helperText: string;
}

export type PinPassStatusType = 'completed' | 'error' | 'correct' | 'default' | 'disabled' | 'read-only';