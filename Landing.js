import React from "react";
// import  {useState,useEffect} from "react";
import { View,Text, 
    StyleSheet, TouchableOpacity,
     ImageBackground} from "react-native";
import {Login} from './Login';
import { logDataget, logDataset } from "./Storage";
import { useEffect, useState } from "react";
const Landing=({navigation})=>{
    const [userName, Setusername] = useState('');
    useEffect(() => {
        GetName();
    })
    // const [password, Setpassword] = useState('');
    const GetName=async()=>{
        let uname = await logDataget('logdata');
        Setusername(uname.username)
      }
    
    return(
        <View style = {styles.v}>
            <ImageBackground  style = {styles.bg} source ={require('/home/divum/ProjectsReactNative/navigation/assests/bg_82.gif')}>
            <Text style = {styles.welcome}>Welcome {userName}</Text>

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