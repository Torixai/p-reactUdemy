import { createSlice } from '@reduxjs/toolkit';

const toolkitModule = createSlice({
    name: 'counter',
    initialState: 10,
    reducers: {
        // this capitalized KEY automatically become the name of Action Creator fn.
        // so this means action creater will be created automatically
        increment: (state, action) => {
            // the value that handed to action creater is 'action.payload' property
            return state + 1
        },
        decrement: (state, action) => {
            return state - 1
        },
        onAddFive: (state, action) => {
            return state + 5
        },
        onSubtractFive: (state,action) => {
            return state - 5
        }
    }
    // if you need you can define
    // extraReducers: {
    //     [anotherSlice.actions.actionName]: (state, action) => {
    //          return new status
    //     }
    // }
})

export default toolkitModule;