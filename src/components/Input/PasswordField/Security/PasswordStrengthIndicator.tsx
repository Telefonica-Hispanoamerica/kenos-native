import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../../../utils/ThemeContextProvider';

interface StrengthIndicatorProps {
    securityLevel: number;
}

const PasswordStrengthIndicator = ({ securityLevel }: StrengthIndicatorProps) => {
    const quantityIndicators = Math.min(securityLevel, 4);

    const {skin} = useTheme();
    const { warning, error, success } = skin.colors;

    const getIndicatorColor = () => {
        if(securityLevel === 2) return warning;
        if(securityLevel >= 3) return success;
        return error;
    }

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            overflow: 'hidden',
            marginTop: 10,
            marginBottom: 6
        },
        indicador: {
            height: 5,
            borderRadius: 5,
            backgroundColor: getIndicatorColor(),
            width: '23%'
        },
    });

    const indicadores = [];
    for (let i = 0; i < quantityIndicators; i++) {
        indicadores.push(<View key={i} style={[
            styles.indicador, 
            i !== 0 && { marginLeft: 5 },  // Add left margin except for the first indicator
            i !== quantityIndicators - 1 && { marginRight: 5 },  // Add right margin except for the last indicator
        ]} />);
    }

    return (
        <View style={styles.container}>
            {indicadores}
        </View>
    );
};



export default PasswordStrengthIndicator;
