import React from "react";
import { View } from "react-native";
import { Text2, Text6 } from "../Text/Text";
import { MovistarLogo, TelefonicaLogo } from "../Logo/Logo";
import IconSuccess from "../icons/icon-success";

export const Welcome = () => {
    return (<View style={{ gap: 8, margin: 16 }}>
        <Text6 color="black">Bienvenido al Storybook de Kénos Native</Text6>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 16 }}>
            <MovistarLogo size={64} />
            <TelefonicaLogo size={64} />
        </View>
        <Text2 color="black" light>Esta es nuestra librería de componentes nativos, basada en los tokens de Mistica. Acá vas a poder visualizar los componentes nativos que se utilizan en la app.
        </Text2>
        <Text2 color="black" medium>El objetivo de está librería es recrear los componentes nativos de Android y de IOS.</Text2>
        <Text2 color="black" light>Si bien está librería puede compilarse para Web, pueden haber algunos problemas en los componentes.</Text2>
    </View>);
}