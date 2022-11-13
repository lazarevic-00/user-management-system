import {combineReducers} from 'redux';
import enumsSlice from "./enums/enumsSlice";
import userSlice from "./user/userSlice";
import {IUser} from "../shared/model/User";
import {IEnum} from "../shared/model/Enum";

export interface IAllStates {
    enums: IEnum[],
    user: IUser
}

export const rootReducer = combineReducers({
    enums: enumsSlice.reducer,
    user: userSlice.reducer
});