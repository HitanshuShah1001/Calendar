import { StyleSheet, Text, View,ScrollView} from 'react-native';
import  {Title,Button,FAB,Avatar,Card,IconButton} from 'react-native-paper';
import Header from './Header';
import { useState,useEffect } from 'react';
import './Server';
export default function Homepage(){ 
    console.log(classes);
    const [buttoncolor,setButtoncolor]=useState('#D3D3D3');
    const [count,setCount]=useState(0);
    const [classes,setClasses]=useState([]);
    console.log(classes);
    useEffect(()=> {
        fetch('/api/classes')
        .then(res => res.json())
        .then(json => setClasses(json.classes))
        .catch(err => console.log(err))
        console.log(classes);
    },)
    return (
        <>
        <Header/>
        <View style={{flex:1,flexDirection:'column'}}>
            <Title style={{marginTop:20,marginLeft:10}}>Sessions</Title>
            <Text style={{marginLeft:10,marginTop:10}}>Discover on-demand learning,discussions </Text>
            <Text style={{marginLeft:10,marginTop:5}}>and interactive sesssions in your </Text>
            <Text style={{marginLeft:10,marginTop:5}}>community. </Text>
        </View>
        <View style={{flex:4}}>
            <View style={{flexDirection:'row'}}>
                <Button color={buttoncolor} onPress={() => setButtoncolor('#000000')}>All Sessions</Button>
                <Button color={buttoncolor} onPress={() => setButtoncolor('#000000')}>My Sessions</Button>
            </View>
            <View style={{flexDirection:'row',marginTop:15}}>
                <Button mode='contained' style={{marginLeft:5,borderRadius:10}} color='#D3D3D3'>Date</Button>
                <Button mode='contained' style={{marginLeft:10,borderRadius:10}} color='#D3D3D3'>Seats</Button>
                <Button mode='contained' style={{marginLeft:10,borderRadius:10}} color='#D3D3D3'> Instructor</Button>
            </View>
            <ScrollView style={{marginTop:25}}>
            {
            classes.map((classes,idx) => (
                <>
                <Card.Title
                    title={classes.classname}
                    subtitle={classes.Duration + "  " + classes.Time + " " + classes.Seats}
                    titleStyle={{fontSize:18}}
                    titleNumberOfLines={3}
                    subtitleNumberOfLines={4}
                    style={{marginTop:10}}
                    left={(props) => <Avatar.Icon {...props} icon={{uri: 's'}} />}
                    right={(props) => <IconButton {...props}  onPress={() => {}} />}
                />
                <Button style={{marginLeft:30}}>{classes.Type}</Button>
                </> 
            ))
            }       
            </ScrollView>
        </View>

        </>
    );
}