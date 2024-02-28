import React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"
import { IconProps } from "../utils/types"

const IconInstagram:React.ComponentType<IconProps> = (props) =>{
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G clipPath="url(#clip0_2017_74730)">
        <Path
          d="M12 4.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.671.31.42.164.72.358 1.035.673.315.315.51.615.673 1.035.123.317.27.794.31 1.672.043.949.052 1.233.052 3.636s-.009 2.688-.052 3.637c-.04.878-.187 1.354-.31 1.671-.163.42-.358.72-.673 1.035a2.79 2.79 0 01-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.792 2.792 0 01-1.036-.673 2.788 2.788 0 01-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.949-.053-1.233-.053-3.637 0-2.403.01-2.687.053-3.636.04-.878.187-1.355.31-1.672.163-.42.358-.72.673-1.035.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052zM12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.419A4.41 4.41 0 004.51 4.51c-.5.5-.809 1.002-1.038 1.594-.223.572-.375 1.227-.419 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.419 2.185.23.592.537 1.094 1.038 1.594.5.5 1.002.808 1.594 1.038.572.223 1.227.375 2.184.419.96.043 1.267.054 3.711.054s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.411 4.411 0 001.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.418-2.185A4.413 4.413 0 0019.49 4.51c-.5-.5-1.003-.808-1.595-1.038-.572-.223-1.226-.375-2.184-.419C14.75 3.011 14.444 3 12 3"
          fill="url(#paint0_linear_2017_74730)"
        />
        <Path
          d="M17.884 7.196a1.08 1.08 0 11-2.16-.001 1.08 1.08 0 012.16 0"
          fill="url(#paint1_linear_2017_74730)"
        />
        <Path
          d="M12 7.504a4.496 4.496 0 100 8.992 4.496 4.496 0 000-8.992zM12 15A3 3 0 1111.998 9a3 3 0 010 6z"
          fill="url(#paint2_linear_2017_74730)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_2017_74730"
          x1={19.4895}
          y1={4.51053}
          x2={4.87551}
          y2={19.1247}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.01} stopColor="#49479B" />
          <Stop offset={0.16} stopColor="#6F469A" />
          <Stop offset={0.3} stopColor="#90469A" />
          <Stop offset={0.35} stopColor="#924393" />
          <Stop offset={0.43} stopColor="#9A3D80" />
          <Stop offset={0.52} stopColor="#A73462" />
          <Stop offset={0.6} stopColor="#B6293F" />
          <Stop offset={0.88} stopColor="#E19F37" />
          <Stop offset={1} stopColor="#EED940" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_2017_74730"
          x1={19.481}
          y1={4.51927}
          x2={4.8668}
          y2={19.1332}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.01} stopColor="#49479B" />
          <Stop offset={0.16} stopColor="#6F469A" />
          <Stop offset={0.3} stopColor="#90469A" />
          <Stop offset={0.35} stopColor="#924393" />
          <Stop offset={0.43} stopColor="#9A3D80" />
          <Stop offset={0.52} stopColor="#A73462" />
          <Stop offset={0.6} stopColor="#B6293F" />
          <Stop offset={0.88} stopColor="#E19F37" />
          <Stop offset={1} stopColor="#EED940" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_2017_74730"
          x1={19.4807}
          y1={4.51902}
          x2={4.86676}
          y2={19.1332}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.01} stopColor="#49479B" />
          <Stop offset={0.16} stopColor="#6F469A" />
          <Stop offset={0.3} stopColor="#90469A" />
          <Stop offset={0.35} stopColor="#924393" />
          <Stop offset={0.43} stopColor="#9A3D80" />
          <Stop offset={0.52} stopColor="#A73462" />
          <Stop offset={0.6} stopColor="#B6293F" />
          <Stop offset={0.88} stopColor="#E19F37" />
          <Stop offset={1} stopColor="#EED940" />
        </LinearGradient>
        <ClipPath id="clip0_2017_74730">
          <Path fill="#fff" transform="translate(3 3)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconInstagram
