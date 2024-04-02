import React from "react";
import { View, Text, Button } from "react-native";



export default props => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000'
        }}>
            <Text>Details Screen</Text>
            <Button title="Inicio" onPress={() => props.navigation.navigate('Home')}/>
        </View>
    )
}


