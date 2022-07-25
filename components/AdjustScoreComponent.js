import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import tw from "twrnc";
import {useDispatch, useSelector} from "react-redux";
import {decreaseTeamPoint, increaseTeamPoint, selectFinalNumberOfTeams, selectTeamsArray} from "../slices/teamSlice";
import {Icon} from "react-native-elements";

const AdjustScoreComponent = () => {
    const teams = useSelector(selectFinalNumberOfTeams);
    const teamsArray = useSelector(selectTeamsArray);
    const arraySplit1 = teamsArray.slice(0,3)
    const arraySplit2 = teamsArray.slice(3,6)
    const arraySplit3 = teamsArray.slice(6,9)
    const arraySplit4 = teamsArray.slice(9,12)
    const arraySplit5 = teamsArray.slice(12,15)
    const arraySplit6 = teamsArray.slice(15,16)


    return(
        <View style={[tw`flex-1 p-2 m-2 justify-center bg-white rounded-lg`,{backgroundColor:'#475f69'}]}>
            <View>
                <Text style={tw`text-center p-1 m-1 underline text-3xl tracking-wide`}>Adjust Scores</Text>
                <View style={tw`flex-1 flex-row m-1`}>
                    {teams < 7 ?
                        <View style={tw`flex-1`}>
                            <ScoreAdjustingTiles teamsArray={arraySplit1}/>
                            <ScoreAdjustingTiles teamsArray={arraySplit2}/>
                        </View> : <View/>
                    }
                    {teams  > 6 && teams < 13 ?
                        <View style={tw`flex-1`}>
                            <ScoreAdjustingTiles teamsArray={arraySplit1}/>
                            <ScoreAdjustingTiles teamsArray={arraySplit2}/>
                            <ScoreAdjustingTiles teamsArray={arraySplit3}/>
                            <ScoreAdjustingTiles teamsArray={arraySplit4}/>
                        </View> : <View/>
                    }
                    {teams > 12 && teams < 17 ?
                        <View style={tw`flex-1`}>
                            <ScoreAdjustingTiles teamsArray={arraySplit1}/>
                            <ScoreAdjustingTiles teamsArray={arraySplit2}/>
                            <ScoreAdjustingTiles teamsArray={arraySplit3}/>
                            <ScoreAdjustingTiles teamsArray={arraySplit4}/>
                            <ScoreAdjustingTiles teamsArray={arraySplit5}/>
                            <ScoreAdjustingTiles teamsArray={arraySplit6}/>
                        </View> : <View/>
                    }
                </View>
            </View>
        </View>
    );
}

export default AdjustScoreComponent;

const ScoreAdjustingTiles = (props) => {
    let dispatch = useDispatch();

    return(
        <View style={tw`flex-1 flex-row`}>
            {props.teamsArray.map(te => {
                return(
                    <View style={tw`flex-1 border`} key={te.team}>
                        <View style={[tw`border-b`, {backgroundColor:'#9b502e'}]}>
                            <Text style={tw`text-base font-medium ml-1 mt-1`}>
                                Team
                            </Text>
                            <Text style={tw`text-base font-semibold ml-2 mb-1`}>
                                {te.team}
                            </Text>
                        </View>
                        <View style={[tw`flex flex-row justify-center`,{backgroundColor:'#919ea4'}]}>
                            <TouchableOpacity style={tw`p-2 m-1`}>
                                {te.score > 0 ?
                                    <Icon
                                        disabled={te.score < 1}
                                        name='exposure-neg-1'
                                        type='material'
                                        size={35}
                                        onPress={() => dispatch(decreaseTeamPoint({
                                            name:te.team,
                                            score:te.score,
                                        }))
                                        }
                                    /> : <View style={tw`p-2 m-1 my-auto mx-auto`}/>
                                }

                            </TouchableOpacity>
                            <TouchableOpacity style={tw`p-2 m-1 border-l`}>
                                <Icon
                                    name='exposure-plus-1'
                                    type='material'
                                    size={35}
                                    onPress={() => dispatch(increaseTeamPoint({
                                        name: te.team,
                                        score:te.score,
                                    }))

                                }

                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}