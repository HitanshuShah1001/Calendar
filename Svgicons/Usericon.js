//This file contains the SVG for the User icon on the top right of the screen 
import React from 'react'
import { View } from 'react-native'
import Svg, { 
  Circle,Use,Image,Defs,Pattern
} from 'react-native-svg'

const Usericon = () => (
    <View>
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <Circle cx="16" cy="16" r="16" fill="url(#pattern0)"/>
        <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <Use xlinkHref="#image0_6_772" transform="scale(0.00025)"/>
        </Pattern>
        </Defs>
        
    </Svg>
    </View>
)
export default Usericon;