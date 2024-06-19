import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginPage from './LoginPage';
import Homepage from './HomePage';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login">

      <Stack.Screen name = "Login" component = {LoginPage}   
      option= {{headerShown:false}}/>

      
      <Stack.Screen name = "Home" component = {Homepage}   
      option= {{headerShown:false}}/>



      </Stack.Navigator>


    </NavigationContainer>
    
  );
}


