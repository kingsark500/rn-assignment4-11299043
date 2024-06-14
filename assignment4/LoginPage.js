import React,{useState} from 'react';

import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

export default function LoginPage() {

    const [name , setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        Navigation.navigate('Home');
    };

    return(

        <View>
            
            <View>
            <Text style={{color:'#356899', fontWeight:'600', textAlign:'left',fontSize:22,
                height:50, marginLeft:16}}>
                Jobizz
            </Text>
            </View>
           
            <View>
            <Text style={{fontWeight:'bold', fontSize:24, marginLeft:16}}>
                    Welcome Back   
            </Text>

            <Text style={{fontSize:14,marginLeft:16}}>
                Let's Login. Apply to jobs!
            </Text>
            </View>
           

            <TextInput style={styles.maxinput} placeholder='Name' value={name}     
            onChangeText={setName} placeholderTextColor='#AFB0B6' />

             <TextInput style={styles.maxinput} placeholder='Password' value={password}     
            onChangeText={setPassword} placeholderTextColor='#AFB0B6' />

            <Button title='Login' onPress={handleLogin}/>

            <Text>
                Or continue with
            </Text>



        </View>

        
    );

}

        const styles = StyleSheet.create({

            maxinput:{
                width: 327,
                height: 52,
                marginTop:35,
                marginBottom:10,
                borderRadius: 10,
                marginLeft:24,
                backgroundColor:'#ffff'
            },

           

        });

