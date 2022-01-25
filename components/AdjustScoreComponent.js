import React from "react";
import {Text, View} from "react-native";
import tw from "twrnc";

const AdjustScoreComponent = () => {
    return(
        <View style={[tw`flex-1 p-2 m-2 justify-center bg-white rounded-lg`,{backgroundColor:'#D3D3D3'}]}>
            <Text>Adjust Scores Here</Text>
        </View>
    );
}

export default AdjustScoreComponent;