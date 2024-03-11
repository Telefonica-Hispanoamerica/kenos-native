import React from 'react';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {useFieldProps} from '../../../patterns/Forms/FormContext';
import {TextFieldBaseAutosuggest} from '../TextFields/TextFieldBase/TextFieldBase';
import type {CommonFormFieldProps} from '../TextFields/TextFieldBase/TextFieldBase';
import MaskInput from 'react-native-mask-input';

export interface PhoneNumberFieldProps extends CommonFormFieldProps {
  onChangeValue?: (value: string, rawValue?: string) => void;
  onBlur?: () => void;
  endIcon?: React.ReactNode;
  e164?: boolean;
}

const PhoneField: React.FC<PhoneNumberFieldProps> = ({
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
  autoComplete = '',
  defaultValue = '',
  e164,
  maxLength,
  ...rest
}) => {
  const {texts} = useTheme();

  const validate = (value: string | undefined) => {
    if (!value) {
      return optional ? '' : texts.formFieldErrorIsMandatory;
    }
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
      type="phone"
      inputMode="numeric"
      inputComponent={MaskInput}
      mask={texts.phoneMask}
      maxLength={maxLength} //Debe incluir cantidad de numeros + espacios
      onChangeValue={onChangeValue}
    />
  );
};

export default PhoneField;
