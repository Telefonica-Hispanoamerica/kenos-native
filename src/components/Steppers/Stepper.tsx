import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconAutenticationSuccessFilled } from '../../kenos-icons';
import { useTheme } from '../../utils/ThemeContextProvider';
import ProgressBar from '../ProgressBar/ProgressBar';
import { StepperProps } from './Steppers.Types';

const Stepper: React.FC<StepperProps> = ({ steps, currentIndex }: StepperProps) => {
    const previousIndexRef = useRef(currentIndex);
    const { skin } = useTheme();
    const { textPrimary, textSecondary, brand } = skin.colors;

    const styles = StyleSheet.create({
        stepper: {
            flex: 1,
            flexDirection: 'row',
        },
        actualStep: {
            borderColor: brand,
            borderWidth: 2,
            backgroundColor: brand,
        },
        notCurrentStep: {
            borderColor: 'gray',
            borderWidth: 2,
            backgroundColor: 'transparent',
        },
        stepIconNumber: {
            width: 24,
            height: 24,
            borderRadius: 12,
            marginRight: 8,
            marginLeft: 8,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textPrimary: {
            color: textPrimary,
        },
        textSecondary: {
            color: textSecondary,
        },
        numberStep: {
            textAlignVertical: 'center', textAlign: 'center', fontWeight: '600',
        }
    });

    if (currentIndex !== previousIndexRef.current) {
        previousIndexRef.current = currentIndex;
    }

    return (
        <View style={styles.stepper}>
            {steps.map((text, index) => {
                const isCurrent = index === currentIndex;
                const isLastStep = index === steps.length - 1;
                const isCompleted = index < currentIndex;

                return (
                    <View style={[{ flexDirection: 'column' }, !isLastStep && { flex: 1 }]} key={index}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            {isCompleted ? (
                                index === steps.length - 1 ? (
                                    <View style={[styles.stepIconNumber, isCurrent ? styles.actualStep : styles.notCurrentStep]}>
                                        <Text style={[styles.numberStep, { color: isCurrent ? 'white' : textSecondary }]}>{index + 1}</Text>
                                    </View>
                                ) : (
                                    <View style={{ marginLeft: 8, marginRight: 8 }}>
                                        <IconAutenticationSuccessFilled color={brand} size={24} />
                                    </View>
                                )
                            ) : (
                                <View style={[styles.stepIconNumber, isCurrent ? styles.actualStep : styles.notCurrentStep]}>
                                    <Text style={[styles.numberStep, { color: isCurrent ? 'white' : textSecondary }]}>{index + 1}</Text>
                                </View>
                            )}
                            {isLastStep ? <></> :
                                <View style={{ flex: 1 }}>
                                    <ProgressBar progressPercent={isCompleted ? 100 : 0} />
                                </View>
                            }
                        </View>
                        {/* <Text
                            numberOfLines={1}
                            style={{ color: isCurrent || isCompleted ? textPrimary : textSecondary }}>
                            {text}
                        </Text> */}
                    </View>
                );
            })}
        </View>
    );
};

export default Stepper;