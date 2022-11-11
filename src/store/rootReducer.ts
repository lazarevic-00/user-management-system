import {combineReducers} from 'redux';
import usersSlice from "./users/usersRedux";

export const rootReducer = combineReducers({
    users: usersSlice.reducer
});