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
        },
        onAddNum: (state,action) => {
            return state + action.payload
        }
    }
    // if you need you can define
    // extraReducers: {
    //     [anotherSlice.actions.actionName]: (state, action) => {
    //          return new status
    //     }
    // }
})


// async by thunk
// https://www.hypertextcandy.com/learn-react-redux-with-hooks-and-redux-starter-kit
export const asyncIncrement = () => dispatch => {
    setTimeout(() => {
        const value = 15;
        dispatch(toolkitModule.actions.onAddNum(value));
    }, 2000);
};

export default toolkitModule;