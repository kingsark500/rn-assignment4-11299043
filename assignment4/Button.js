import React from "react";
import { StyleSheet,TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({text, handleLogin}){

    return(
        <TouchableOpacity onPress={handleLogin}>
            
            <View style={styles.maxBtn}>
            <Text style={styles.btnText}>{ text } </Text>
            </View>

        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
        maxBtn:{
            height:56,
            backgroundColor:'#356899',
            left:24,
            borderRadius:10,
            paddingVertical:16,
            paddingHorizontal:48,
            textAlign:'center',
            gap:10,
            width:327,
            top:25

        },
        btnText:{
            fontWeight:'500',
            fontSize:16,
            lineHeight:24,
            textAlign:'center',
        }

});