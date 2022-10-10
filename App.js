import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splashscreen from './SplashScreen';
import Login from './Login';
import Landing from './Landing';
import Newprofile from './Newprofile';
import Submit from "./Submit";
import EmployeeList from './EmployeeList'; 
import Details from './Details';
import edit from './Update';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "SplashScreen" component = {Splashscreen} options = {{ headerShown: false}}/>
        <Stack.Screen name = "login" component={Login} options = {{headerTransparent: true}}/>
        <Stack.Screen name = "Landing" component={Landing } options = {{ headerShown: false}}/>
        <Stack.Screen name = "newprofile" component = {Newprofile} options = {{ headerShown: false}}/>
        <Stack.Screen name = "submit" component = {Submit} />
        <Stack.Screen name = "employeelist" component={EmployeeList} />
        <Stack.Screen name = "detailsofEmployee" component = {Details} />
        <Stack.Screen name = "update" component = {edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;