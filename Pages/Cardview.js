/* 
In this component a layout is created for displaying the data of events,
map function is used which  takes all objects in a list
and runs through a function to create a new list with all objects
Along with this,everything is explained in detail in Readme.md file
So I request  to kindly go through it.
*/
import {useState,useEffect} from 'react';
import {Text, View,ScrollView,StyleSheet,Image} from 'react-native';
import {Divider} from 'react-native-elements';
import  {Avatar,Button,Card,Subheading} from 'react-native-paper';
import React from 'react';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import Skeletonloader from './Skeletonloader';


const Cardview = (props) => {

    /*
    Noofevents is the total number of objects returned from the API.
    */

    var noofevents = Object.keys(props.eventslist).length;

    /*
    This count is used to trigger the showing of data 
    after the skeleton loader is loaded.
    Here we are using the skeleton loader for a default of 3.5 seconds 
    because sicne we are fetching data from the mock API,data is already 
    loaded.There won't be any lag in presenting data.So,we are 
    using setTimeout to simulate loading of data.
    */

    const [count,setCount] = useState(0);
    

    const changecount = () => {
        setCount(1)
    }

    if(count===0){

        /*
        This setTimout will invoke a changecount function which will
        set the count to 1 that will show the data that is fetched 
        from the API.
        */

        setTimeout(changecount,3500);
        return (
            <Skeletonloader />
        );
    }

    else{
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
            <>
            

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
                                    source={{uri:events.Instructorimage}}
                                />
                                <View style={styles.eventinfo}>
                                    <Card.Title
                                        title={events.classname +  '\n' + events.Iname}
                                        subtitle={events.Time + " ◉ " + events.Date.split("-").reverse().join("-")
                                                    + '\n' + "👥 " + events.Attending + " " + events.Seats}
                                        titleStyle={styles.Titlestyle}
                                        subtitleStyle={styles.Subtitlestyle}
                                        titleNumberOfLines={3}
                                        subtitleNumberOfLines={4}  
                                    />
                                    <Button color='#D3D3D3' mode='contained' compact={true} width='30%' labelStyle={{fontSize:8,color:'#FFFFFF'}}
                                    style={styles.buttonStyle}>{events.Type}</Button>

                                </View>
                                
                            </View>
                            <Divider orientation="horizontal" width={1} color='#D3D3D3' style={styles.dividerstyle}/>
                    </View>
                    );
                }
            )}
            </ScrollView>
            </>
        );
    }
    else 
    {
        return (
            <>
                <Subheading style={{textAlign:'center',marginTop:30}}>No events found</Subheading>
            </>
        );
    }
}
}
const styles = StyleSheet.create({

    image: {
      width: 80,
      height: 80,
      borderRadius:20,
      marginLeft:5,
      marginTop:6,
    },
    cellstyle :{
        flexDirection:'row',
        marginTop:15,
    },
    Titlestyle:{
        fontSize:16,
        marginBottom:5,
        fontWeight:"600",
        fontSize:16,
        color:'#222222'
    },
    Subtitlestyle:{
        fontWeight:"400",
        color:'#666666'
    },
    buttonStyle:{
        borderRadius:22,
        marginTop:8,
        marginLeft:10,
        backgroundColor:'#444444',
        
    },
    dividerstyle:{
        marginLeft:13,
        marginRight:13,
        marginTop:10
    },
    eventinfo:{
        flexDirection:'column',
        flex:1
    },

  });
export default Cardview;
