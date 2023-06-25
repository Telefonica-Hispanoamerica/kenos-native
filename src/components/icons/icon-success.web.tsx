import LottieView from "lottie-react-native";
import React from "react";
import { useTheme } from "../../hooks/ThemeContextProvider";
import { SkinName } from "../skins/types";
import Svg, { Path } from "react-native-svg";

type IconSucessProps = {
    size?: number | string;
    color?: string;
    skipAnimation?: boolean;
}

type SuccessLogoMap = {
    [key: SkinName]: Element;
};

const IconSuccessO2 = ({ size, color }: IconSucessProps) => {
    return (
        <Svg
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
        >
            <Path
                fill={color || "#003"}
                d="M10.633 14.164l6.317-6.15a.726.726 0 011.03 0 .704.704 0 010 1.023l-7.38 7.247-3.593-3.721a.7.7 0 01.027-1.023.724.724 0 011.032.029l2.567 2.595z"
            />
            <Path
                fill={color || "#003"}
                d="M12 2C6.484 2 2 6.484 2 12s4.484 10 10 10 10-4.484 10-10S17.516 2 12 2zm0 18.576c-4.728 0-8.576-3.848-8.576-8.576 0-4.728 3.848-8.576 8.576-8.576 4.728 0 8.576 3.848 8.576 8.576 0 4.728-3.848 8.576-8.576 8.576z"
            />
        </Svg>
    );
}

const IconSuccessGlobal = ({ size, color }: IconSucessProps) => {
    return <Svg
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
    >
        <Path
            fill={color || "#0B2739"}
            d="M9.947 16.64c.11.138.276.217.451.217h.013a.572.572 0 00.451-.232l6.452-8.639a.575.575 0 10-.922-.69l-6.01 8.044-2.489-3.128a.577.577 0 00-.9.718l2.954 3.71z"
        />
        <Path
            fill={color || "#0B2739"}
            d="M11.997 23c-3.495 0-6.213-.912-8.079-2.711C1.981 18.424 1 15.637 1 12.005c0-3.633.981-6.423 2.918-8.29C5.784 1.914 8.505 1 11.998 1c3.495 0 6.213.912 8.081 2.711C22.018 5.58 23 8.37 23 12.001c0 3.633-.984 6.42-2.922 8.288C18.21 22.088 15.492 23 11.997 23zm0-20.78c-6.49 0-9.78 3.29-9.78 9.785 0 6.488 3.29 9.779 9.78 9.779 6.492 0 9.787-3.291 9.787-9.78 0-6.49-3.295-9.785-9.787-9.785z"
        />
    </Svg>
}

function IconSuccess({ size, color, skipAnimation }: IconSucessProps) {
    const { skinName } = useTheme();
    const successLogo: SuccessLogoMap = {
        Movistar: <IconSuccessGlobal size={size} color={color} skipAnimation={skipAnimation} />,
        'Movistar-AR': <IconSuccessGlobal size={size} color={color} skipAnimation={skipAnimation} />,
        Vivo: <IconSuccessGlobal size={size} color={color} skipAnimation={skipAnimation} />,
        O2: <IconSuccessO2 size={size} color={color} skipAnimation={skipAnimation} />,
        Telefonica: <IconSuccessGlobal size={size} color={color} skipAnimation={skipAnimation} />,
        BlauLogo: <IconSuccessGlobal size={size} color={color} skipAnimation={skipAnimation} />,
    };
    return <>{successLogo[skinName]}</>
}

export default IconSuccess;