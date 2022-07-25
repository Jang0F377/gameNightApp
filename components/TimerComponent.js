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
                <View style={{backgroundColor:'#919ea4'}}>
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
        <View style={[tw`flex-1 p-2 m-2 justify-center bg-white rounded-lg`,{backgroundColor:'#475f69'}]}>
            <View style={tw`mb-2 m-1`}>
                <Text style={tw`text-center p-1 underline text-3xl tracking-wide`}>Father Time</Text>
            </View>
            <View style={[tw`mx-auto p-1 rounded-full`, {backgroundColor:'#919ea4'}]}>
                <CountdownCircleTimer
                    key={key}
                    isPlaying={isPlaying}
                    duration={time}
                    colors={['#232f3A', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[8, 5, 2, 0]}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </View>
            <View style={tw`flex flex-row justify-evenly`}>
                <TouchableOpacity>
                    <Icon
                        name='pause-circle-outline'
                        color='#919ea4'
                        style={tw`p-2 m-1`}
                        type='ionicon' size={70}
                        onPress={pauseTimer}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        style={tw`p-2 m-1`}
                        color='#919ea4'
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
                        color='#919ea4'
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