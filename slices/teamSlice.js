import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    numberOfTeams:2,
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
        setNumberOfTeams: (state, action) => {
            state.numberOfTeams = action.payload + 1
        }
    },
});

export const {incrementTeams,decrementTeams, setNumberOfTeams} = teamSlice.actions;

//Selectors
export const selectNumberOfTeams = (state) => state.myReducers.team.numberOfTeams;

export default teamSlice.reducer;

