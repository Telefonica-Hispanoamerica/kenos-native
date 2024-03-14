import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props:any){
  
    console.log(props.colorGradientPrimary)
  
  return (
    <Svg
      width={90}
      height={91}
      viewBox="0 11 90 48"
      fill="none"
    >
      <Path
        d="M87 45C87 21.804 68.196 3 45 3S3 21.804 3 45"
        stroke="url(#paint0_linear_4274_3735)"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_4274_3735"
          x1={3}
          y1={9.5}
          x2={87}
          y2={9.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={props.colorGradientPrimary ?? "#081F2D"} />
          <Stop offset={1} stopColor={props.colorGradientSecondary ?? "#019DF4"}/>
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
