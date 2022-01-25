import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import tw from 'twrnc';
import {CountdownCircleTimer} from "react-native-countdown-circle-timer";
import {useDispatch, useSelector} from "react-redux";
import {decrementTimerBy1, incrementTimerBy1, selectTimer} from "../slices/timerSlice";
import {Icon} from "react-native-elements";


const TimerComponent = () => {
    const time = useSelector(selectTimer)
    const [isPlaying,setIsPlaying] = useState(false)
    const [key,setKey] = useState(0);
    const startTimer = () => {
        setIsPlaying(true);
    };
    const pauseTimer = () => {
        setIsPlaying(false);
    };
    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return (
                <View >
                    <Text style={tw`text-center text-3xl text-red-600`}>Times Up!</Text>
                </View>
            );
        }

        return (
            <View style={tw`text-center`}>
                <View style={tw`text-center`}>
                    <Text style={tw`text-center text-xl`}>Remaining</Text>
                </View>
                <View style={tw`text-center`}>
                    <Text style={tw`text-center text-4xl py-1 font-bold`}>{remainingTime}</Text>
                </View>
                <View style={tw`text-center`}>
                    <Text style={tw`text-center text-xl`}>seconds</Text>
                </View>
            </View>
        );
    };

    return(
        <View style={[tw`flex-1 p-2 m-2 justify-center bg-white rounded-lg`,{backgroundColor:'#D3D3D3'}]}>
            <View>
                <Text style={tw`text-center p-1 m-1 underline text-3xl tracking-wide`}>Father Time</Text>
            </View>
            <View style={tw`mx-auto p-1`}>
                <CountdownCircleTimer
                    key={key}
                    isPlaying={isPlaying}
                    duration={time}
                    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </View>
            <View style={tw`flex flex-row justify-evenly`}>
                <TouchableOpacity>
                    <Icon
                        name='pause-circle-outline'
                        style={tw`p-2 m-1`}
                        type='ionicon' size={70}
                        onPress={pauseTimer}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        style={tw`p-2 m-1`}
                        name='refresh-circle-outline'
                        type='ionicon'
                        size={70}
                        onPress={() => {
                            setKey(prevKey => prevKey + 1);
                            setIsPlaying(false);
                        }}

                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name='play-circle-outline'
                        style={tw`p-2 m-1`}
                        type='ionicon' size={70}
                        onPress={startTimer}
                    />
                </TouchableOpacity>
            </View>

        </View>
    );


}


export default TimerComponent;