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
import { styles } from './PinPassField.css';

const PinPassField: React.FC<PinPassProps> = ({
  state,
  onChangeValue,
  value,
  handleChange,
}) => {
  const [pins, setPins] = useState<string[]>(['', '', '', '', '', '']);
  const pinInputs = useRef<TextInput[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const {skin} = useTheme();
  const {
    borderDark,
    borderSelected,
    brand,
    textPrimary,
    success,
    error,
    backgroundAlternative,
  } = skin.colors;

  const handlePinChange = (index: number, text: string) => {
    const newPins = [...pins];
    newPins[index] = text;
    setPins(newPins);
    onChangeValue(newPins.join(''));

    if (index < 5 && text !== '' && pinInputs.current[index + 1]) {
      pinInputs.current[index + 1].focus();
    } else if (index === 5 && text !== '') {
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
    if (pin.length < 6 ) return;
    if (handleChange) handleChange();
  }, [value, isCompleted]);

  const getBorderColor = () => {
    if (state === 'correct') return success;
    if (state === 'error') return error;
    if (state === 'disabled') return applyAlpha(borderDark, 0.5);
    return borderDark;
  };

  const inputStyles = (index: number): StyleProp<any> => ({
    ...styles.input,
    borderColor: focusedIndex === index ? borderSelected : getBorderColor(),
    marginRight: index <= 4 ? 8 : 0,
    color: textPrimary,
    backgroundColor:
      state === 'read-only' ? backgroundAlternative : 'transparent',
  });

  return (
    <View style={styles.container}>
      {pins.map((pin, index) => (
        <TextInput
          key={index}
          style={inputStyles(index)}
          selectionColor={brand}
          value={pin}
          keyboardType="numeric"
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
  );
};

export default PinPassField;
