import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import tw from'twrnc';
import ScoreboardComponent from "../components/ScoreboardComponent";

const GameStartScreen = () => {
    return(
        <SafeAreaView style={[tw`h-full`, {backgroundColor: '#42566A'}]}>
            <Text style={tw`text-center text-3xl`}>GAME START SCREEN</Text>
            <ScoreboardComponent/>
        </SafeAreaView>
    );
}


export default GameStartScreen;