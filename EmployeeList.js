import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  
} from 'react-native';
import {getData} from './Storage';
import Newprofile from './Newprofile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'react-native-paper';

export const nameList = async value => {
  try {
    // console.log('value', value);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('key', jsonValue);
    // alert(jsonValue);
  } catch (e) {
    // console.log(e);
  }
};

const EmployeeList = ({navigation}) => {
  const [employeeListDetails, setEmployeeDetails] = useState([]);
  useEffect(() => {
  
    display();
    
  }, []);
const Rerun=()=>{
    
    display();
    
  }

  const display = async () => {
    let details = await getData('userInfo');
    setEmployeeDetails(details);
    console.log(details);
    // alert(JSON.stringify(details));
  };

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('detailsofEmployee',{item : item,rerun : Rerun})}>
        <View style={Styles.Usernamelist}>
          <Text style={{color:"white", fontSize: 20}}>{item.name} </Text>
          {/* <Text>{item.des}</Text> */}
          
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style = {{backgroundColor: '#b4d8fa', flex :1, }}>
      <FlatList data={employeeListDetails} renderItem={renderItem} />
    </View>
  );
};
const Styles = StyleSheet.create({
  Usernamelist: {
    flexDirection: 'row',
    backgroundColor: '#42c8fc',
    padding: 20,
    marginTop: 16,
    borderRadius: 6,
    flex :1 
    // fontVariant: '100',
    // fontSize: 100,
  },
});

export default EmployeeList;
 

