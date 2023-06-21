import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "./type"

function IconCamera({ color = 'white', size = 24 }: IconProps) {
    return (
        <Svg width={size} height={size} fill="none">
            <Path fill={color}
                d="M21.322 18.878c.535-.566.499-1.384.493-1.434h-.003V8.556c0-.76-.294-1.204-.54-1.445-.44-.428-.994-.47-1.151-.481a.471.471 0 01-.04-.004l-5.235-.006-.813-1.389a1.197 1.197 0 00-1.027-.591h-2.183c-.456 0-.865.255-1.067.664L9.11 6.62c-2.42 0-4.428.003-4.95.006-.826.003-1.29.33-1.537.602-.513.574-.451 1.306-.446 1.325l.026 8.908c.047 1.6 1.17 1.91 1.633 1.91l16.249.003c.636 0 1.025-.269 1.238-.496zm-.88-.815c-.047.05-.137.118-.358.123l-16.266-.003H3.81c-.055-.008-.386-.051-.407-.733l-.028-8.956c-.003-.002-.017-.283.143-.462.118-.134.336-.202.647-.204.55-.006 2.737-.006 5.32-.006.23 0 .44-.132.54-.336l.798-1.647 2.168-.006.99 1.69a.605.605 0 00.52.296l5.591.003c.003 0 .202.011.337.143.12.115.179.314.179.591l.003 8.927c.005.065-.009.41-.169.58zm-5.512-5.056c0-2.74-2.238-2.97-2.812-2.983a1.968 1.968 0 00-.222.003h-.059c-.588.005-2.781.21-2.781 2.966 0 2.762 2.213 2.977 2.801 2.986h.095c.03 0 .061 0 .091-.002h.083c.563-.012 2.804-.225 2.804-2.97zm-1.202 0c0 .431 0 1.742-1.622 1.773l-.154.003h-.075c-1.617-.025-1.617-1.356-1.617-1.793 0-.434 0-1.759 1.591-1.773h.048c.065 0 .132 0 .19.003 1.64.04 1.64 1.356 1.64 1.787z"
            />
        </Svg>
    )
}

export default IconCamera;