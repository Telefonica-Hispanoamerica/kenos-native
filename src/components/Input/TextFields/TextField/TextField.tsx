import React from 'react';
import { TextFieldBaseAutosuggest } from "../TextFieldBase/TextFieldBase";
import type { CommonFormFieldProps } from "../TextFieldBase/TextFieldBase";
import { TextInput } from 'react-native';

export interface TextFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    onPress?: (event: React.MouseEvent) => void;
    multiline?: boolean;
    prefix?: React.ReactNode;
    endIcon?: React.ReactNode;
    getSuggestions?: (value: string) => ReadonlyArray<string>;
}

const TextField = React.forwardRef<TextInput, TextFieldProps>(
    (
        {
            disabled,
            error,
            helperText,
            name,
            optional,
            validate,
            onChangeValue,
            onChange,
            value,
            defaultValue,
            onBlur: onBlurProp,
            onFocus: onFocusProp,
            onPress,
            ...rest
        },
        ref
    ) => {
        const inputRef = React.useRef<TextInput | null>(null);
        const processValue = (v: string) => v;
        
        

        return (
            <TextFieldBaseAutosuggest
                {...rest}
                onClick={onPress}
                type="text"
            />
        )
    }
)


export default TextField;
