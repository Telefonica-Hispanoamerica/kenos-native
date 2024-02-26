import React, { createContext, useContext } from 'react';

export type FormStatus = 'filling' | 'sending';
export type FormErrors = {[name: string]: string | undefined};
export type FieldValidator = (value: any, rawValue: string) => string | undefined;

export type FieldRegistration = {
    input?: React.RefObject<any>;
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
