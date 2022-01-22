import React, {useState} from "react";
import tw from 'twrnc';
import {ScrollView, Text, TextInput, View} from "react-native";
import {Icon} from "react-native-elements";
import {useDispatch, useSelector} from "react-redux";
import {decrementTeams, incrementTeams, selectNumberOfTeams} from "../slices/teamSlice";



const HomeComponent = () => {
    return(
        <ScrollView style={tw`flex-1`}>
            <ChooseNumberOfTeams/>

            <ChoseTimer/>
        </ScrollView>

    );

}

export default HomeComponent;


const ChoseTimer = () => {

    return(
        <View style={[tw`p-1 m-10 rounded`,{backgroundColor:'#D3D3D3'}]}>
            <Text style={tw`text-3xl mx-auto`}>Set the Timer</Text>



        </View>
    );
}


const ChooseNumberOfTeams = () => {
    const dispatch = useDispatch();
    const teams = useSelector(selectNumberOfTeams);

    return (
        <View style={[tw`p-1 rounded m-4 mt-6 `, {backgroundColor:'#B87333'}]}>
            <Text style={tw`text-3xl mx-auto`}>Number of Teams/Players</Text>
            <View style={tw`flex flex-row mx-auto mt-9 mb-3`}>
                <Icon
                    name='remove-circle-outline'
                    style={tw`w-10 m-2 my-auto`}
                    type='ionicon' size={33}
                    onPress={() => {
                        dispatch(decrementTeams());
                    }}
                />
                <Text style={tw`p-5 pt-6 border-2 text-5xl text-center`} keyboardType='numeric'>
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
    )
}


