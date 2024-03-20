import React from 'react';
import {
    GestureResponderEvent,
    NativeSyntheticEvent,
    TextInput,
    TextInputChangeEventData,
  } from 'react-native';
import {TextFieldBaseAutosuggest} from '../TextFieldBase/TextFieldBase';
import type {CommonFormFieldProps} from '../TextFieldBase/TextFieldBase';
import {useFieldProps} from '../../../../patterns/Forms/FormContext';

export interface TextFieldProps extends CommonFormFieldProps {
  onChangeValue?: (value: string, rawValue: string) => void;
  onPress?: (event: GestureResponderEvent) => void;
  multiline?: boolean;
  prefix?: React.ReactNode;
  endIcon?: React.ReactNode;
  getSuggestions?: (value: string) => ReadonlyArray<string>;
  keyboardType?: 'numeric' | 'default'
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
      keyboardType,
      ...rest
    },
    ref,
  ) => {
    const inputRef = React.useRef<TextInput | null>(null);
    const processValue = (v: string) => v;
    const onEndEditing = (
      event: NativeSyntheticEvent<TextInputChangeEventData>,
    ) => {
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
      onChangeValue,
    });
    return (
      <TextFieldBaseAutosuggest
        {...rest}
        {...fieldProps}
        onPress={onPress}
        type={keyboardType ?? 'default'}
        error={error}
      />
    );
  },
);

export default TextField;