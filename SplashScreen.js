import React , { useState } from 'react';  
 import { StyleSheet, View, Image } from 'react-native';  
 const Splashscreen = ({navigation}) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }),2500;

  if (!timePassed) {
    return (
      <View style={Styles.main}>
      <View style={Styles.splash}>
        <View style={Styles.logo}>
        <Image 
        style={Styles.img}
        source={require('/home/divum/ProjectsReactNative/navigation/assests/spalshimg.jpg')}></Image>
      </View>
      </View>
      </View>
    );
  }
  navigation.navigate('login');
  return null;
};

const Styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  splash: {
    
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    backgroundColor:'white',
    padding:200
    
  },
  img:{
    width: 150,
    height: 200,
    justifyContent:'center'

  },
  
  logo: {
    alignItems: 'center',
    marginTop:50
  },
});

export default Splashscreen;