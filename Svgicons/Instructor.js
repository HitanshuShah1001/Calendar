import React from 'react'
import { View } from 'react-native'
import Svg, { 
  Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask 
} from 'react-native-svg'

const Instructor = () => (
    <Svg width="106" height="36" viewBox="0 0 106 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect width="106" height="36" rx="18" fill="#F2F2F2"/>
        <Path d="M18.8182 12.3636H17.4091V24H18.8182V12.3636ZM22.8026 18.75C22.8026 17.2273 23.7457 16.3636 25.0298 16.3636C26.2741 16.3636 27.0298 17.1761 27.0298 18.5455V24H28.3707V18.4545C28.3707 16.2273 27.1832 15.1591 25.4162 15.1591C24.098 15.1591 23.2798 15.75 22.8707 16.6364H22.7571V15.2727H21.4616V24H22.8026V18.75ZM37.0028 17.2273C36.5824 15.9886 35.6392 15.1591 33.9119 15.1591C32.071 15.1591 30.7074 16.2045 30.7074 17.6818C30.7074 18.8864 31.4233 19.6932 33.0256 20.0682L34.4801 20.4091C35.3608 20.6136 35.7756 21.0341 35.7756 21.6364C35.7756 22.3864 34.9801 23 33.7301 23C32.6335 23 31.946 22.5284 31.7074 21.5909L30.4347 21.9091C30.7472 23.392 31.9688 24.1818 33.7528 24.1818C35.7812 24.1818 37.1619 23.0739 37.1619 21.5682C37.1619 20.3523 36.4006 19.5852 34.8438 19.2045L33.5483 18.8864C32.5142 18.6307 32.0483 18.2841 32.0483 17.6136C32.0483 16.8636 32.8438 16.3182 33.9119 16.3182C35.0824 16.3182 35.5653 16.9659 35.7983 17.5682L37.0028 17.2273ZM42.9759 15.2727H41.1122V13.1818H39.7713V15.2727H38.4531V16.4091H39.7713V21.8636C39.7713 23.3864 40.9986 24.1136 42.1349 24.1136C42.6349 24.1136 42.9531 24.0227 43.1349 23.9545L42.8622 22.75C42.7486 22.7727 42.5668 22.8182 42.2713 22.8182C41.6804 22.8182 41.1122 22.6364 41.1122 21.5V16.4091H42.9759V15.2727ZM44.9929 24H46.3338V18.4773C46.3338 17.2955 47.2656 16.4318 48.5384 16.4318C48.8963 16.4318 49.2656 16.5 49.3565 16.5227V15.1591C49.2031 15.1477 48.8509 15.1364 48.652 15.1364C47.6065 15.1364 46.6974 15.7273 46.3793 16.5909H46.2884V15.2727H44.9929V24ZM56.446 20.4318C56.446 22.0682 55.196 22.8182 54.196 22.8182C53.0824 22.8182 52.2869 22 52.2869 20.7273V15.2727H50.946V20.8182C50.946 23.0455 52.1278 24.1136 53.7642 24.1136C55.0824 24.1136 55.946 23.4091 56.3551 22.5227H56.446V24H57.7869V15.2727H56.446V20.4318ZM63.7884 24.1818C65.7202 24.1818 66.9929 23 67.2202 21.4545H65.8793C65.6293 22.4091 64.8338 22.9773 63.7884 22.9773C62.1974 22.9773 61.1747 21.6591 61.1747 19.6364C61.1747 17.6591 62.2202 16.3636 63.7884 16.3636C64.9702 16.3636 65.6747 17.0909 65.8793 17.8864H67.2202C66.9929 16.25 65.6065 15.1591 63.7656 15.1591C61.402 15.1591 59.8338 17.0227 59.8338 19.6818C59.8338 22.2955 61.3338 24.1818 63.7884 24.1818ZM72.9759 15.2727H71.1122V13.1818H69.7713V15.2727H68.4531V16.4091H69.7713V21.8636C69.7713 23.3864 70.9986 24.1136 72.1349 24.1136C72.6349 24.1136 72.9531 24.0227 73.1349 23.9545L72.8622 22.75C72.7486 22.7727 72.5668 22.8182 72.2713 22.8182C71.6804 22.8182 71.1122 22.6364 71.1122 21.5V16.4091H72.9759V15.2727ZM78.4446 24.1818C80.8082 24.1818 82.3991 22.3864 82.3991 19.6818C82.3991 16.9545 80.8082 15.1591 78.4446 15.1591C76.081 15.1591 74.4901 16.9545 74.4901 19.6818C74.4901 22.3864 76.081 24.1818 78.4446 24.1818ZM78.4446 22.9773C76.6491 22.9773 75.831 21.4318 75.831 19.6818C75.831 17.9318 76.6491 16.3636 78.4446 16.3636C80.2401 16.3636 81.0582 17.9318 81.0582 19.6818C81.0582 21.4318 80.2401 22.9773 78.4446 22.9773ZM84.446 24H85.7869V18.4773C85.7869 17.2955 86.7188 16.4318 87.9915 16.4318C88.3494 16.4318 88.7188 16.5 88.8097 16.5227V15.1591C88.6562 15.1477 88.304 15.1364 88.1051 15.1364C87.0597 15.1364 86.1506 15.7273 85.8324 16.5909H85.7415V15.2727H84.446V24Z" fill="black"/>
    </Svg>

)
export default Instructor;