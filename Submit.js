import React, {useState} from "react";
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
const Submit = ({navigation}) => {
    const [timePassed, setTimePassed] = useState(false);

    setTimeout (function(){
        setTimePassed(true);
    }, 2500);

    if (!timePassed){
        return(
        <View style ={styles.v} >
            <ImageBackground style = {styles.bg} source={require('./assests/HD-wallpaper-huawei-background-blue-celeste-colors-gradient-simple-slender-thumbnail.jpg')}>
            <Image style = {styles.img} source={require("./assests/success.gif")}></Image>
            <Text style = {styles.text}>
                You Profile Has been created Successfully...
            </Text>
            </ImageBackground>
        </View>

    );
    }

    navigation.navigate('Landing');
    return null;
};

const styles = StyleSheet.create({
    img: {
        alignSelf: 'center',

    },
    text: {
        color: '#fa920a',
        alignSelf: 'center',
        padding: 16,
        fontSize: 25
    },
    v:{
        flex : 1
    },
    bg: {
        flex: 1
    }
 

})
export default Submit;