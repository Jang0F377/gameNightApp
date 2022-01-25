import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    timerStart:0,
}

export const timerSlice = createSlice({
    name:'timer',
    initialState,
    reducers: {
        setTimer: (state, action) => {
            state.timerStart = action.payload;
        },
        incrementTimer: state => {
            state.timerStart += 15;
        },
        decrementTimer: state => {
            state.timerStart -= 15;
        },


    },
});

export const { setTimer,incrementTimer,decrementTimer} = timerSlice.actions;

export const selectTimer = (state) => state.myReducers.timer.timerStart


export default timerSlice.reducer;