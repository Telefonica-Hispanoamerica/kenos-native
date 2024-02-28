import React from 'react';
import { TextFieldBaseAutosuggest } from "../TextFieldBase/TextFieldBase";
import type { CommonFormFieldProps } from "../TextFieldBase/TextFieldBase";
import { GestureResponderEvent, NativeSyntheticEvent, TextInput, TextInputChangeEventData, TextInputFocusEventData } from 'react-native';
import { useFieldProps } from '../../../../patterns/Forms/FormContext';


export interface TextFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    onPress?: (event: GestureResponderEvent) => void;
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
            onEndEditing: onEndEditingProp,
            onFocus: onFocusProp,
            onPress,
            ...rest
        },
        ref
    ) => {
        const inputRef = React.useRef<TextInput | null>(null);
        const processValue = (v: string) => v;
        console.log('error: ', error);
        
        // const onEndEditing = (event: React.FocusEvent<Element>) => {
        //     if (rest.multiline && inputRef.current) {
        //         // scroll to start
        //         inputRef.current.scrollTop = 0;
        //     }
        //     onEndEditingProp?.(event);
        // };

        // const onFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        //     if (rest.multiline) {
        //       setTimeout(() => {
        //         if (inputRef.current) {
        //           // place caret to the end
        //           const value = inputRef.current.value;
        //           inputRef.current.setNativeProps({ text: '' });
        //           inputRef.current.setNativeProps({ text: value });
        //           // scroll to end
        //           inputRef.current.scrollToEnd();
        //         }
        //       }, 0);
        //     }
        //     onFocusProp?.(event);
        //   };
        const onEndEditing = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
            if (rest.multiline && inputRef.current) {
            }
            onEndEditingProp?.(event);
        };

        
        const fieldProps = useFieldProps({
            name,
            value,
            defaultValue,
            processValue,
            helperText,
            optional,
            error,
            disabled,
            onEndEditing,
            validate,
            onChange,
            onChangeValue  
          });
        return (
            <TextFieldBaseAutosuggest
                {...rest}
                {...fieldProps}
                onPress={onPress}
                type="text"
                error={error}
            />
        )
    }
)


export default TextField;
