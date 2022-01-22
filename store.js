import {combineReducers, configureStore} from "@reduxjs/toolkit";
import gameReducer from './slices/gameSlice';
import teamReducer from './slices/teamSlice';
import timerReducer from './slices/timerSlice'


const myReducers = combineReducers({game: gameReducer, team:teamReducer,timer:timerReducer})

export const store = configureStore({
    reducer: {
        myReducers
    },
});
