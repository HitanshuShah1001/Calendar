//This component contains the data to show in the header of the app.
import  {Appbar} from 'react-native-paper';
import React from 'react';
import { useState,useEffect} from 'react';
import {View,SafeAreaView,Pressable} from 'react-native';
import './Server';
import Searchicon from '../Svgicons/Searchicon';
import Reorderhorizontal from '../Svgicons/Mask';
import Usericon from '../Svgicons/Usericon';

const  Header = ({countvalue}) => {

    const [count,setCount] = useState(0);
    /*
    The countvalue function defined in the Homepage component
    will be accepted as a prop here and 
    Whenever the value of count changes,useEffect hook will pass the
    count value as a parameter to the parent 
    function of countvalue.
    */
    useEffect(()=> {
        countvalue(count)
    },[count])

    return (
        
        /*
            Reorder horizontal,SearchIcon and UserIcon are 
            SVGs.On Press of search Icon count is set to 1
            which toggles the showing of search bar.
        */

        <SafeAreaView>
            <Appbar.Header style={{backgroundColor: '#FFFFFF'}}> 
            <View style={{marginLeft:10}}>
            <Reorderhorizontal />
            </View>
            <Appbar.Content title="" subtitle="" />
            <Pressable onPress={() => setCount(1)} style={{marginRight:15}}>
                <Searchicon  />
            </Pressable>
            <View style={{marginRight:10}}>
                <Usericon />
                </View>
            </Appbar.Header>
        </SafeAreaView>
    );
}
export default Header;