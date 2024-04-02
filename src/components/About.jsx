import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


export default props => {
     return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>

            <Text>About</Text>
            <Button title=">" onPress={() => props.navigation.navigate('Details')}/>
            

        </View>
     )
}

