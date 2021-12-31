import {View,StyleSheet,Pressable} from 'react-native';
import React from 'react';
import { useState,useEffect } from 'react';
import './Server';
import Fillingfast from '../Svgicons/Fillingfast';
import Booked from '../Svgicons/Booked';
import Available from '../Svgicons/Available';
import Rectangle from '../Svgicons/Rectangle';



const Seatselectionfilter = ({filteredseatdata,hideseatfilter}) => {

    const [seattype,setSeattype] = useState("");  

    const [isVisible,setIsVisible] = useState(true);

    useEffect(() => {
        filteredseatdata(seattype)
        hideseatfilter(isVisible)
    },[seattype,isVisible])


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

            <Pressable onPress={() => setIsVisible(false)} style={{alignSelf:'center',marginTop:10}}>
                <Rectangle />
            </Pressable>

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