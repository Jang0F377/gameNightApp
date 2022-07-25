import React from "react";
import {Button, SafeAreaView, ScrollView, Text, View} from "react-native";
import tw from'twrnc';
import ScoreboardComponent from "../components/ScoreboardComponent";
import AdjustScoreComponent from "../components/AdjustScoreComponent";
import TimerComponent from "../components/TimerComponent";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {gameOver} from "../slices/teamSlice";
import {timerGameOver} from "../slices/timerSlice";

const GameStartScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return(
        <SafeAreaView style={[tw`flex-1`, {backgroundColor: '#232f3A'}]}>
            <ScrollView>
                <TimerComponent/>
                <ScoreboardComponent/>
                <AdjustScoreComponent/>
                <Button color={"#f194ff"}

                        title={"End Game"}
                        onPress={() => {
                            dispatch(gameOver());
                            dispatch(timerGameOver());
                            navigation.navigate('Home Screen');
                        }}

                />
            </ScrollView>
        </SafeAreaView>
    );
}


export default GameStartScreen;