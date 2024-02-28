import React, { createContext, useContext, useRef, useEffect } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native';

export type FormStatus = 'filling' | 'sending';
export type FormErrors = {[name: string]: string | undefined};
export type FieldValidator = (value: any, rawValue: string) => string | undefined;

export type FieldRegistration = {
    input?: React.RefObject<TextInput>;
    validator?: FieldValidator;
    focusableElement?: React.RefObject<any>;
};

type Context = {
    rawValues: {[name: string]: any};
    setRawValue: (param: {readonly name: string; readonly value: any}) => void;
    values: {[name: string]: any};
    setValue: (param: {readonly name: string; readonly value: any}) => void;
    formStatus: FormStatus;
    register: (name: string, ref: FieldRegistration) => void;
    formErrors: FormErrors;
    setFormError: (param: {readonly name: string; readonly error?: string}) => void;
    jumpToNext: (currentName: string) => void;
    submit: () => void;
    validate: () => FormErrors;
    formId: string;
};

export const FormContext = createContext<Context>({
    values: {},
    setValue: () => {},
    rawValues: {},
    setRawValue: () => {},
    formStatus: 'filling',
    register: () => {},
    formErrors: {},
    setFormError: () => {},
    jumpToNext: () => {},
    submit: () => {},
    validate: () => ({}),
    formId: '',
});

export const useForm = (): Context => useContext(FormContext);

export const useFieldProps = ({
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
}: {
    name: string;
    value: string | undefined;
    defaultValue: string | undefined;
    processValue: (value: string) => unknown;
    helperText: string | undefined;
    optional: boolean | undefined;
    error: boolean | undefined;
    disabled: boolean | undefined;
    onEndEditing: undefined | ((event: NativeSyntheticEvent<TextInputChangeEventData>) => void);
    validate: undefined | ((value: any, rawValue: string) => string | undefined);
    onChange: undefined | ((event: NativeSyntheticEvent<TextInputChangeEventData>) => void);
    onChangeValue: undefined | ((value: any, rawValue: string) => void);
}): {
    value?: string;
    defaultValue?: string;
    name: string;
    helperText?: string;
    required: boolean;
    error: boolean;
    disabled: boolean;
    onEndEditing: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    inputRef: React.RefObject<TextInput>;
    onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
} => {
    const {setRawValue, setValue, rawValues, values, formErrors, formStatus, setFormError, register} = useForm();
    const rawValue = value ?? defaultValue ?? rawValues[name] ?? '';
    const processValueRef = useRef(processValue);
    const inputRef = useRef<TextInput>(null); // Crear la referencia aquí

    useEffect(() => {
        setRawValue({name, value: rawValue});
        setValue({name, value: processValueRef.current(rawValue)});
    }, [name, rawValue, setRawValue, setValue]);

    useEffect(() => {
        register(name, {input: inputRef, validator: validate}); // Pasar la referencia a register
    }, [name, register, validate]);

    return {
        value,
        defaultValue: defaultValue ?? (value === undefined ? rawValues[name] ?? '' : undefined),
        name,
        helperText: formErrors[name] || helperText,
        required: !optional,
        error: error || !!formErrors[name],
        disabled: disabled || formStatus === 'sending',
        onEndEditing: (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
            setFormError({name, error: validate?.(values[name], rawValues[name])});
            onEndEditing?.(e);
        },
        inputRef, // Retorna la referencia
        onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
            const rawValue = event.nativeEvent.text;
            const value = processValue(rawValue);
            setRawValue({name, value: rawValue});
            setValue({name, value});
            setFormError({name, error: ''});
            onChange?.(event);
            onChangeValue?.(value, rawValue);
        },
    };
};
