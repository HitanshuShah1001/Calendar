import {Text, View,SafeAreaView,StyleSheet,Image,TouchableHighlight, Touchable} from 'react-native';
import {BottomSheet,SearchBar} from 'react-native-elements';
import  {Title,Avatar,Appbar,Button,Switch, Subheading} from 'react-native-paper';
import React from 'react';
import { useState,useEffect,useCallback } from 'react';
import './Server';


const Seatselectionfilter = ({filteredseatdata}) => {

    const [seattype,setSeattype] = useState("");  

    const [isFFSwitchOn, setIsFFSwitchOn] = useState(false);

    const [isAvailableSwitchOn, setIsAvailableSwitchOn] = useState(false);

    const [isBookedSwitchOn, setIsBookedSwitchOn] = useState(false);

    useEffect(() => {
        filteredseatdata(seattype)
    },[seattype])
    
    const FFfilter = () => {

        if(isFFSwitchOn)
        {
            setSeattype("");
            setIsFFSwitchOn(false);
            filteredseatdata(seattype);
        }
        else{
            setSeattype("Filling Fast");
            setIsFFSwitchOn(true);
            setIsAvailableSwitchOn(false);
            setIsBookedSwitchOn(false);
            filteredseatdata(seattype);
        }
    }

    const Availablefilter = () => {
        if(isAvailableSwitchOn)
        {
            setSeattype("");
            setIsAvailableSwitchOn(false);
            filteredseatdata(seattype);
        }
        else
        {
            setSeattype("Available");
            setIsFFSwitchOn(false);
            setIsAvailableSwitchOn(true);
            setIsBookedSwitchOn(false);
            filteredseatdata(seattype);
        }
    }

    const Bookedfilter = () => {
        if(isBookedSwitchOn)
        {
            setSeattype("");
            setIsBookedSwitchOn(false);
            filteredseatdata(seattype);
        }
        else{
            setSeattype("Booked");
            setIsFFSwitchOn(false);
            setIsAvailableSwitchOn(false);
            setIsBookedSwitchOn(true);
            filteredseatdata(seattype);
        }
    }

    return (
        <View style={{backgroundColor:'#FFFFFF'}}>
            <View style={{flexDirection:'row',marginTop:10}}>
                <Subheading style={styles.checkboxtextstyling}>🟨  Filling Fast</Subheading>
                    <Switch value={isFFSwitchOn} onValueChange={FFfilter} style={{marginLeft:60,marginTop:5}} color='#000000' />
            </View>

            <View style={{flexDirection:'row',marginTop:20}}>
                <Subheading style={styles.checkboxtextstyling}>🟦  Available </Subheading>
                    <Switch value={isAvailableSwitchOn} onValueChange={Availablefilter} style={{marginLeft:65,marginTop:5}} color='#000000'/>
            </View>
                                
            <View style={{flexDirection:'row',marginTop:20}}>
                <Subheading style={[styles.checkboxtextstyling]}>🟩  Booked  </Subheading>
                    <Switch value={isBookedSwitchOn} onValueChange={Bookedfilter} style={{marginLeft:70,marginTop:5}} color='#000000'/>
            </View>
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