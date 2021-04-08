import { noteReducer } from './reducers/noteReducer';
import { combineReducers, createStore } from "redux"


export const store = createStore(noteReducer)