import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import HomeTabs from './HomeTabs';
import LoginPage from './LoginPage';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">

      <Stack.Screen name = "Login" component = {LoginPage}   
      option= {{headerShown:false}}/>

      
      <Stack.Screen name = "Home" component = {HomeTabs}   
      option= {{headerShown:false}}/>



      </Stack.Navigator>


    </NavigationContainer>
    
  );
}


