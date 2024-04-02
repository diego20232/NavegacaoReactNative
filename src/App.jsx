import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import Produto from "./components/Produto";
import About from "./components/About";


const Stack = createNativeStackNavigator();


export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
           <NavigationContainer>
             <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Inicio'}}/>
                <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'Detalhes'}}/>
                <Stack.Screen name="Produto" component={Produto} options={{title: 'Produto'}}/>
                <Stack.Screen name="About" component={About} options={{title: 'About'}}/>
             </Stack.Navigator>
           </NavigationContainer>
        </SafeAreaView>
    )
}
