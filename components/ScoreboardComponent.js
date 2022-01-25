import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    initializeTeamsArray,
    selectFinalNumberOfTeams,
    selectNumberOfTeams,
    selectTeamsArray
} from "../slices/teamSlice";
import tw from'twrnc';
import {Text, View} from "react-native";
import TimerComponent from "./TimerComponent";


const ScoreboardComponent = () => {
    const teams = useSelector(selectFinalNumberOfTeams);
    const teamsArray = useSelector(selectTeamsArray);
    const arraySplit1 = teamsArray.slice(0,4)
    const arraySplit2 = teamsArray.slice(4,8)
    const arraySplit3 = teamsArray.slice(8,12)
    const arraySplit4 = teamsArray.slice(12,16)
    const dispatch = useDispatch();



    return(
        <View style={tw`flex-1`}>
            <View style={tw`flex-1 flex-row m-1`}>
                {teams < 5 ? <ScoreboardTiles teamsArray={teamsArray}/> : <View/>}
                {teams > 4 && teams < 9 ?
                    <View style={tw`flex-1`}>
                        <ScoreboardTiles teamsArray={arraySplit1}/>
                        <ScoreboardTiles teamsArray={arraySplit2}/>
                    </View> : <View/>
                }
                {teams > 8 && teams < 13 ?
                    <View style={tw`flex-1`}>
                        <ScoreboardTiles teamsArray={arraySplit1}/>
                        <ScoreboardTiles teamsArray={arraySplit2}/>
                        <ScoreboardTiles teamsArray={arraySplit3}/>
                    </View> : <View/>
                }
                {teams > 12 && teams < 17 ?
                    <View style={tw`flex-1`}>
                        <ScoreboardTiles teamsArray={arraySplit1}/>
                        <ScoreboardTiles teamsArray={arraySplit2}/>
                        <ScoreboardTiles teamsArray={arraySplit3}/>
                        <ScoreboardTiles teamsArray={arraySplit4}/>
                    </View> : <View/>
                }

            </View>
            <View style={tw`flex-1`}>
                <TimerComponent/>
            </View>
        </View>


    );
}

export default ScoreboardComponent;



const ScoreboardTiles = (props) => {

    return(
        <View style={tw`flex-1 flex-row flex-wrap m-2 `}>
            {props.teamsArray.map(te => {
                return(
                    <View style={tw`flex-1 border`} key={te.team}>
                        <View style={[tw`border-b`, {backgroundColor:'#4169e1'}]}>
                            <Text style={tw`text-sm font-semibold ml-1 mt-1`}>
                                Team
                            </Text>
                            <Text style={tw`text-2xl font-semibold ml-3`}>
                                {te.team}
                            </Text>
                        </View>
                        <View style={{backgroundColor:'#D3D3D3'}}>
                            <Text style={tw`text-4xl text-center p-2 m-2`}>
                                {te.score}
                            </Text>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

