import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import tw from 'twrnc';
import HomeComponent from "../components/HomeComponent";
import TitleComponent from "../components/TitleComponent";

const HomeScreen = () => {
    return(
        <SafeAreaView style={[tw`h-full`, {backgroundColor: '#42566A'}]}>
            <TitleComponent/>
            <HomeComponent/>
        </SafeAreaView>
    );
}

export default HomeScreen;