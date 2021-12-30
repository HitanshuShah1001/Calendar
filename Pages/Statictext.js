/*This component is created and used for
displaying the static text of that is shown above the All Sessions
and my sessions buttons.
Along with this,everything is explained in detail in Readme.md file
So I request  to kindly go through it.
*/

import {Text,StyleSheet,View} from 'react-native';
import  {Title} from 'react-native-paper';
import React from 'react';

const Statictext = () => {

    return (
        <View style={styles.textviewstyle}> 
            <Title style={styles.titlestyle}>Sessions</Title>
            <Text style={styles.textStyle}>Discover on-demand learning,discussions</Text>
            <Text style={styles.textStyle}>and interactive sesssions in your </Text>
            <Text style={styles.textStyle}>community. </Text>
        </View>
    );

}

const styles = StyleSheet.create({

    textStyle:{
        marginLeft:10,
        marginTop:10,
        fontWeight:'400',
        fontSize:16,
        
    },

    textviewstyle : {
        flex:1,
        flexDirection:'column',
        marginTop:10
    },

    titlestyle : {
        marginTop:10,
        fontSize:26,
        marginLeft:10,
        fontWeight:"600",

    },  

})

export default Statictext;