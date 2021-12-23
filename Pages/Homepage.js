import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Text, View,ScrollView,Dimensions,StyleSheet,Image} from 'react-native';
import {BottomSheet,ListItem} from 'react-native-elements';
import  {Title,Button,FAB,Avatar,Card,IconButton,Checkbox} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import  Modal  from 'react-native-modal';
import React from 'react';
import Header from './Header';
import { useState,useEffect } from 'react';
import './Server';
export default function Homepage(){ 

    const [isVisible, setIsVisible] = useState(false);
    const [buttoncolor,setButtoncolor] = useState('#000000'); // used for changing the button colour
    const [classes,setClasses] = useState([]); //used for unwrapping and storing json data from API
    const [calendarvisible,setCalendarvisible] = useState(false);//whether or not calendar is shown
    const [seattype,setSeattype] = useState("");
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    
    

    useEffect(()=> {

        fetch('/api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes))
        .catch(err => console.log(err))
        console.log(classes);

    },[])
    const AllSessions = () => {

        fetch('api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes))
        .catch(err => console.log(err))

    }
    const Durationfilter = () => {

        fetch('/api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes.filter(obj=>obj.Duration=='30 min')))
        .catch(err => console.log(err))

    }

    const Savebuttonpressed = () => {
        fetch('/api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes.filter(obj=>obj.Seats==seattype)))
        .catch(err => console.log(err))
        console.warn(seattype,classes);
        setIsVisible(false);
    }
    /*
    Here,the screen is divided into two portions via the flex property.
    So that the content is automatically aligned for different screen sizes.
    So the first view container will take 1/5 of the remaining space and the second view container will
    take 4/5 of the remaining space.
    */
    
    return (
        <>
        <Header/>
        <View style={{flex:1,flexDirection:'column'}}> 
            <Title style={{marginTop:20,marginLeft:10}}>Sessions</Title>
            <Text style={{marginLeft:10,marginTop:10}}>Discover on-demand learning,discussions</Text>
            <Text style={styles.textStyle}>and interactive sesssions in your </Text>
            <Text style={styles.textStyle}>community. </Text>
        </View>
        
        <View style={{flex:4}}>

            <View style={{flexDirection:'row'}}>

                <Button color={buttoncolor} onPress={AllSessions}>All Sessions</Button>

                <Button color={buttoncolor}>My Sessions</Button>

            </View>
            
            <View style={{flexDirection:'row',marginTop:15}}>

                <Button mode='contained' style={styles.buttonStyle} color='#D3D3D3' onPress={() => setCalendarvisible(true)}>Date</Button>
                    <BottomSheet modalProps={{}} isVisible={calendarvisible}>
                    <Calendar
                        current={'2021-03-01'}
                        minDate={'2010-01-01'}
                        maxDate={'2021-05-01'}
                        onDayPress={day => {
                            console.log('selected day', day);
                        }}
                        monthFormat={'yyyy MM'}
                        onMonthChange={month => {
                            console.log('month changed', month);
                        }}
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
                    <Checkbox.Item label="Filling Fast" status='unchecked' onPress={()=>setSeattype("Filling Fast")} />
                    <Checkbox.Item label="Available" status='unchecked'  onPress={()=>setSeattype("Available")}/>
                    <Checkbox.Item label="Booked" status='unchecked'  onPress={()=>setSeattype("Booked")} />
                    <Button onPress={Savebuttonpressed} mode="contained" style={{borderRadius:10,padding:3,marginLeft:10,marginRight:10}} color="#000000">Save</Button>
                    <Button></Button>
                    </View>
                    </BottomSheet>
                <Button mode='contained' style={styles.buttonStyle} color='#D3D3D3' onPress={Durationfilter}> Instructor</Button>

            </View>
            
            <ScrollView style={{marginTop:10}}>
            {

            classes.map((classes,idx) => (
                <>
                <Card.Title
                    title={classes.classname}
                    subtitle={classes.Duration + "  " + classes.Time + " " + classes.Seats}
                    titleStyle={{fontSize:18}}
                    titleNumberOfLines={3}
                    subtitleNumberOfLines={4}
                    style={{marginTop:15}}
                    left={(props) => <Avatar.Image {...props} size={40} source={{uri:classes.Instructorimage}} />}
                    right={(props) => <IconButton {...props}  onPress={() => {}} />}
                />
                <Button color='#000000'>{classes.Type}</Button>
                <Image source={{uri:classes.Instructorimage}} />
                </> 
            ))
            }
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
        borderRadius:10
    }
    
})