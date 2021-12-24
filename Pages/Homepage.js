import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Text, View,ScrollView,SafeAreaView,StyleSheet,Image} from 'react-native';
import {BottomSheet,ListItem} from 'react-native-elements';
import  {Title,Avatar,Card,IconButton,Checkbox,Appbar,Searchbar,Button,Paragraph,Caption} from 'react-native-paper';

import React from 'react';

import { useState,useEffect } from 'react';
import './Server';

export default function Homepage(){ 
    const [count,setCount]=useState(0);

    const [SearchQuery,setSearchQuery] = useState("");

    const [isVisible, setIsVisible] = useState(false); //used for toggling showing and closing of modal on clicking Seats filter 

    const [buttoncolor,setButtoncolor] = useState('#000000'); // used for changing the button colour

    const [classes,setClasses] = useState([]); //used for unwrapping and storing json data from API
    
    const [calendarvisible,setCalendarvisible] = useState(false); //whether or not calendar is shown

    /* seattype used for storing the seattype selected("Available,Filling fast,Booked") 
    for displaying appropriate results*/

    const [seattype,setSeattype] = useState(""); 

   
    /*useEffect hook is used for fetching the data whenever the app is loaded */

    useEffect(()=> {
        fetch('/api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes))
        .catch(err => console.log(err))
    },[])

    const Query = () => {
        fetch('api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes.filter(obj=>obj.Iname==SearchQuery)))
        .catch(err => console.log(err))
        setCount(0);
        setSearchQuery("");
    }
    /*
    markedday is a dictionary that stores the date of the events by extracting it from classes object 
    and the values are the filters that are applied such as the color to be shown in the calendar and this markedday
    is used  as  a prop in calendar component below
    */

    let markedDay = {};
        classes.map((item) => {
            markedDay[item.Date] = {
            selected: true,
            marked: true,
            selectedColor: "purple",
            };
        });
    
    /* Fetch data for all the sessions when AllSessions button is clicked */

    const AllSessions = () => {
        fetch('api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes))
        .catch(err => console.log(err))
    }

    /* Fetch data when the MySessions button is clicked for 
    the user specific sessions which 
    the user has registered to go to */

    const MySessions = () => {
        fetch('api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes.filter(obj=>obj.Type=='Registered')))
        .catch(err => console.log(err))
    }

    /*
    Close the Seat modal for showing the filters of seats when the Savebutton is clicked 
    and if no filter(Available,Filling Fast,Booked) was selected,
    then showing unfiltered data 
    */

    const Savebuttonpressed = () => {

        if(seattype!="")
        {
            fetch('/api/classes')
            .then(res => res.json())
            .then(json => setClasses(json.classes.filter(obj=>obj.Seats==seattype)))
            .catch(err => console.log(err))
            setIsVisible(false);
        }
        else
        {
            fetch('/api/classes')
            .then(res => res.json())
            .then(json => setClasses(json.classes))
            .catch(err => console.log(err))
            setIsVisible(false);
        }
    }
    
    /* 
    The selecteddaysevent takes a date as a parameter and is invoked 
    when the date on the calendar was selected and then returns the date 
    filtered data from the api */

    const Selecteddaysevent = (date) => {
        fetch('/api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes.filter(obj=>obj.Date==date)))
        .catch(err => console.log(err))
        setCalendarvisible(false);
    }


    let header = count!==0 ? 
    <SafeAreaView>
    <View style={{flexDirection:'row'}}> 
    <Searchbar placeholder="Enter instructor's name" style={{width:'90%',borderRadius:20}} onChangeText={(text) => setSearchQuery(text)}/> 
    <Button onPress={Query} icon="magnify"/>
    </View>
    </SafeAreaView>
    :
    <SafeAreaView> 
        <Appbar.Header style={{backgroundColor: '#FFFFFF'}}> 
        <Appbar.Action  icon="dots-horizontal" style={{backgroundColor:'#FFFFFF'}}/>
        <Appbar.Content title="" subtitle="" />
            <Appbar.Action  icon="magnify" onPress={() => setCount(1)}/>
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
        <View style={{flex:1,flexDirection:'column'}}> 
            <Title style={{marginTop:20,marginLeft:10}}>Sessions</Title>
            <Text style={{marginLeft:10,marginTop:10}}>Discover on-demand learning,discussions</Text>
            <Text style={styles.textStyle}>and interactive sesssions in your </Text>
            <Text style={styles.textStyle}>community. </Text>
        </View>
        
        <View style={{flex:4}}>

            <View style={{flexDirection:'row'}}>
                <Button color={buttoncolor} onPress={AllSessions}>All Sessions</Button>
                <Button color={buttoncolor} onPress={MySessions}>My Sessions</Button>
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
                        <Button onPress={()=>setCalendarvisible(false)} mode="contained" style={{borderRadius:10,padding:3,marginLeft:10,marginRight:10}} color="#000000">Close</Button>
                    </BottomSheet>
                    
                    <Button mode='contained' style={styles.buttonStyle} color='#D3D3D3' onPress={() => setIsVisible(true)}>Seats</Button>
                        <BottomSheet modalProps={{}} isVisible={isVisible}>
                        <View style={{backgroundColor:'#FFFFFF'}}> 
                            <Checkbox.Item label=" 🟨  Filling Fast" status='unchecked' onPress={()=>setSeattype("Filling Fast")}  color='#000000' uncheckedColor='#D3D3D3'/>
                            <Checkbox.Item label=" 🟦  Available" status='unchecked'  onPress={()=>setSeattype("Available")}/>
                            <Checkbox.Item label=" 🟩  Booked" status='unchecked'  onPress={()=>setSeattype("Booked")} />
                            <Button onPress={Savebuttonpressed} mode="contained" style={{borderRadius:10,padding:3,marginLeft:10,marginRight:10}} color="#000000">Save</Button>
                            <Button></Button>
                        </View>
                    </BottomSheet>
                <Button mode='contained' style={styles.buttonStyle} color='#D3D3D3' > Instructor</Button>

            </View>
            
            <ScrollView style={{marginTop:10}}>
            {
            classes.map((classes,idx) => {
                    return(
                    <View key={idx}>
                        <Card.Title
                            title={classes.classname}
                            subtitle={classes.Date + "  " + classes.Time }
                            titleStyle={{fontSize:18}}
                            titleNumberOfLines={3}
                            subtitleNumberOfLines={4}
                            style={{marginTop:18}}
                            left={(props) => <Avatar.Image {...props} size={50} source={{uri:classes.Instructorimage}} />}
                            
                        />
                        <Card.Content>
                            <Caption style={{textAlign:'center'}}>{classes.Date + " " + classes.Seats}</Caption>
                        </Card.Content>
                        <Button color='#D3D3D3' mode='contained' width='40%' style={{alignSelf:'center',borderRadius:15}}>{classes.Type}</Button>

                    </View>
                    );
                }
            )}
            </ScrollView>
        </View>

        </>
    );
}
//styling parameters for buttons,text,cards
const styles=StyleSheet.create({
    textStyle:{
        marginLeft:10,
        marginTop:5
    },
    buttonStyle:{
        marginLeft:10,
        borderRadius:15
    }
    
})