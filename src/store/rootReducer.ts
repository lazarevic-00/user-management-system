import {combineReducers} from 'redux';
import enumsSlice from "./enums/enumsSlice";
import {IEnum} from "../shared/model/Enum";

export interface IAllStates {
    enums: IEnum[],
}

export const rootReducer = combineReducers({
    enums: enumsSlice.reducer,
});