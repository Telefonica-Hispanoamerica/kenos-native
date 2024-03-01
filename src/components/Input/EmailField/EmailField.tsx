import React from 'react';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {useFieldProps} from '../../../patterns/Forms/FormContext';
import {TextFieldBaseAutosuggest} from '../TextFields/TextFieldBase/TextFieldBase';
import type {CommonFormFieldProps} from '../TextFields/TextFieldBase/TextFieldBase';

export interface EmailFieldProps extends CommonFormFieldProps {
  onChangeValue?: (value: string, rawValue: string) => void;
  getSuggestions?: (value: string) => Array<string>;
}
const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EmailField: React.FC<EmailFieldProps> = ({
  disabled,
  error,
  helperText,
  name,
  optional,
  validate: validateProp,
  onChange,
  onChangeValue,
  onEndEditing,
  value,
  autoComplete = 'email',
  defaultValue,
  ...rest
}) => {
  const {texts} = useTheme();

  const validate = (value: string | undefined, rawValue: string) => {
    if (!value) {
      return optional ? '' : texts.formFieldErrorIsMandatory;
    }
    if (!RE_EMAIL.test(value)) {
      return texts.formEmailError;
    }
    return validateProp?.(value, rawValue);
  };

  const processValue = (value: string) => value.trim();

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
      type="email"
      inputMode="email"
      autoComplete={autoComplete}
    />
  );
};

export default EmailField;