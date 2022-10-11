import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { removeData } from "./Storage";
// import EmployeeList from "./EmployeeList";



const Details = ({route,navigation}) => {
    const value = route.params.item;
    console.log(route);

    // const deleteDetail = async() => {
    //   const result = await AsyncStorage.getItem('item')
    // }

    // const displayDeleteAlert = () => {
    //     Alert.alert('Are You  Sure', [{text : 'delete',
    //   onPress: () => deleteDetail},
    // {
    //   text : 'delete',
    //   onPress: () => console.log('NO ')
    // }],
    // {
    //   cancelable : true,
    // })
    // }
    
    return (
    < ScrollView  style = {{backgroundColor : '#6fbdfc'}}>
    <TextInput
          style={styles.n}
          label="Name"
          // mode="outlined"
          value={value.name}
          disabled = 'true'
          />
          <TextInput
          style={styles.n}
          label="Email"
          // mode="outlined"
          value={value.mail}
          disabled = 'true'
          />
        <TextInput
          style={styles.n}
          label="Phone Number"
          // mode="outlined"
          value={value.phone}
          disabled = 'true'
         />
        <TextInput
          style={styles.n}
          label="Date Of Birth"
          // mode="outlined"
          value={value.DOB}
          disabled = 'true'
          />
        <TextInput
          style={styles.n}
          label="Designation"
          // mode="outlined"
          value={value.des}
          disabled = 'true'
          />
          <TextInput
          style={styles.n}
          label="Date of Joining"
          // mode="outlined"
          value={value.DOJ}
          disabled = 'true'
          />
          <TextInput
          style={styles.n}
          label="EmployeeNumber"
          // mode="outlined"
          value={value.number}
          disabled = 'true'
          />
          <View style = {styles.btn}>
          <Button title = 'Back' color = {'skyblue'}  onPress = {() => removeData()}/>
          <Button title = 'Update' color = {'skyblue'} onPress = {() => navigation.navigate('update',{value : value, run : route.params.rerun})}/>
          </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create ({
    btn : {
        // backgroundColor : 'skyblue',
        flex : 1,
        color: "white",
        // marginTop: 32,
        // margin : 19,
        // alignSelf:'flex-start',
        flexDirection: 'row',
        fontSize: 32 ,
        // marginRight: 320 ,
        padding: 32,
        justifyContent: 'space-evenly',


    },
    n: {
        flex: 1,
        backgroundColor: '#baf1f7',
        borderRadius: 12,
        margin: 13,
        color: 'black',
    }

})
export default Details;

