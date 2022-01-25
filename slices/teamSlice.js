import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    numberOfTeams:2,
    teamsArray: [],
    finalNumberOfTeams:0
}

export const teamSlice = createSlice({
    name:'team',
    initialState,
    reducers: {
        initializeTeamsArray: state => {
            const teamLen = state.finalNumberOfTeams + 1;
            for (let i=0;i<teamLen;i++) {
                state.teamsArray.push({
                    team: i,
                    score:0,
                })
            }
            state.teamsArray.shift();
        },
        incrementTeams: state => {
            state.numberOfTeams++;
        },
        decrementTeams: state => {
            state.numberOfTeams--;
        },
        setNumberOfTeams: (state) => {
            state.finalNumberOfTeams = state.numberOfTeams;
        }
    },
});

export const {incrementTeams,decrementTeams, setNumberOfTeams, initializeTeamsArray} = teamSlice.actions;

//Selectors
export const selectNumberOfTeams = (state) => state.myReducers.team.numberOfTeams;
export const selectTeamsArray = (state) => state.myReducers.team.teamsArray;
export const selectFinalNumberOfTeams = (state) => state.myReducers.team.finalNumberOfTeams;

export default teamSlice.reducer;

