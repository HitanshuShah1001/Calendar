/* 
In this component a layout is created for displaying the data of events,
map function is used which  takes all objects in a list
and runs through a function to create a new list with all objects
*/


import {Text, View,ScrollView,StyleSheet,Image} from 'react-native';
import {Divider} from 'react-native-elements';
import  {Avatar,Button,Card} from 'react-native-paper';
import React from 'react';

const Cardview = (props) => {
    var noofevents = Object.keys(props.eventslist).length;
    if(noofevents!==0){
        return (

            /*
                Scroll-View tag is used to enable scrolling as the 
                number of items exceed the dimensions of the screen.
                Cardview takes in the event object as a parameter
                Incase the data that is passed is an empty list
                for ex. a name that was searched for and has no data
                for it,then the else condition takes place and returns
                no data found.
            */

            <ScrollView style={{marginTop:10}}>
            {
        
            props.eventslist.map((events,idx) => {
                    return(

                        /*
                            The view hierarchy in the cell:-
                            Create a view that has flex direction of row
                            so that image-text are side by side.
                            In that beside image,we want to display text in a
                            linear form,so create a new view inside it that has a flex direction
                            of column
                            <View flex-direction = row>
                                <View flex-direction = column>
                                </View>
                            </View>
                        */

                    <View key={idx}>
                            
                            <View style={styles.cellstyle}>
                                <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: events.Instructorimage }}
                                />

                                <View style={styles.eventinfo}>

                                    <Card.Title

                                        title={events.classname +  '\n' + events.Iname}
                                        subtitle={events.Time + " ◉ " + events.Date.split("-").reverse().join("-")
                                                    + '\n' + "👥 " + events.Attending + " " + events.Seats}
                                        titleStyle={styles.Titlestyle}
                                        titleNumberOfLines={3}
                                        subtitleNumberOfLines={4}  

                                    />

                                    <Button color='#D3D3D3' mode='contained' compact={true} width='30%' labelStyle={{fontSize:10}}
                                    style={styles.buttonStyle}>{events.Type}</Button>

                                </View>
                                
                            </View>
                            <Divider orientation="horizontal" width={1} color='#D3D3D3' style={styles.dividerstyle}/>
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
    cellstyle :{
        flexDirection:'row',
        marginTop:15,
    },
    Titlestyle:{
        ontSize:18,
        marginBottom:5
    },
    buttonStyle:{
        borderRadius:15,
        marginTop:8,
        marginLeft:10
    },
    dividerstyle:{
        marginLeft:13,
        marginRight:13,
        marginTop:10
    },
    eventinfo:{
        flexDirection:'column',
        flex:1
    }

  });
export default Cardview;