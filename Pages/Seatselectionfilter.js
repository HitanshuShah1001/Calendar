import {View,StyleSheet,Pressable} from 'react-native';
import React from 'react';
import { useState,useEffect } from 'react';
import './Server';
import Fillingfast from '../Svgicons/Fillingfast';
import Booked from '../Svgicons/Booked';
import Available from '../Svgicons/Available';
import Rectangle from '../Svgicons/Rectangle';


/*
    This component is created for handling the different seat selection 
    filters.It takes filteredseatdata and the hideseatfilter component defined in the
    homepage as prop here and then whenever a seattype is selected or a
    dropdown button is clicked,useEffect hook will be trigerred and it will
    pass the seeattype and the isvisible state as parameter to the components.
    So that the appropriate data can be fetched from the API.
*/

const Seatselectionfilter = ({filteredseatdata,hideseatfilter}) => {

    const [seattype,setSeattype] = useState("");  

    const [isVisible,setIsVisible] = useState(true);

    useEffect(() => {
        filteredseatdata(seattype)
        hideseatfilter(isVisible)
    },[seattype,isVisible])

    // If fillingfast button is clicked.
    const FFfilter = () => {
            setSeattype("Filling Fast");
            filteredseatdata(seattype);
        }
    
    // If Available button is clicked.
    const Availablefilter = () => {
            setSeattype("Available");
            filteredseatdata(seattype);
    }

    //If bookedbutton is clicked.
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