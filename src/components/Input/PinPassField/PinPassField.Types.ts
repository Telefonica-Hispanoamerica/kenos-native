export interface PinPassProps {
    state?: PinPassStatusType;
    onChangeValue: (value: string) => void;
    value: number | string;
    handleChange?: () => void;
}

export type PinPassStatusType = 'completed' | 'error' | 'correct' | 'default' | 'disabled' | 'read-only';