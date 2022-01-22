import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import tw from 'twrnc';
import HomeComponent from "../components/HomeComponent";

const HomeScreen = () => {
    return(
        <SafeAreaView style={[tw`h-full`, {backgroundColor: '#42566A'}]}>
            <View style={tw`p-4 border-b`}>
                <Text style={tw`text-4xl font-extrabold tracking-widest`}>
                    Teaster's
                </Text>
                <Text style={tw`text-3xl font-semibold tracking-tight`}>
                    Party App
                </Text>
            </View>
            <HomeComponent/>
        </SafeAreaView>
    );
}

export default HomeScreen;