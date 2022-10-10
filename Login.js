import React,{useState} from "react";
import { View, Text,
   TouchableOpacity, 
  StyleSheet, Image, ImageBackground
 } from "react-native";
 import { TextInput } from "react-native-paper";



const Login = ({navigation}) => {
  const usrne = () => {
    if (
      (username == 'Sudharsan' || username == 'Sithik') && ((pwd == '123456' || pwd == '54321')) 
    ){
      navigation.navigate('Landing',{inname : username })
    }
    else{
      alert('Enter valid Username and Password');
    }
  }
  const [username, Setusername] = useState('');
  const [pwd, Setpwd] = useState('');
  return(
    <View style = {styles.v}>
      <ImageBackground source={require("./assests/bg.jpg") } style = {styles.bgimg}>
      <Image style = {styles.img} source = {require("/home/divum/ProjectsReactNative/navigation/assests/user-circle.png")}/>
      <TextInput style = {styles.username} placeholder = 'Username' mode = 'outlined' placeholderTextColor={'white'} onChangeText = {Setusername} value = {username} />
      <TextInput style = {styles.pwd} placeholder = "password" mode = 'outlined' placeholderTextColor={'white'} onChangeText = {Setpwd} value = {pwd} secureTextEntry/>
      <TouchableOpacity 
      onPress={()=>usrne()}>
        <Text style = {styles.btn}>Log In </Text>

      </TouchableOpacity>
      </ImageBackground>
    </View>
    

 
  )
}

const styles = StyleSheet.create({
  img:{
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop : 80,

  },
  username: {
    backgroundColor: '#0281f7',
    color: 'white',
    alignSelf: 'center',
    borderRadius: 16,
    marginTop: 50,
    width: 225,
    textAlign: 'center',
  },
  pwd: {
    backgroundColor: '#0281f7',
    color: 'white',
    alignSelf: 'center',
    borderRadius: 16,
    width: 225,
    textAlign: 'center',
    marginTop: 8
  },
  btn : {
    backgroundColor: '#0295f7',
    alignSelf: 'center',
    marginTop: 32,
    borderRadius: 16,
    padding : 16,
    fontSize: 20,
    color: 'white'

  },
  v: {
    flex:1, 
  },
  bgimg:{
    flex: 1,
    resizeMode: 'cover'
  }

})

export default Login;