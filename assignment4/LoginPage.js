import React,{useState} from 'react';

import { StyleSheet, Text, View, TextInput,Button,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import FlatButton from './Button';

export default function LoginPage(props) {

    const [name , setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        Navigation.navigate('Home');
    };

    return(

        <View style={styles.container}>
            
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

            <FlatButton text='Log in' onPress ={props.handleLogin}  />

            <Text style={{fontSize:13,textAlign:'center',fontWeight:'400',color:'#AFB0B6',
                lineHeight:16.44, height:16,top:80,
            }}>
                Or continue with
            </Text>

            <Image style={{width:216,height:56,top:150,left:79}}
             source={require ("./Group 57.png")}/>


             <Text style={{fontSize:14,fontWeight:'400',lineHeight:17.71,
                alignItems:'center',height:18,left:102, top:210
             }}>
                <Text>
                Haven't an account? 
                </Text>
                <Text style={{color:'#356899'}}>
                    Register
                </Text>
             
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
                left:24,
                backgroundColor:'#ffff',
               
            },

          


           

        });

