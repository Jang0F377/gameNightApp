import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView, Platform, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import {Provider} from "react-redux";
import {store} from "./store";
import GameStartScreen from "./screens/GameStartScreen";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{flex:1}}
                    >
                        <Stack.Navigator>
                            <Stack.Screen name='Home Screen' options={{headerShown:false}} component={HomeScreen}/>
                            <Stack.Screen name='Game Screen' options={{headerShown:false}} component={GameStartScreen}/>
                        </Stack.Navigator>
                    </KeyboardAvoidingView>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );

}


