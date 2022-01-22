import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    teamOneScore:0,
    teamTwoScore:0,
    teamThreeScore:0,
    teamFourScore:0,
};

export const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers: {
    }
});

export const {} = gameSlice.actions;


export default gameSlice.reducer;