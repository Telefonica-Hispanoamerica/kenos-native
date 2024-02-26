import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {useTheme} from '../../../../utils/ThemeContextProvider';
import {FieldValidator} from '../../../../patterns/Forms/FormContext';
import type {InputState} from '../TextFieldComponent/TextFieldComponent';
import {
  Label,
  FieldContainer,
  HelperText,
} from '../TextFieldComponent/TextFieldComponent';
import {Text3} from '../../../Text/Text';
import {combineRefs} from '../../../../utils/common';

export type AutoComplete =
  | 'on'
  | 'off'
  | 'name' // full name
  | 'given-name' // first name
  | 'additional-name' // middle name
  | 'family-name' // last name
  | 'email'
  | 'tel'
  | 'street-address'
  | 'address-line1' // for two address inputs
  | 'address-line2' // for two address inputs
  | 'address-level1' // state or province
  | 'address-level2' // city
  | 'country'
  | 'postal-code'
  | 'transaction-amount'
  | 'new-password'
  | 'current-password'
  | 'cc-type' // The type of payment instrument (such as "Visa" or "Master Card")
  | 'cc-name' // The full name as printed on or associated with a payment instrument such as a credit card
  | 'cc-number' // A credit card number or other number identifying a payment method, such as an account number
  | 'cc-exp' // A payment method expiration date, typically in the form "MM/YY" or "MM/YYYY"
  | 'cc-csc' // The security code; on credit cards, this is the 3-digit verification number on the back of the card
  | 'username'; // Username or account name, when used with a password field the browser offers to save credentials together

export interface CommonFormFieldProps {
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label: string;
  name: string;
  optional?: boolean;
  maxLength?: number;
  validate?: FieldValidator;
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onChange?: (event: React.ChangeEvent<TextInput>) => void;
  getSuggestions?: (text: string) => ReadonlyArray<string>;
  fullWidth?: boolean;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
}

interface TextFieldBaseProps {
  type: string;
  autoComplete?: AutoComplete;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
  pattern?: string;
  required?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  name?: string;
  maxLength?: number;
  prefix?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  endIconOverlay?: React.ReactNode;
  style?: React.CSSProperties;
  value?: string;
  inputRef?: React.Ref<TextInput>;
  getSuggestions?: (value: string) => ReadonlyArray<string>;
  onClick?: (event: React.MouseEvent) => void;
  onChange?: (event: React.ChangeEvent<TextInput>) => void;
  onBlur?: (eveent: React.FocusEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  inputProps?: {[name: string]: string | number | undefined};
  inputComponent?: React.ComponentType<any>;
  shrinkLabel?: boolean;
  focus?: boolean;
  fieldRef?: React.RefObject<TextInput>;
  onInput?: (event: React.FormEvent<TextInput>) => void;
  multiline?: boolean;
  inputMode?: string;
  readOnly?: boolean;
  min?: string;
  max?: string;
}

export const TextFieldBase: React.FC<TextFieldBaseProps> = (
  {
    error,
    helperText,
    label,
    inputProps,
    inputRef,
    defaultValue,
    value,
    onFocus,
    onBlur,
    inputComponent,
    prefix,
    startIcon,
    endIcon,
    endIconOverlay,
    shrinkLabel: shrinkLabelProp,
    multiline = false,
    focus,
    fieldRef,
    maxLength,
    autoComplete: autoCompleteProp,
    fullWidth,
    ...rest
  },
  ref,
) => {
  const [inputState, setInputState] = React.useState<InputState>(
    defaultValue?.length || value?.length ? 'filled' : 'default',
  );
  const [characterCount, setCharacterCount] = React.useState(
    defaultValue?.length ?? 0,
  );
  const hasLabel = !!label || !rest.required;
  const vars = useTheme().skin;

  const shrinkLabel =
    shrinkLabelProp ||
    ((rest.type === 'date' ||
      rest.type === 'datetime-local' ||
      rest.type === 'month') &&
      !rest.required);

  const [prefixAlignSelf, setPrefixAlignSelf] = React.useState<
    'baseline' | 'flex-start'
  >('baseline');

  React.useEffect(() => {
    setPrefixAlignSelf('baseline');
  }, []);

  React.useEffect(() => {
    if (inputState !== 'focused' && value?.length) {
      setCharacterCount(value.length);
      setInputState('filled');
    }
    if (focus) {
      setInputState('focused');
    }
    if (focus === false && !value?.length) {
      // when textfield is used in selects it doesn't get or lose focus
      setInputState('default');
    }
    if (focus === false && value?.length) {
      setInputState('filled');
    }
  }, [inputState, value, focus]);

  React.useEffect(() => {
    if (rest.autoFocus) {
      setInputState('focused');
    }
  }, [rest.autoFocus]);

  const defaultInputElement = TextInput;

  const props = {
    ...rest,
    maxLength,
    autoComplete: autoCompleteProp,
    ...inputProps,
  };

  const isShrinked =
    shrinkLabel || inputState === 'focused' || inputState === 'filled';
  const LABEL_LEFT_POSITION = 12;
  const LABEL_SCALE_MOBILE = 0.75;
  const scale = isShrinked ? LABEL_SCALE_MOBILE : 1;
  const labelStyle = {
    left: startIcon ? 48 : LABEL_LEFT_POSITION,
    width: `calc(100% - ${
      LABEL_LEFT_POSITION + (startIcon ? 48 : LABEL_LEFT_POSITION)
    }px)`,
    paddingRight: endIcon && !isShrinked ? 36 : 0,
  };

  const commonStyles = {
    paddingRight: endIcon ? 0 : 16,
    paddingLeft: prefix ? 0 : startIcon ? 48 : 12,
  };

  const commonInputStyles = {
    commonInputStyles: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      minWidth: 0,
      color: vars.colors.textPrimary,
      width: '100%',
    },
  };

  const styles = StyleSheet.create({
    placeholder: {
      opacity: 0,
    },
    placeholderFocus: {
      opacity: 0.5,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 96,
    },
    fullWidth: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    textArea: {
      padding: 0,
      resize: 'none',
      paddingBottom: 8,
      ...commonStyles,
    },
    textAreaWithLabel: {
      marginTop: 24,
    },
    textAreaWithoutLabel: {
      marginTop: 16,
    },
    input: {
      position: 'relative',
      height: '100%',
      ...commonInputStyles.commonInputStyles,
    },
    inputWithLabel: {
      paddingTop: 24,
      paddingBottom: 8,
    },
    inputWithoutLabel: {
      paddingTop: 16,
      paddingBottom: 16,
    },
    endIcon: {
      paddingLeft: 8,
      paddingRight: 16,
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
    },
    startIcon: {
      paddingHorizontal: 12,
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
    },
    prefix: {
      paddingLeft: 12,
      paddingRight: 16,
    },
    prefixWithLabel: {
      paddingTop: 24,
      paddingBottom: 8,
    },
    prefixWithoutLabel: {
      paddingVertical: 16,
    },
    menuItem: {
      height: 48,
      display: 'flex',
      alignItems: 'center',
      padding: '6px 16px',
    },
    menuItemSelected: {
      backgroundColor: vars.colors.backgroundAlternative,
    },
    suggestionsContainer: {
      position: 'absolute',
      backgroundColor: 'white',
      zIndex: 2,
    },
  });

  return (
    <FieldContainer
      disabled={rest.disabled}
      helperText={
        <HelperText
          error={error}
          leftText={helperText}
          rightText={
            multiline && maxLength
              ? `${characterCount}/${maxLength}`
              : undefined
          }
        />
      }
      multiline={multiline}
      fullWidth={fullWidth}
      fieldRef={fieldRef}
      inputState={inputState}
      readOnly={rest.readOnly}
      error={error}>
      {startIcon && <View style={styles.startIcon}>{startIcon}</View>}

      {prefix && (
        <View
          style={[
            styles.prefix,
            hasLabel ? styles.prefixWithLabel : styles.prefixWithoutLabel,
            {opacity: inputState === 'default' ? 0 : 1},
            {alignSelf: prefixAlignSelf},
          ]}>
          <Text3 color={vars.colors.textSecondary} regular wordBreak={false}>
            {prefix}
          </Text3>
        </View>
      )}
      <View
        style={[
          styles.fullWidth,
          {alignSelf: prefix ? 'baseline' : 'flex-start'},
        ]}>
        {React.createElement(inputComponent || defaultInputElement, {
          ...props,
          style: {
            ...props.style,
            ...(multiline
              ? {
                  ...styles.textArea,
                  ...(hasLabel
                    ? styles.textAreaWithLabel
                    : styles.textAreaWithoutLabel),
                }
              : {
                  ...styles.input,
                  ...(hasLabel
                    ? styles.inputWithLabel
                    : styles.inputWithoutLabel),
                }),
          },
          onFocus: (event: React.FocusEvent<TextInput>) => {
            setInputState('focused');
            onFocus?.(event);
            console.log('Input Focused');
          },
          onBlur: (event: React.FocusEvent<TextInput>) => {
            if (true) {
              setInputState('filled');
            } else {
              setInputState('default');
            }
            onBlur?.(event);
          },
          onChange: (event: React.ChangeEvent<TextInput>) => {
            if (maxLength === undefined) {
              setCharacterCount(20);
              props.onChange?.(event);
            } else {
              event.stopPropagation();
              event.preventDefault();
            }
            console.log('Input Changes');
          },
          defaultValue,
          value,
          error,
          multiline,
        })}
      </View>
      {label && (
        <Label
          style={labelStyle}
          error={error}
          forId=""
          inputState={inputState}
          shrinkLabel={shrinkLabel}
          optional={!rest.required}>
          {label}
        </Label>
      )}
      {endIcon && <View style={styles.endIcon}>{endIcon}</View>}
      {endIconOverlay}
    </FieldContainer>
  );
};

export const TextFieldBaseAutosuggest = React.forwardRef<
  any,
  TextFieldBaseProps
>(({getSuggestions, ...props}, ref) => {
  const [suggestions, setSuggestions] = React.useState<ReadonlyArray<string>>(
    [],
  );
  const inputRef = React.useRef<TextInput>(null);
  const {texts} = useTheme();
  if (
    getSuggestions &&
    (props.value === undefined || props.defaultValue !== undefined)
  ) {
    throw Error('Fields with suggestions must be used in controlled mode');
  }
  return getSuggestions ? (
    <React.Suspense
      fallback={
        <TextFieldBase {...props} label={props.label} autoComplete="off" />
      }></React.Suspense>
  ) : (
    <TextFieldBase {...props} />
  );
});
