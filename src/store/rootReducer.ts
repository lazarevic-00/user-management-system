import {combineReducers} from 'redux';
import enumsSlice from "./enums/enumsSlice";

export const rootReducer = combineReducers({
    enums: enumsSlice.reducer
});