import React from "react";
import {Text, View} from "react-native";
import tw from "twrnc";
import {Icon} from "react-native-elements";


const TitleComponent = () => {
    return(
        <View style={tw`pb-8 p-4 mx-4 `}>
            <View style={tw`flex flex-row justify-between`}>
                <Text style={tw`text-4xl font-extrabold tracking-wider`}>
                    Game Night
                </Text>
                <Icon
                    name='dice'
                    style={tw`w-25 my-auto`}
                    type='font-awesome-5' size={35}/>
            </View>
            <View style={tw`border-b`}>
                <Text style={tw`text-4xl font-semibold tracking-wider mb-4`}>
                    Party App
                </Text>
            </View>
        </View>
    );
}

export default TitleComponent;