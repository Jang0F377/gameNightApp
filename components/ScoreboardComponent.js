import React from "react";
import {useSelector} from "react-redux";
import {selectNumberOfTeams} from "../slices/teamSlice";
import tw from'twrnc';
import {Text, View} from "react-native";


const ScoreboardComponent = () => {
    const teams = useSelector(selectNumberOfTeams);


    return(
        <View style={tw`flex flex-row`}>

        </View>

    );
}

export default ScoreboardComponent;