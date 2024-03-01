import React from 'react';
import {
  TextInput,
  View,
  NativeSyntheticEvent,
  GestureResponderEvent,
  TextInputFocusEventData,
  TextInputChangeEventData,
} from 'react-native';
import {useTheme} from '../../../../utils/ThemeContextProvider';
import {FieldValidator} from '../../../../patterns/Forms/FormContext';
import {
  Label,
  InputState,
  FieldContainer,
  HelperText,
} from '../TextFieldComponent/TextFieldComponent';
import {Text3} from '../../../Text/Text';
import {AutoComplete} from './TextFieldBase.Types';
import {IconWarningRegular} from '../../../../kenos-icons';
import {styles} from './TextFieldBase.css';

export interface CommonFormFieldProps {
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  name: string;
  optional?: boolean;
  maxLength?: number;
  validate?: FieldValidator;
  autoComplete?: AutoComplete;
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onEndEditing?: (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => void;
  getSuggestions?: (text: string) => ReadonlyArray<string>;
  fullWidth?: boolean;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  children?: void;
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
  onPress?: (event: GestureResponderEvent) => void;
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onEndEditing?: (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => void;
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  inputProps?: {[name: string]: string | number | undefined};
  inputComponent?: React.ComponentType<any>;
  shrinkLabel?: boolean;
  focus?: boolean;
  fieldRef?: React.RefObject<TextInput>;
  multiline?: boolean;
  inputMode?: string;
  readOnly?: boolean;
  min?: string;
  max?: string;
}

export const TextFieldBase = React.forwardRef<any, TextFieldBaseProps>(
  (
    {
      error,
      helperText,
      label,
      inputProps,
      inputRef,
      defaultValue,
      value,
      onFocus,
      onEndEditing,
      inputComponent,
      prefix,
      startIcon,
      endIcon,
      endIconOverlay,
      shrinkLabel: shrinkLabelProp,
      multiline,
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
    const {skin} = useTheme();
    const {textPrimary, textSecondary, errorHigh} = skin.colors;

    const {
      fullSize,
      textArea,
      textAreaWithLabel,
      textAreaWithoutLabel,
      input,
      inputWithLabel,
      inputWithoutLabel,
      endIconContainer,
      endIconElement,
      startIconElement,
      prefixElement,
      prefixWithLabel,
      prefixWithoutLabel,
      endIconWithoutError,
      endIconWithError,
    } = styles(textPrimary, textSecondary);

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

    const labelStyle = {
      left: startIcon ? 48 : LABEL_LEFT_POSITION,
      width: `calc(100% - ${
        LABEL_LEFT_POSITION + (startIcon ? 48 : LABEL_LEFT_POSITION)
      }px)`,
      paddingRight: endIcon && !isShrinked ? 36 : 0,
    };

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
        {startIcon && <View style={startIconElement}>{startIcon}</View>}
        {prefix && (
          <View
            style={[
              prefixElement,
              hasLabel ? prefixWithLabel : prefixWithoutLabel,
              {opacity: inputState === 'default' ? 0 : 1},
              {alignSelf: prefixAlignSelf},
            ]}>
            <Text3 color={textSecondary} regular wordBreak={false}>
              {prefix}
            </Text3>
          </View>
        )}
        <View
          style={[fullSize, {alignSelf: prefix ? 'baseline' : 'flex-start'}]}>
          {React.createElement(inputComponent || defaultInputElement, {
            ...props,
            placeholder:
              inputState === 'focused' || value ? props.placeholder : '',
            style: {
              ...props.style,
              ...(multiline
                ? {
                    ...textArea,
                    ...(hasLabel ? textAreaWithLabel : textAreaWithoutLabel),
                  }
                : {
                    ...input,
                    ...(hasLabel ? inputWithLabel : inputWithoutLabel),
                  }),
            },
            onFocus: (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
              setInputState('focused');
              onFocus?.(event);
            },
            onChange: (
              event: NativeSyntheticEvent<TextInputChangeEventData>,
            ) => {
              if (
                maxLength === undefined ||
                event.nativeEvent.text.length <= maxLength
              ) {
                setCharacterCount(event.nativeEvent.text.length);
                props.onChange?.(event);
              } else {
                event.stopPropagation();
                event.preventDefault();
              }
            },
            onEndEditing: (
              event: NativeSyntheticEvent<TextInputFocusEventData>,
            ) => {
              if (event.nativeEvent.text.length > 0) {
                setInputState('filled');
              } else {
                setInputState('default');
              }
              onEndEditing?.(event);
            },
            defaultValue,
            value,
            error,
            ref,
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
        {error && (
          <View
            style={[
              endIconContainer,
              endIcon ? endIconWithError : endIconWithoutError,
            ]}>
            <View style={endIconElement}>
              <IconWarningRegular color={errorHigh}></IconWarningRegular>
            </View>
          </View>
        )}
        {endIcon && (
          <View style={endIconContainer}>
            <View style={endIconElement}>{endIcon}</View>
          </View>
        )}
        {endIconOverlay}
      </FieldContainer>
    );
  },
);

export const TextFieldBaseAutosuggest = React.forwardRef<
  any,
  TextFieldBaseProps
>(({getSuggestions, ...props}, ref) => {
  if (
    getSuggestions &&
    (props.value === undefined || props.defaultValue !== undefined)
  ) {
    throw Error('Fields with suggestions must be used in controlled mode');
  }
  return getSuggestions ? (
    <React.Suspense
      fallback={
        <TextFieldBase
          {...props}
          label={props.label}
          autoComplete="off"
          ref={ref}
        />
      }></React.Suspense>
  ) : (
    <TextFieldBase {...props} ref={ref} />
  );
});