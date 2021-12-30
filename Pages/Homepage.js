/* 
This file is the centre point of the app 
where every thing from other files/components is merged together to 
develop the app.
Along with the comments below, everything is explained in  detail in Readme.md file
I request to kindly go through it.
*/
import {Text, View,SafeAreaView,StyleSheet,Image,TouchableHighlight, Touchable,Pressable} from 'react-native';
import {BottomSheet,SearchBar} from 'react-native-elements';
import  {Title,Avatar,Appbar,Button,Switch, Subheading} from 'react-native-paper';
import React from 'react';
import { useState,useEffect,useCallback } from 'react';
import Cardview from './Cardview';
import './Server';
import Statictext from './Statictext';
import Calendarview from './Calendarview';
import Seatselectionfilter from './Seatselectionfilter';
import Header from './Header';
import Date from '../Svgicons/Date';
import Seats from '../Svgicons/Seats';
import Instructor from '../Svgicons/Instructor';
import Mysessions from '../Svgicons/Mysessions';
import Calendarclosebutton from '../Svgicons/Calendarclosebutton';
import Allsessions from '../Svgicons/Allsessions';
import Seatfiltersave from '../Svgicons/Seatfiltersave';

export default function Homepage(){ 
    
    const [count,setCount] = useState(0); //used for showing searchbar and switching back to header view

    const [SearchQuery,setSearchQuery] = useState(""); //storing the value that was given into search bar to fetch  appropriate data

    const [isVisible, setIsVisible] = useState(false); //used for toggling showing and closing of modal on clicking Seats filter 

    const [allsessionsbuttoncolor,setAllsessionsbuttoncolor] = useState('#D3D3D3'); // used for changing the button colour

    const [mysessionsbuttoncolor,setMysessionsbuttoncolor] = useState('#D3D3D3');

    const [events,setEvents] = useState([]); //used for unwrapping and storing json data from API
    
    const [calendarvisible,setCalendarvisible] = useState(false); //whether or not calendar is shown

   
    /* seattype used for storing the seattype selected("Available,Filling fast,Booked") 
    for displaying appropriate results*/

    const [seattype,setSeattype] = useState("");  
    /*useEffect hook is used for fetching the data whenever the app is loaded */

    useEffect(()=> {

        fetch('/api/events')
        .then(res => res.json())
        .then(json => setEvents(json.events))
        .catch(err => console.log(err))
    },[])

    /* Fetch data for all the sessions when AllSessions button is clicked */

    const AllSessions = (num) => {
        setAllsessionsbuttoncolor('#000000');
        setMysessionsbuttoncolor('#D3D3D3');
        setCount(num)
        fetch('api/events')
        .then(res => res.json())
        .then(json => setEvents(json.events))
        .catch(err => console.log(err))
    }

    /* Fetch data when the MySessions button is clicked for 
    the user specific sessions which 
    the user has registered to go to */

    const MySessions = () => {
        setMysessionsbuttoncolor('#000000');
        setAllsessionsbuttoncolor('#D3D3D3');
        fetch('api/events')
        .then(res => res.json())
        .then(json => setEvents(json.events.filter(obj=>obj.Type=='Registered')))
        .catch(err => console.log(err))

    }

    /* Function that returns results by taking the user 
    input entry in search box as its parameter and 
    then filtering the data based on the user input  */

    const Query = (text) => {
        fetch('api/events')
        .then(res => res.json())
        .then(json => setEvents(json.events.filter(obj=>obj.Iname==text)))
        .catch(err => console.log(err))
        setSearchQuery(text);
    }

    const calendarviewdata = (childdata) => {
        setEvents(childdata);
    }

    const filteredseatdata = (childdata) => {
        setSeattype(childdata);
    }

    const countvalue = (childdata) => {
        setCount(childdata);
    }

    const Savebuttonpressed = () => {
        if(seattype!="")
        {
            fetch('/api/events')
            .then(res => res.json())
            .then(json => setEvents(json.events.filter(obj=>obj.Seats==seattype)))
            .catch(err => console.log(err))
            setIsVisible(false);
        }
        else
        {
            fetch('/api/events')
            .then(res => res.json())
            .then(json => setEvents(json.events))
            .catch(err => console.log(err))
            setIsVisible(false);
        }
    }

    /*
        header is a ternary operator that checks if count variable  is 0 and if it 
        is then it returns the normal header and if it isn't, then it returns 
        searchbar.Basically for switching between Header view and search view
    */
   
    let header = count!==0 ?
    <SafeAreaView>
        <View > 
         <SearchBar
         placeholder="Instructor's name"
         platform='ios'
         onChangeText={(text) => Query(text)}
         value={SearchQuery}
         autoCorrect={false}
         cancelButtonTitle="Cancel"
         onCancel={() => AllSessions(0)}
         style={{width:'100%'}}
         onClear={() => AllSessions(1)}
        />
        </View>
    </SafeAreaView>
    :
    <Header countvalue = {countvalue} />

    /*
    Here,the screen is divided into two portions via the flex property.
    So that the content is automatically aligned for different screen sizes.
    So the first view container will take 1/5 of the remaining space and the second view container will
    take 4/5 of the remaining space.
    */
    
    return (

        <>
        {header}
        
        <Statictext />

        <View style={{flex:4}}> 
            <View style={{flexDirection:'row',marginTop:10}}>
                <Pressable onPress={() => AllSessions(0)} style={{marginLeft:13,marginRight:20}}>
                    <Allsessions  />
                </Pressable>
                <Pressable onPress={MySessions}>
                    <Mysessions />
                </Pressable>
            </View>

            <View style={{flexDirection:'row',marginTop:25}}>
                <Pressable onPress={() => setCalendarvisible(true)} style={{marginLeft:8}}>
                    <Date />
                </Pressable>
                <BottomSheet  isVisible={calendarvisible}>
                    <Calendarview calendarviewdata={calendarviewdata} />
                        <View style={{backgroundColor:'#FFFFFF'}}>
                            <Pressable onPress={()=>setCalendarvisible(false)} style={{alignSelf:'center',backgroundColor:'#FFFFFF'}}>
                            
                                <Calendarclosebutton />
                            </Pressable>
                        </View>
                </BottomSheet>
                <Pressable onPress={()=>setIsVisible(true)} style={{marginLeft:8}}>
                    <Seats />
                </Pressable>
                <BottomSheet isVisible={isVisible}>
                    <View style={{backgroundColor:'#FFFFFF'}}>
                        <Seatselectionfilter filteredseatdata={filteredseatdata} />
                            <Pressable onPress={Savebuttonpressed} style={{alignSelf:'center'}}>
                                <Seatfiltersave />
                            </Pressable>
                    </View>
                </BottomSheet>
                <Pressable onPress={()=>setCount(1)} style={{marginLeft:8}}>
                    <Instructor />
                </Pressable>
            </View>
            <Cardview eventslist={events}  />
            
        </View>

        </>
    );
}
//styling parameters for buttons,text,cards
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
    sessionsbuttonstyling:{
        fontSize:16
    },
    buttonlabelstyle:{
        fontSize:16,
        fontWeight:'400',
    }

    
})