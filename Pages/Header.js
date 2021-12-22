import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { Appbar } from 'react-native-paper';
export default function Header(){
    return (
        <SafeAreaView>
        <Appbar.Header style={styles.container}>
        <Appbar.Action  icon="dots-vertical" style={{backgroundColor:'#FFFFFF'}}/>
        <Appbar.Content
          title=""
          subtitle=""
        />
        <Appbar.Action  icon="magnify"/>
        <Appbar.Action icon="account"/>
      </Appbar.Header>
      </SafeAreaView>
    );
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF'
    },
})