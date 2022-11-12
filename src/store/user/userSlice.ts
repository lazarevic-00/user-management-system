import {createSlice} from '@reduxjs/toolkit';
import {initialUserState} from "../../shared/initialStates/UserState";

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser: (state, action) => {
            state = action.payload;
            return state;
        },
    },
});

export default userSlice;