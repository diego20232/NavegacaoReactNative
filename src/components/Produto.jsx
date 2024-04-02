import React from "react";
import { Button, Text, View } from "react-native";


export default props => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Text>Produto</Text>
        <Button title=">" onPress={() => props.navigation.navigate('About')}/>
        </View>
    )
}