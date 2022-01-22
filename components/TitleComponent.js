import React from "react";
import {Text, View} from "react-native";
import tw from "twrnc";
import {Icon} from "react-native-elements";


const TitleComponent = () => {
    return(
        <View style={tw`p-4`}>
            <View style={tw`flex flex-row justify-between`}>
                <Text style={tw`text-4xl font-extrabold tracking-wider`}>
                    Teaster's
                </Text>
                <Icon
                    name='dice'
                    style={tw`w-20`}
                    type='font-awesome-5' size={40}/>
            </View>
            <View style={tw`border-b`}>
                <Text style={tw`text-3xl font-semibold tracking-wide mb-2`}>
                    Party App
                </Text>
            </View>
        </View>
    );
}

export default TitleComponent;