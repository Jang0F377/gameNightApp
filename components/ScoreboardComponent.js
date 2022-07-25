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
    const arraySplit1 = teamsArray.slice(0,3)
    const arraySplit2 = teamsArray.slice(3,6)
    const arraySplit3 = teamsArray.slice(6,9)
    const arraySplit4 = teamsArray.slice(9,12)
    const arraySplit5 = teamsArray.slice(12,15)
    const arraySplit6 = teamsArray.slice(15,16)



    return(
        <View style={[tw`flex-1 p-2 m-2 justify-center bg-white rounded-lg`,{backgroundColor:'#475f69'}]}>
            <Text style={tw`text-center text-3xl tracking-wide underline mt-2`}>Team Scores</Text>
            <View style={tw`flex-1 flex-row m-1`}>
                {teams < 7 ?
                    <View style={tw`flex-1`}>
                        <ScoreboardTiles teamsArray={arraySplit1}/>
                        <ScoreboardTiles teamsArray={arraySplit2}/>
                    </View> : <View/>
                }
                {teams  > 6 && teams < 13 ?
                    <View style={tw`flex-1`}>
                        <ScoreboardTiles teamsArray={arraySplit1}/>
                        <ScoreboardTiles teamsArray={arraySplit2}/>
                        <ScoreboardTiles teamsArray={arraySplit3}/>
                        <ScoreboardTiles teamsArray={arraySplit4}/>
                    </View> : <View/>
                }
                {teams > 12 && teams < 17 ?
                    <View style={tw`flex-1`}>
                        <ScoreboardTiles teamsArray={arraySplit1}/>
                        <ScoreboardTiles teamsArray={arraySplit2}/>
                        <ScoreboardTiles teamsArray={arraySplit3}/>
                        <ScoreboardTiles teamsArray={arraySplit4}/>
                        <ScoreboardTiles teamsArray={arraySplit5}/>
                        <ScoreboardTiles teamsArray={arraySplit6}/>
                    </View> : <View/>
                }

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
                        <View style={[tw`border-b`, {backgroundColor:'#9b502e'}]}>
                            <Text style={tw`text-sm font-semibold ml-1 mt-1`}>
                                Team
                            </Text>
                            <Text style={tw`text-2xl font-semibold ml-3`}>
                                {te.team}
                            </Text>
                        </View>
                        <View style={{backgroundColor:'#919ea4'}}>
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

