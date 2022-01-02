import {View,StyleSheet,Pressable} from 'react-native';
import React from 'react';
import { useState,useEffect } from 'react';
import './Server';
import Fillingfast from '../Svgicons/Fillingfast';
import Booked from '../Svgicons/Booked';
import Available from '../Svgicons/Available';
import Rectangle from '../Svgicons/Rectangle';
import Checkbox from '../Svgicons/Checkbox';
import FilledCheckbox from '../Svgicons/FilledCheckbox';


/*
    This component is created for handling the different seat selection 
    filters.It takes filteredseatdata and the hideseatfilter component defined in the
    homepage as prop here and then whenever a seattype is selected or a
    dropdown button is clicked,useEffect hook will be trigerred and it will
    pass the seeattype and the isvisible state as parameter to the components.
    So that the appropriate data can be fetched from the API.
*/

const Seatselectionfilter = ({filteredseatdata,hideseatfilter}) => {
    
    
    const [seattype,setSeattype] = useState(""); //Initially no seat type filter is selected,so it is initialised with empty string. 

    /*
    As we are showing the filter box,
    visible is set to true and when we click 
    on save or close the filter box,it will be set to false.
    */

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

        /*
        If any of the seat filter is selected,then with the help 
        of a ternary operator,a filled checkbox is presented.
        */

        let filledfillingfast = seattype==="Filling Fast"?<FilledCheckbox />:<Checkbox />
        
        let filledavailable  = seattype==="Available"?<FilledCheckbox />:<Checkbox />

        let filledbooked = seattype==="Booked"?<FilledCheckbox />:<Checkbox />


    return (
        <View style={{backgroundColor:'#FFFFFF'}}>


            <Pressable onPress={() => setIsVisible(false)} style={{alignSelf:'center',marginTop:10}}>
                <Rectangle />
            </Pressable>
               

            <View style={styles.buttonStyle}>

                <View style={styles.componentstyle}>
                    <Pressable onPress={FFfilter}>
                        <Fillingfast />
                    </Pressable>
                </View>

                <View style={styles.checkboxtextstyling}>
                    {filledfillingfast}
                </View>

            </View>

            
            <View style={styles.buttonStyle}>
                
                <View style={styles.componentstyle}>
                    <Pressable onPress={Availablefilter}>
                        <Available />
                    </Pressable>
                </View>

                <View style={styles.checkboxtextstyling}>
                    {filledavailable}
                </View>

            </View>

            <View style={styles.buttonStyle}>

                <View style={styles.componentstyle}>
                    <Pressable onPress={Bookedfilter}>
                        <Booked />
                    </Pressable>
                </View>

                <View style={styles.checkboxtextstyling}>
                    {filledbooked}
                </View>
                
            </View>

        </View>
    );

}

const styles=StyleSheet.create({

    buttonStyle:{
        flexDirection:'row',
        flex:1
    },
    saveButtonStyling:{
        borderRadius:20,
        padding:3,
        marginLeft:10,
        marginRight:10,
        marginTop:15,
    },
    checkboxtextstyling:{
        flex:1,
        marginTop:10
    },
    sessionsbuttonstyling:{
        fontSize:16
    },
    buttonlabelstyle:{
        fontSize:16,
        fontWeight:'400',
    },
    componentstyle:{
        flex:10
    }
    
})

export default Seatselectionfilter;