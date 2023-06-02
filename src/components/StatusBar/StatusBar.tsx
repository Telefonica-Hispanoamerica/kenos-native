import { StatusBar as RNStatusBar } from "react-native";
import { useTheme } from "../../hooks/ThemeContextProvider";

function StatusBar() {
    const { skin } = useTheme();
    const { navigationBarBackground } = skin.colors;
    return <RNStatusBar backgroundColor={navigationBarBackground} />
}

export default StatusBar;