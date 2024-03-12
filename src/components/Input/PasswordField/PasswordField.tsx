import React, { useState } from 'react';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {useFieldProps} from '../../../patterns/Forms/FormContext';
import {TextFieldBaseAutosuggest} from '../TextFields/TextFieldBase/TextFieldBase';
import type {CommonFormFieldProps} from '../TextFields/TextFieldBase/TextFieldBase';
import { View } from 'react-native';
import { IconEyeOffRegular, IconEyeRegular } from '../../../kenos-icons';
import PasswordSecurityLevel from './Security/PasswordSecurityLevel';

export interface PasswordFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    prefix?: React.ReactNode;
    endIcon?: React.ReactNode;
    securityIndicator?: boolean;
  }

const PassswordField: React.FC<PasswordFieldProps> = ({
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
  defaultValue,
  endIcon,
  securityIndicator = true,
  ...rest
}) => {
  const {texts} = useTheme();

  const [inputTypePass, setInputTypePass] = useState("password");

  const validate = (value: string | undefined, rawValue: string) => {
    if (!value) {
      return optional ? '' : texts.formFieldErrorIsMandatory;
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
    <View>
      <TextFieldBaseAutosuggest
        {...rest}
        {...fieldProps}
        type={inputTypePass}
        endIcon={inputTypePass === "password" ? <IconEyeRegular /> : <IconEyeOffRegular />}
        onPressEndIcon={() => setInputTypePass(inputTypePass === "password" ? "text": "password")}
      />
      { securityIndicator && (<PasswordSecurityLevel password={value} />) }
    </View>
    
  );
};

export default PassswordField;