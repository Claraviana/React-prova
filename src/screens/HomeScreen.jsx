import React from 'react';
import { Text, View } from 'react-native'

export const HomeScreen=({navigation})=>{
    return (
    <View>
    <Text>Add friends here!</Text>
     <Button title="Formulário" onPress={()=> navigation.navigate("Formulário")}/>
      </View>
      );
    };