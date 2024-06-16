import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Card from './Card';


export default function Homepage() {

    return(

        <View>

        
            <Text style={{fontWeight:'700',fontSize:24,color:'#0D0D26', height:36,left:24}}>
            Eric Atsu
            </Text>

            <Text style={{fontWeight:'400', fontSize:20, lineHeight:24,left:24,color:'#95969D'}}>
                eric@gmail.com
            </Text>
        

        <TextInput style={styles.Ericinput}  placeholder='Search job or position'/>

        <Text style={{fontWeight:'600',fontSize:16,color:'#0D0D26',lineHeight:20.8,
            height:21,top:251,left:24
        }}>
            Featured Jobs
        </Text>





        <Text style={{fontWeight:600,fontSize:16,lineHeight:20.8,height:21,
            left:26,width:105
        }}>
            Popular Jobs
        </Text>





        </View>

    );


}

    const styles = StyleSheet.create({
            Ericinput:{
                height:48,
                width:263,
                top:163,
                left:24,
                borderRadius:12,
            }


    });



    