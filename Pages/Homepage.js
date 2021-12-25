import {Calendar} from 'react-native-calendars';
import {Text, View,SafeAreaView,StyleSheet,Image,TouchableHighlight, Touchable} from 'react-native';
import {BottomSheet,SearchBar} from 'react-native-elements';
import  {Title,Avatar,Checkbox,Appbar,Button,Caption} from 'react-native-paper';
import React from 'react';
import { useState,useEffect } from 'react';
import Cardview from './Cardview';
import './Server';
import Statictext from './Statictext';

export default function Homepage(){ 
    const [count,setCount] = useState(0); //used for showing searchbar and switching back to header view

    const [SearchQuery,setSearchQuery] = useState(""); //storing the value that was given into search bar to fetch  appropriate data

    const [isVisible, setIsVisible] = useState(false); //used for toggling showing and closing of modal on clicking Seats filter 

    const [allsessionsbuttoncolor,setAllsessionsbuttoncolor] = useState('#D3D3D3'); // used for changing the button colour

    const [mysessionsbuttoncolor,setMysessionsbuttoncolor] = useState('#D3D3D3');

    const [events,setEvents] = useState([]); //used for unwrapping and storing json data from API
    
    const [calendarvisible,setCalendarvisible] = useState(false); //whether or not calendar is shown

    const [constevents,setConstevents] = useState([]); //used for storing the original data from API as backup,this wont change on API calls.

    const [datebuttoncolor,setDatebuttoncolor] = useState('#D3D3D3');

    const [seatbuttoncolor,setSeatbuttoncolor] = useState('#D3D3D3');

    const [instructorbuttoncolor,setInstructorbuttoncolor] = useState('#D3D3D3');

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

    
    /*
    markedday is a dictionary that stores the date of the events by extracting it from events object 
    and the values are the filters that are applied such as the color to be shown in the calendar and this markedday
    is used  as  a prop in calendar component below
    */


    let markedDay={};
    events.map((item) => {
        markedDay[item.Date] = {
        selected: true,
        selectedColor: "black",
        };
    });
    
    /* Fetch data for all the sessions when AllSessions button is clicked */

    const AllSessions = (num) => {
        setAllsessionsbuttoncolor('#000000');
        setMysessionsbuttoncolor('#D3D3D3');
        setCount(num)
        fetch('api/events')
        .then(res => res.json())
        .then(json => setEvents(json.events))
        .catch(err => console.log(err))
        setConstevents(events);

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

    /* On pressing the save button on the seat selection filter
    if no option was selected,return unfiltered data,else
    return data based on seattype selected
    */

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
    Close the Seat modal for showing the filters of seats when the Savebutton is clicked 
    and if no filter(Available,Filling Fast,Booked) was selected,
    then showing unfiltered data 
    */

    
    /* 
    The selecteddaysevent takes a date as a parameter and is invoked 
    when the date on the calendar was selected and then returns the date 
    filtered data from the api */

    const Selecteddaysevent = (date) => {

        fetch('/api/events')
        .then(res => res.json())
        .then(json => setEvents(json.events.filter(obj=>obj.Date==date)))
        .catch(err => console.log(err))
        setCalendarvisible(false);

    }


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
    <SafeAreaView> 

        <Appbar.Header style={{backgroundColor: '#FFFFFF'}}> 
        <Appbar.Action  icon="reorder-horizontal" style={{backgroundColor:'#FFFFFF'}} color='#A9A9A9'/>
        <Appbar.Content title="" subtitle="" />
            <Appbar.Action  icon="magnify" onPress={() => setCount(1)} color="#A9A9A9"/>
            <Avatar.Image size={34} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblGHmIA70kc9T4UJy-AFc0YLcnPpu5kwR2Q&usqp=CAU'}}/>
        </Appbar.Header>

    </SafeAreaView>

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
            <View style={{flexDirection:'row'}}>
                    <Button  color={allsessionsbuttoncolor} onPress={() => AllSessions(0)}>All Sessions</Button>
                    <Button color={mysessionsbuttoncolor} onPress={MySessions}>My Sessions</Button>
            </View>
        

            <View style={{flexDirection:'row',marginTop:15}}>

                <Button mode='contained' style={styles.buttonStyle} color='#D3D3D3' onPress={() => setCalendarvisible(true)}>Date</Button>

                    <BottomSheet  isVisible={calendarvisible}>

                        <Calendar
                            markedDates={ markedDay }
                            current={'2021-03-01'}
                            minDate={'2010-01-01'}
                            maxDate={'2021-12-12'}
                            onDayPress={day => {
                                Selecteddaysevent(day.dateString);
                            }}
                            monthFormat={'MM yyyy'}
                            hideArrows={false}
                            hideExtraDays={false}
                            disableMonthChange={false}
                            firstDay={1}
                            />

                        <Button onPress={()=>setCalendarvisible(false)} mode="contained" style={styles.saveButtonStyling} color="#000000">Close</Button>
                    
                    </BottomSheet>
                    
                    <Button mode='contained' style={styles.buttonStyle} color='#D3D3D3' onPress={() => setIsVisible(true)}>Seats</Button>

                        <BottomSheet isVisible={isVisible}>

                            <View style={{backgroundColor:'#FFFFFF'}}> 
                                <Checkbox.Item label=" 🟨  Filling Fast" status='unchecked' onPress={()=>setSeattype("Filling Fast")}  color='#000000' uncheckedColor='#D3D3D3'/>
                                <Checkbox.Item label=" 🟦  Available" status='unchecked'  onPress={()=>setSeattype("Available")}/>
                                <Checkbox.Item label=" 🟩  Booked" status='unchecked'  onPress={()=>setSeattype("Booked")} />
                                <Button onPress={Savebuttonpressed} mode="contained" style={styles.saveButtonStyling} color="#000000">Save</Button>
                                <Button></Button>
                            </View>

                        </BottomSheet>

                    <Button mode='contained' style={styles.buttonStyle} color='#D3D3D3' onPress={()=>setCount(1)}> Instructor</Button>

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
        marginRight:10
    },
    
})