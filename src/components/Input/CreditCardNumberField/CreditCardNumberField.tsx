import React from 'react';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {useFieldProps, useForm} from '../../../patterns/Forms/FormContext';
import {TextFieldBaseAutosuggest} from '../TextFields/TextFieldBase/TextFieldBase';
import type {CommonFormFieldProps} from '../TextFields/TextFieldBase/TextFieldBase';
import MaskInput from 'react-native-mask-input';
import { CardOptions } from '../../../utils/credit-card';
import { Text } from 'react-native';

interface CreditCardNumberFieldProps extends CommonFormFieldProps {
  acceptedCards?: CardOptions;
  onChangeValue?: (value: string, rawValue: string) => void;
  endIcon: React.ReactNode;
}

const CreditCardNumberField: React.FC<CreditCardNumberFieldProps> = ({
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
  maxLength,
  endIcon,
  acceptedCards = {americanExpress: true, visa: true, masterCard: true},
  ...rest
}) => {
  const {texts} = useTheme();
  const {jumpToNext, rawValues, setFormError} = useForm();
  const creditCardMask = [/\d/, /\d/, /\d/, /\d/, " ", [/\d/], [/\d/], [/\d/], [/\d/], " ", [/\d/], [/\d/], [/\d/], [/\d/], " ", /\d/, /\d/, /\d/, /\d/];

  const getMatcher = (regex: RegExp) => (str?: string) => !!str && regex.test(str);
  const isAmericanExpress: (str?: string) => boolean = getMatcher(/^3[47]/);
  const getCreditCardNumberLength = (creditCardNumber: string): number =>
    isAmericanExpress(creditCardNumber) ? 15 : 16;

  const validate = (value: string | undefined, rawValue: string) => {
    const error = texts.formCreditCardNumberError;
    if (!value) {
      return optional ? '' : texts.formFieldErrorIsMandatory;
    }
    if (isAmericanExpress(value) && !acceptedCards.americanExpress) {
        return error;
    }
    // if (isVisa(value) && !acceptedCards.visa) {
    //     return error;
    // }
    // if (isMasterCard(value) && !acceptedCards.masterCard) {
    //     return error;
    // }
    // if (!isValidCreditCardNumber(value)) {
    //     return error;
    // }
    // if (getCreditCardNumberLength(value) !== value.length) {
    //     return error;
    // }
    return validateProp?.(value, rawValue);
  };

//   const getAnimationTarget = (value?: string) => {
//         if (isVisa(value)) {
//             return <IconVisa />;
//         }
//         if (isMasterCard(value)) {
//             return <IconMastercard />;
//         }
//         if (isAmericanExpress(value)) {
//             return <IconAmex />;
//         }
//         return null;
//     };

  const processValue = (s: string) => s.replace(/\s/g, '');

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

  const handleChange = (text: string) => {
    const value = processValue(text); // Procesar el texto obtenido del TextInput
    console.log(value)
    if (value.length >= getCreditCardNumberLength(value)) {
        const error = validate?.(value, text); // Validar el valor del TextInput
        if (error) {
            setFormError({ name, error }); // Si hay un error, establecer el error en el estado
        } else {
            jumpToNext(name); // Si no hay errores, avanzar al siguiente campo
        }
    }
}

  return (
    <>
        <TextFieldBaseAutosuggest
        {...rest}
        {...fieldProps}
        type="credit-card"
        inputMode="numeric"
        inputComponent={MaskInput}
        mask={creditCardMask}
        maxLength={maxLength}
        onChangeValue={handleChange}
        endIcon={endIcon}
        />
    </>
  );
};

export default CreditCardNumberField;
