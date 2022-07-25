import {combineReducers, configureStore} from "@reduxjs/toolkit";
import teamReducer from './slices/teamSlice';
import timerReducer from './slices/timerSlice'


const myReducers = combineReducers({team:teamReducer,timer:timerReducer})

export const store = configureStore({
    reducer: {
        myReducers
    },
});
