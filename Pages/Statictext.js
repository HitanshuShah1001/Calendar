/*This component is created and used for
displaying the static text of that is shown above the All Sessions
and my sessions buttons.
*/

import {Text,StyleSheet,View} from 'react-native';
import  {Title} from 'react-native-paper';
import React from 'react';

const Statictext = () => {

    return (
        <View style={styles.textviewstyle}> 
            <Title style={styles.titlestyle}>Sessions</Title>
            <Text style={styles.titlestyle}>Discover on-demand learning,discussions</Text>
            <Text style={styles.textStyle}>and interactive sesssions in your </Text>
            <Text style={styles.textStyle}>community. </Text>
        </View>
    );

}

const styles = StyleSheet.create({

    textStyle:{
        marginLeft:10,
        marginTop:5
    },

    textviewstyle : {
        flex:1,
        flexDirection:'column',
        marginTop:10
    },

    titlestyle : {
        marginTop:10,
        marginLeft:10
    },  

})

export default Statictext;