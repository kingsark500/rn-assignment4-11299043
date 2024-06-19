import React,{useState} from 'react';

import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function LoginPage({navigation}) {

    const [name , setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home',{name,email});
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

             <TextInput style={styles.maxinput} placeholder='Email' value={email}     
            onChangeText={setEmail} placeholderTextColor='#AFB0B6' />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

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
            button: {
                height:56,
                backgroundColor: '#1877F2',
                left:24,
                borderRadius:10,
                paddingVertical:16,
                paddingHorizontal:48,
                
                gap:10,
                width:327,
                top:25
              },

            buttonText: {
                color: '#FFF',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign:'center',
              },

          


           

        });

