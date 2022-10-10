import React from "react";
import { View,Text, 
    StyleSheet, TouchableOpacity,
     ImageBackground} from "react-native";
import {usrne} from './Login';
const Landing=({route,navigation})=>{
    const value = route.params.inname;
    return(
        <View style = {styles.v}>
            <ImageBackground  style = {styles.bg} source ={require('/home/divum/ProjectsReactNative/navigation/assests/bg_82.gif')}>
            <Text style = {styles.welcome}>Welcome {value}</Text>

            <TouchableOpacity onPress={()=>navigation.navigate("newprofile")} >
                <Text style = {styles.create}> 
                    Create New Profile
                </Text>

            </TouchableOpacity>
            
            <TouchableOpacity onPress = {() => navigation.navigate("employeelist")}>
                <Text style = {styles.create}>
                    Employee List
                </Text>
            </TouchableOpacity>
            </ImageBackground>

            
        </View>
    );
}

const styles = StyleSheet.create({
    welcome:{
        alignSelf: 'center',
        fontSize: 36,
        color: 'white',
        paddingTop: 53,
        paddingBottom: 32,
    },

    create: {
        alignSelf: 'center',
        backgroundColor: '#ebd196',
        padding: 29,
        borderRadius: 32,
        marginTop: 16,
        fontSize: 25,
        alignItems: 'center',
        color : 'black'

    },
    bg:{
        flex: 1
    },
    v: {
        flex: 1
    }
})
export default Landing;