import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import tw from 'twrnc';
import HomeComponent from "../components/HomeComponent";
import TitleComponent from "../components/TitleComponent";

const HomeScreen = () => {

    return(
        <SafeAreaView style={[tw`h-full`, {backgroundColor: '#475f69'}]}>
            <TitleComponent/>
            <HomeComponent/>
        </SafeAreaView>
    );
}

export default HomeScreen;