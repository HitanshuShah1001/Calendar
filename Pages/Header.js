import  {Title,Avatar,Appbar,Button,Switch, Subheading} from 'react-native-paper';
import React from 'react';
import { useState,useEffect} from 'react';
import {Text, View,SafeAreaView,StyleSheet,Image,TouchableHighlight, Touchable,Pressable} from 'react-native';
import './Server';
import Searchicon from '../Svgicons/Searchicon';
import Mask1 from '../Svgicons/Mask';

const  Header = ({countvalue}) => {

    const [count,setCount] = useState(0);

    useEffect(()=> {
        countvalue(count)
    },[count])

    return (
        <SafeAreaView>
            <Appbar.Header style={{backgroundColor: '#FFFFFF'}}> 
            <View style={{marginLeft:10}}>
            <Mask1 />
            </View>
            <Appbar.Content title="" subtitle="" />
            <Pressable onPress={() => setCount(1)} style={{marginRight:15}}>
                <Searchicon  />
            </Pressable>
                <Avatar.Image  size={34} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblGHmIA70kc9T4UJy-AFc0YLcnPpu5kwR2Q&usqp=CAU'}}/>
            </Appbar.Header>
        </SafeAreaView>
    );
}
export default Header;