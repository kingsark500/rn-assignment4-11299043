import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Homepage from "./HomePage";
import LoginPage from "./LoginPage";

const Tab = createBottomTabNavigator()

export default function HomeTabs() {

    

    return(
        <Tab.Navigator>

        <Tab.Screen name = "Login" component = {LoginPage}                 
        option={{headerShown:false}}/>

        <Tab.Screen name = "Home" component = {Homepage}                 
        option={{headerShown:false}}/>

        </Tab.Navigator>
        
        
      
    );

}