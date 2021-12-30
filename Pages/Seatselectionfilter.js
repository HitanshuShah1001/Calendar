import {Text, View,SafeAreaView,StyleSheet,Image,TouchableHighlight, Touchable,Pressable} from 'react-native';
import {BottomSheet,SearchBar} from 'react-native-elements';
import  {Title,Avatar,Appbar,Button,Switch, Subheading} from 'react-native-paper';
import React from 'react';
import { useState,useEffect,useCallback } from 'react';
import './Server';
import Fillingfast from '../Svgicons/Fillingfast';
import Booked from '../Svgicons/Booked';
import Available from '../Svgicons/Available';

const Seatselectionfilter = ({filteredseatdata}) => {

    const [seattype,setSeattype] = useState("");  

    const [isFFSwitchOn, setIsFFSwitchOn] = useState(false);

    const [isAvailableSwitchOn, setIsAvailableSwitchOn] = useState(false);

    const [isBookedSwitchOn, setIsBookedSwitchOn] = useState(false);

    useEffect(() => {
        filteredseatdata(seattype)
    },[seattype])
    
    const FFfilter = () => {
            setSeattype("Filling Fast");
            filteredseatdata(seattype);
        }
    

    const Availablefilter = () => {
            setSeattype("Available");
            filteredseatdata(seattype);
    }

    const Bookedfilter = () => {
            setSeattype("Booked");
            filteredseatdata(seattype);
        }
    

    return (
        <View style={{backgroundColor:'#FFFFFF'}}>
            <Pressable onPress={FFfilter}>
                <Fillingfast />
            </Pressable>

            <Pressable onPress={Availablefilter}>
                <Available />
            </Pressable>

            <Pressable onPress={Bookedfilter}>
                <Booked />
            </Pressable>

        </View>
    );

}

const styles=StyleSheet.create({

    buttonStyle:{
        marginLeft:10,
        borderRadius:20
    },
    saveButtonStyling:{
        borderRadius:20,
        padding:3,
        marginLeft:10,
        marginRight:10,
        marginTop:15,
    },
    checkboxtextstyling:{
        marginTop:10,
        marginLeft:10
    },
    sessionsbuttonstyling:{
        fontSize:16
    },
    buttonlabelstyle:{
        fontSize:16,
        fontWeight:'400',
    }
    
})

export default Seatselectionfilter;