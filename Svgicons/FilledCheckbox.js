//This file contains the SVG for displaying the filled  checkbox.
import React from 'react'
import Svg, { Rect
} from 'react-native-svg'

const FilledCheckbox = () =>(
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0.5" y="0.5" width="17" height="17" rx="3.5" fill="black" stroke="#D1D1D1"/>
    </Svg>

)
export default FilledCheckbox;