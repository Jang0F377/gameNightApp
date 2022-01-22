import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    numberOfTeams:0,
}

export const teamSlice = createSlice({
    name:'team',
    initialState,
    reducers: {
        incrementTeams: state => {
            state.numberOfTeams++;
        },
        decrementTeams: state => {
            state.numberOfTeams--;
        },
    },
});

export const {incrementTeams,decrementTeams} = teamSlice.actions;

//Selectors
export const selectNumberOfTeams = (state) => state.myReducers.team.numberOfTeams;

export default teamSlice.reducer;

