const initialState = {
    counter: 100
};

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            // ...state
            // in this case, we only have one counter property
            // so dont use ...state
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ONADDFIVE') {
        return {
            counter: state.counter + 5
        }
    }
    if (action.type === 'ONSUBTRACTFIVE') {
        return {
            counter: state.counter - 5
        }
    }

    return state;
};

export default reducer;