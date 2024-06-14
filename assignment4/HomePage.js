import { StyleSheet, Text, View, TextInput } from 'react-native';



export default function Homepage() {

    return(

        <View>

        
            <Text style={{fontWeight:'700',fontSize:24,color:'#0D0D26'}}>
            Eric Atsu
            </Text>

            <Text style={{fontWeight:'400', fontSize:20, height:24}}>
                eric@gmail.com
            </Text>
        

        <TextInput  placeholder='Search job or position'/>

        <Text style={{fontWeight:'600',fontSize:16,color:'#0D0D26',lineHeight:20.8}}>
            Featured Jobs
        </Text>



        </View>

    );


}