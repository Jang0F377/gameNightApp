import React from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import tw from'twrnc';
import ScoreboardComponent from "../components/ScoreboardComponent";
import AdjustScoreComponent from "../components/AdjustScoreComponent";

const GameStartScreen = () => {
    return(
        <SafeAreaView style={[tw`h-full`, {backgroundColor: '#42566A'}]}>
            <ScrollView>
                <Text style={tw`text-center text-3xl tracking-wide underline mt-2`}>Team Scores</Text>
                <ScoreboardComponent/>
                <AdjustScoreComponent/>
            </ScrollView>
        </SafeAreaView>
    );
}


export default GameStartScreen;