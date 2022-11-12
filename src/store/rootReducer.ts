import {combineReducers} from 'redux';
import enumsSlice from "./enums/enumsSlice";
import userSlice from "./user/userSlice";
import {IUser} from "../shared/model/User";

export interface IAllStates {
    // enums: IEnums,
    user: IUser
}

export const rootReducer = combineReducers({
    enums: enumsSlice.reducer,
    user: userSlice.reducer
});