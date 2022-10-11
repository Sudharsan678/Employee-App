import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {TextInput, RadioButton} from 'react-native-paper';
import {getData, storeData} from './Storage';

const Newprofile = ({navigation}) => {
  const [Name, SetName] = useState('');
  const [mail, Setmail] = useState('');
  const [phone, Setphone] = useState('');
  const [DOB, SetDOB] = useState('');
  const [des, Setdes] = useState('');
  const [number,Setnumber] = useState('');
  const [DOJ, SetDOJ] = useState('');
  const [id, Setid] = useState('');
  const [gender, Setgender] = useState('');

  useEffect(() => {
    setLength();
  },[])
  const setLength = async () => {
    let data = await getData ('userinfo');
    Setid(data.length);
  }

  let person = {
    name: Name,
    mail: mail,
    phone: phone,
    DOB: DOB,
    des: des,
    id: id,
    DOJ: DOJ,
    number : number,
  };
  console.log(person);

  const Submit = async () => {
    let data = await getData('userInfo');
    Setid(id+1);
    // alert(JSON.stringify(data))
    data.push(person);
    // Setvalue(data);
    storeData('userInfo', data);
  };

  return (
    <ScrollView style={styles.scv}>
      <ImageBackground
        style={styles.imgbg}
        source={require('/home/divum/ProjectsReactNative/navigation/assests/45ce2986d79fc7cd05014bd522a88834.jpg')}>
        <Text style={styles.title}>Create New Profile</Text>
        <TextInput
          style={styles.n}
          label="Name"
          mode="outlined"
          value={Name}
          onChangeText={SetName}></TextInput>
        <View style={styles.mabtn}>
          <RadioButton.Group
            onValueChange={Gender => Setgender(Gender)}
            value={gender}>
            <Text style={styles.rbtn}>Male</Text>
            <RadioButton value="Male"></RadioButton>
            <Text style={styles.rbtn}>Female</Text>
            <RadioButton value="Female"></RadioButton>
          </RadioButton.Group>
        </View>
        <TextInput
          style={styles.n}
          label="Email"
          mode="outlined"
          value={mail}
          onChangeText={Setmail}></TextInput>
        <TextInput
          style={styles.n}
          label="Phone Number"
          mode="outlined"
          value={phone}
          onChangeText={Setphone}></TextInput>
        <TextInput
          style={styles.n}
          label="Date Of Birth"
          mode="outlined"
          value={DOB}
          onChangeText={SetDOB}></TextInput>
        <TextInput
          style={styles.n}
          label="Designation"
          mode="outlined"
          value={des}
          onChangeText={Setdes}></TextInput>
        <TextInput
          style={styles.n}
          label="EmployeeNumber"
          mode="outlined"
          value={number}
          onChangeText={Setnumber}></TextInput>
        <TextInput
          style={styles.n}
          label="Date of Joining"
          mode="outlined"
          value={DOJ}
          onChangeText={SetDOJ}></TextInput>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("Landing")
            Submit()
            
          }} >
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    backgroundColor: '#61d0f2',
    alignItems: 'center',
    borderRadius: 32,
    fontSize: 23,
    padding: 32,
    marginTop: 16,
    color: 'white',
    textDecorationColor: 'white',
  },
  n: {
    flex: 1,
    backgroundColor: '#03abff',
    borderRadius: 12,
    margin: 13,
    color: 'white',
  },
  submit: {
    backgroundColor: '#1f7adb',
    color: 'white',
    alignSelf: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  rbtn: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'black',
  },
  mabtn: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  scv: {
    flex: 1,
  },
  imgbg: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Newprofile;
