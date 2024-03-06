import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text1} from '../../../Text/Text';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import { useTheme } from '../../../../utils/ThemeContextProvider';

interface PasswordStrengthIndicatorProps {
  password?: string;
}

const regexSymbol = /[$&+,:;=?@#|'<>.^*()%!-]/;
const regexNumber = /\d/;
const regexLength = /^.{6,}$/;

const PasswordSecurityLevel: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
}) => {
  const {texts} = useTheme();

  const [securityLevel, setSecurityLevel] = useState<string>(texts.passwordLevelLow);
  const [quantityIndicators, setQuantityIndicators] = useState<number>(1);

  const validarPassword = (password: string): void => {
    const hasSymbol = regexSymbol.test(password);
    const hasNumber = regexNumber.test(password);
    const isLengthValid = regexLength.test(password);

    if (isLengthValid && hasSymbol && hasNumber) {
      setSecurityLevel(texts.passwordLevelExcellent);
      setQuantityIndicators(4);
    } else if (isLengthValid && hasNumber) {
      setSecurityLevel(texts.passwordLevelGood);
      setQuantityIndicators(3);
    } else if (isLengthValid) {
      setSecurityLevel(texts.passwordLevelMedium);
      setQuantityIndicators(2);
    } else {
      setSecurityLevel(
        texts.passwordLevelLow
      );
      setQuantityIndicators(1);
    }
  };

  useEffect(() => {
    validarPassword(password ?? '');
  }, [password]);

  return (
    <View>
      <PasswordStrengthIndicator securityLevel={quantityIndicators} />
      <Text1>
        <Text1 medium>{securityLevel.split(',')[0]},</Text1>
        {securityLevel.split(',')[1]}
      </Text1>
    </View>
  );
};

export default PasswordSecurityLevel;
