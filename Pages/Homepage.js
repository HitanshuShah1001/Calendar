
import {Text, View,ScrollView,Dimensions,StyleSheet,Image} from 'react-native';
import  {Title,Button,FAB,Avatar,Card,IconButton,Modal,Portal,Provider} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Header from './Header';
import { useState,useEffect } from 'react';
import './Server';
export default function Homepage(){ 

    const [buttoncolor,setButtoncolor]=useState('#000000'); // used for changing the button colour

    const [classes,setClasses]=useState([]); //used for unwrapping and storing json data from API

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);//whether or not calendar is shown

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
    
    /*
    const seatavailabilitychecker = () => 
    {
      if(visible){
        return (
            <>
            <Provider>
                <Portal>
                <Modal
                        visible={true}
                        onDismiss={hideModal}
                        style={{ justifyContent: 'flex-end', margin: 0 }}>
                        <View style={{ backgroundColor: '#000000', height: Dimensions.get('screen').height / 1 }}>
                        <Text>bottom half</Text>
                        </View>
                </Modal>
                </Portal>
            </Provider>
            </>
        );
      }
    }
    */
   //useEffect fetches data from API and stores it into classes which was initially initalised as an empty list

    useEffect(()=> {
        fetch('/api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes))
        .catch(err => console.log(err))
        console.log(classes);
    },[])

    const Seatavailabilitychecker = () => {
        fetch('/api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes.filter(obj=>obj.Type=='Registered')))
        .catch(err => console.log(err))
    }
    const Durationfilter = () => {
        fetch('/api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes.filter(obj=>obj.Duration=='30 min')))
        .catch(err => console.log(err))
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
                <Button color={buttoncolor}>All Sessions</Button>
                <Button color={buttoncolor}>My Sessions</Button>
            </View>
            
            <View style={{flexDirection:'row',marginTop:15}}>

                <Button mode='contained' style={styles.buttonStyle} color='#D3D3D3' onPress={showDatePicker}>Date</Button>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <Button mode='contained' style={styles.buttonStyle} color='#D3D3D3' onPress={Seatavailabilitychecker}>Seats</Button>

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