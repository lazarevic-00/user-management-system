import {createSlice} from '@reduxjs/toolkit';

const enumsSlice = createSlice({
    name: 'enums',
    initialState: {},

    reducers: {
        setEnums: (state, action) => {
            state = action.payload;
            return state;
        },
    },
});

export default enumsSlice;