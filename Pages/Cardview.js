import {Text, View,ScrollView,StyleSheet,Image} from 'react-native';
import {Divider} from 'react-native-elements';
import  {Avatar,Button,Card} from 'react-native-paper';
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
                            <View style={styles.user}>
                                <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: events.Instructorimage }}
                                />
                                <View style={{flexDirection:'column',flex:1}}>
                                    <Card.Title
                                        title={events.classname +  '\n' + events.Iname}
                                        subtitle={events.Time + " ◉ " + events.Date.split("-").reverse().join("-")
                                                    + '\n' + "👥 " + events.Attending + " " + events.Seats}
                                        titleStyle={{fontSize:18,marginBottom:5}}
                                        
                                        titleNumberOfLines={3}
                                        subtitleNumberOfLines={4}   
                                    />
                                    <Button color='#D3D3D3' mode='contained' compact={true} width='30%' labelStyle={{fontSize:10}}
                                    style={{borderRadius:15,marginTop:8,marginLeft:10}}>{events.Type}</Button>
                                </View>
                                
                            </View>
                            <Divider orientation="horizontal" width={1} color='#D3D3D3' style={{marginLeft:13,marginRight:13,marginTop:10}}/>
                            
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
const styles = StyleSheet.create({
    image: {
      width: 65,
      height: 65,
      borderRadius:20,
      marginLeft:5,
      marginTop:6,
    },
    user:{
        flexDirection:'row',
        marginTop:15,
    }
  });
export default Cardview;