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
                    team: i ,
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
        setNumberOfTeams: state => {
            state.finalNumberOfTeams = state.numberOfTeams;
        },
        increaseTeamPoint: (state, action) => {
            let newTeamsArr = [...state.teamsArray];
            newTeamsArr[action.payload.name - 1].score++;
            state.teamsArray = newTeamsArr;
        },
        decreaseTeamPoint: (state, action) => {
            let newTeamsArr = [...state.teamsArray];
            newTeamsArr[action.payload.name -1].score--;
            state.teamsArray = newTeamsArr;
        },
        gameOver: (state, action) => {
            return initialState
        }
    },
});

export const {incrementTeams,
    decrementTeams,
    setNumberOfTeams,
    initializeTeamsArray,
    increaseTeamPoint,
    decreaseTeamPoint,
    gameOver,
} = teamSlice.actions;

//Selectors
export const selectNumberOfTeams = (state) => state.myReducers.team.numberOfTeams;
export const selectTeamsArray = (state) => state.myReducers.team.teamsArray;
export const selectFinalNumberOfTeams = (state) => state.myReducers.team.finalNumberOfTeams;

export default teamSlice.reducer;

