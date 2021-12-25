import {Text, View,ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import  {Avatar,Card,Button} from 'react-native-paper';
import React from 'react';

const Cardview = (props) => {
    var noofevents = Object.keys(props.eventslist).length;
    if(noofevents!==0){
        return (
            <ScrollView style={{marginTop:10}}>
            {
        
            props.eventslist.map((events,idx) => {
                    return(
                    <View key={idx} >
                        <Card.Title
                            title={events.classname +  '\n' + events.Iname}
                            subtitle={events.Time + " ◉ " + events.Date.split("-").reverse().join("-")
                                        + '\n' + "👥 " + events.Attending + " " + events.Seats}
                            titleStyle={{fontSize:18}}
                            titleNumberOfLines={3}
                            subtitleNumberOfLines={4}
                            style={{marginTop:18}}
                            left={(props) => <Avatar.Image {...props} size={50} source={{uri:events.Instructorimage}} />}
                            
                        />
                        <Button color='#D3D3D3' mode='contained' compact={true} width='30%' style={{borderRadius:15,marginBottom:8,marginTop:8,marginLeft:10,alignSelf:'center'}}>{events.Type}</Button>
                        <Divider orientation="horizontal" width={1} color='#D3D3D3' style={{marginLeft:10,marginRight:10}}/>
                    </View>
                    );
                }
            )}
            </ScrollView>
        );
    }
    else 
    {
        return (
            <>
                <Text style={{textAlign:'center',marginTop:30}}>No events found</Text>
            </>
        );
    }

}
export default Cardview;