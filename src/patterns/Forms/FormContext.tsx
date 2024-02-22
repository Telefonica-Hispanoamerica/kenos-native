import React, { createContext, useContext, useState } from 'react';

export type FormStatus = 'filling' | 'sending';
export type FormErrors = { [name: string]: string | undefined };
export type FieldValidator = (value: any, rawValue: string) => string | undefined;

export interface FormContextType {
  values: { [name: string]: any };
  setValue: (name: string, value: any) => void;
  formStatus: FormStatus;
  formErrors: FormErrors;
  setFormError: (name: string, error?: string) => void;
  validate: () => boolean;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [values, setValues] = useState<{ [name: string]: any }>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<FormStatus>('filling');

  const setValue = (name: string, value: any) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const setFormError = (name: string, error?: string) => {
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validate = (): boolean => {
    // Implement validation logic here
    return true;
  };

  return (
    <FormContext.Provider value={{ values, setValue, formStatus, formErrors, setFormError, validate }}>
      {children}
    </FormContext.Provider>
  );
};