import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput, StyleProp} from 'react-native';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {
  IconCancelFilled,
  IconCheckedFilled,
  IconProcessLoadingFilled,
} from '../../../kenos-icons';
import {PinPassProps} from './PinPassField.Types';
import {applyAlpha} from '../../../utils';
import {styles} from './PinPassField.css';
import {Text2} from '../../Text/Text';

const PinPassField: React.FC<PinPassProps> = ({
  state,
  onChangeValue,
  value,
  handleChange,
  length,
  inverse,
  hiddenText = false,
  helperText = '',
}) => {
  const customLength = length ?? 6;
  const [pins, setPins] = useState<string[]>([]);
  const pinInputs = useRef<TextInput[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    setPins(Array.from({length: customLength}, () => ''));
  }, [length]);

  const {skin} = useTheme();
  const {
    borderDark,
    borderSelected,
    brand,
    textPrimary,
    success,
    error,
    backgroundAlternative,
    background,
  } = skin.colors;

  const handlePinChange = (index: number, text: string) => {
    const newPins = [...pins];
    newPins[index] = text;
    setPins(newPins);
    onChangeValue(newPins.join(''));

    if (
      index < customLength - 1 &&
      text !== '' &&
      pinInputs.current[index + 1]
    ) {
      pinInputs.current[index + 1].focus();
    } else if (index === customLength - 1 && text !== '') {
      setIsCompleted(true);
    }
  };

  const handleBackspace = (index: number) => {
    if (index > 0 && pins[index] === '' && pinInputs.current[index - 1]) {
      pinInputs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    const pin = pins.join('');
    if (pin.length < customLength) return;
    if (handleChange) handleChange();
  }, [value, isCompleted]);

  const getBorderColor = () => {
    if (state === 'correct') return success;
    if (state === 'error') return error;
    if (state === 'disabled') return applyAlpha(borderDark, 0.5);
    if (inverse) return background;
    return borderDark;
  };

  const getBackgroundColor = () => {
    if (state === 'read-only') return backgroundAlternative;
    if (inverse) return background;
    return 'transparent';
  };

  const inputStyles = (index: number): StyleProp<any> => ({
    ...styles.input,
    borderColor: focusedIndex === index ? borderSelected : getBorderColor(),
    marginRight: index <= customLength - 2 ? 8 : 0,
    color: textPrimary,
    backgroundColor: getBackgroundColor(),
  });

  return (
    <View>
      <View style={styles.container}>
        {pins.map((pin, index) => (
          <TextInput
            key={index}
            style={inputStyles(index)}
            selectionColor={brand}
            value={pin}
            keyboardType="numeric"
            secureTextEntry={hiddenText}
            maxLength={1}
            editable={
              state !== 'disabled' &&
              state !== 'read-only' &&
              state !== 'completed'
            }
            ref={ref => (pinInputs.current[index] = ref as TextInput)}
            onChangeText={text => handlePinChange(index, text)}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index);
              }
            }}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
          />
        ))}
        <View style={styles.icon}>
          {state === 'completed' && <IconProcessLoadingFilled color={brand} />}
          {state === 'correct' && <IconCheckedFilled color={success} />}
          {state === 'error' && <IconCancelFilled color={error} />}
        </View>
      </View>
      {helperText !== '' && <Text2>{helperText}</Text2>}
    </View>
  );
};

export default PinPassField;
