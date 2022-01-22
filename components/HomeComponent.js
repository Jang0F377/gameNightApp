import React, {useState} from "react";
import tw from 'twrnc';
import {ScrollView, Text, TextInput, View} from "react-native";
import {Button, Icon, Tooltip} from "react-native-elements";
import {useDispatch, useSelector} from "react-redux";
import {decrementTeams, incrementTeams, selectNumberOfTeams, setNumberOfTeams} from "../slices/teamSlice";
import {decrementTimer, incrementTimer, selectTimer, setTimer} from "../slices/timerSlice";
import {useNavigation} from "@react-navigation/native";




const HomeComponent = () => {
    const teams = useSelector(selectNumberOfTeams);
    const timer = useSelector(selectTimer);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return(
        <ScrollView style={tw`flex-1`}>
            <ChooseNumberOfTeams/>
            <ChoseTimer/>
            {teams > 0 && timer >= 0 && (
                <View>
                    <Text style={tw`text-center font-semibold text-lg p-1 mt-2 `}>
                        You have selected {teams} teams/players
                    </Text>
                    <Text style={tw`text-center font-semibold text-lg `}>
                        &
                    </Text>
                    <Text style={tw`text-center font-semibold text-lg p-1 mb-2 `}>
                        {timer > 0 ? `${timer} second timer per team` : `no timer will be given`}
                    </Text>
                </View>
            )}

            <Button style={[tw`p-5 mx-auto w-40 ${!teams && 'opacity-20'}`]}
                    disabled={!teams}
                    buttonStyle={{backgroundColor: 'rgba(78,116,289,1)'}}
                    onPress={() => {
                        dispatch(setNumberOfTeams(teams));
                        dispatch(setTimer(timer));
                        console.log(timer,teams)
                        navigation.navigate('Game Screen')
                    }}
                    title='Begin Game' />
        </ScrollView>
    );
}
export default HomeComponent;


const ChoseTimer = () => {
    const timer = useSelector(selectTimer);
    const dispatch = useDispatch();

    return(
        <View style={[tw`p-1 mx-10 my-4 rounded-lg`,{backgroundColor:'#D3D3D3'}]}>
            <Text style={tw`text-3xl underline mx-auto`}>Set the Timer</Text>
            <View style={tw`flex flex-row mx-auto mt-9 mb-3`}>
                <Icon
                    disabled={!timer}
                    name='play-back-circle-outline'
                    style={tw`w-10 m-2 my-auto ${!timer && 'opacity-20'}`}
                    type='ionicon' size={33}
                    onPress={() => {
                        dispatch(decrementTimer());
                    }}
                />
                <Text style={tw`p-5 pt-6 border-2 text-5xl text-center`} keyboardType='numeric'>
                    {timer}
                </Text>
                <Icon
                    disabled={timer === 120}
                    name='play-forward-circle-outline'
                    type='ionicon'
                    style={tw`w-10 m-2 my-auto`} size={33}
                    onPress={() => {
                        dispatch(incrementTimer());
                    }}
                />
            </View>
            <Text style={tw`text-center text-base mb-1`}>seconds</Text>

        </View>

    );
}


const ChooseNumberOfTeams = () => {
    const teams = useSelector(selectNumberOfTeams);
    const dispatch = useDispatch();

    return (
        <View style={[tw`p-1 rounded-md m-4 mt-1 `, {backgroundColor:'#B87333'}]}>
            <Text style={tw`text-3xl mx-auto underline`}>Number of Teams/Players</Text>
            <View style={tw`flex flex-row mx-auto mt-9 mb-3`}>
                <Icon
                    disabled={teams < 1}
                    name='remove-circle-outline'
                    style={[tw` m-2 my-auto ${!teams && 'opacity-20'}`]}
                    type='ionicon' size={33}
                    onPress={() => {
                        dispatch(decrementTeams());
                    }}
                />
                <Text style={tw`p-5 pt-6 border-2 text-5xl text-center`} >
                    {teams}
                </Text>
                <Icon
                    name='add-circle-outline'
                    type='ionicon'
                    style={tw`w-10 m-2 my-auto`} size={33}
                    onPress={() => {
                        dispatch(incrementTeams());
                    }}

                />
            </View>
        </View>
    );
};

// const ScoreboardOrRounds = () => {
//     return(
//         <View style={[tw`p-1 mx-8 my-2 rounded-lg`,{backgroundColor:'#D3D3D3'}]}>
//             <Text style={tw`text-3xl underline tracking-wide mx-auto`}>Score Tracking</Text>
//             <View>
//                 <Tooltip
//                     popover={<Text></Text>}
//
//                 >
//                     <Text style={tw`p-2 text-2xl mt-2 text-left`} selectable selectionColor={'blue'}>Scoreboard</Text>
//
//                 </Tooltip>
//                 <Text style={tw`text-center text-4xl`}>Or</Text>
//                 <Tooltip
//                     popover={<Text></Text>}
//
//                 >
//                     <Text style={tw`text-right p-1 text-2xl mr-3 mb-1`}>Rounds</Text>
//
//                 </Tooltip>
//             </View>
//
//         </View>
//     );
// }