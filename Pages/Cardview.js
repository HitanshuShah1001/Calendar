import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Text, View,ScrollView,SafeAreaView,StyleSheet,Image} from 'react-native';
import {BottomSheet,ListItem,Divider} from 'react-native-elements';
import  {Title,Avatar,Card,Checkbox,Appbar,Searchbar,Button,Caption} from 'react-native-paper';
import React from 'react';
import { useState,useEffect } from 'react';

const Cardview = (props) => {
    return (
        <ScrollView style={{marginTop:10}}>
        {
        props.classeslist.map((classes,idx) => {
                return(
                <View key={idx}>
                    <Card.Title
                        title={classes.classname +  '\n' + classes.Iname}
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
                    <Button color='#D3D3D3' mode='contained' width='40%' style={{alignSelf:'center',borderRadius:15,marginBottom:8}}>{classes.Type}</Button>
                    <Divider orientation="horizontal" width={1} color='#D3D3D3' style={{marginLeft:10,marginRight:10}}/>
                </View>
                );
            }
        )}
        </ScrollView>
    );
}
export default Cardview;