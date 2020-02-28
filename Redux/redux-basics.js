/**
 * To see how this works...
 * $ cd Redux
 * $ node redux-basics.js
 */


const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0,
};

//reducer
//reducerはactionとstateから、新しいstateを作成して返すメソッド
//引数のstateを更新することはせず、新しいstateのオブジェクトを作成して返す
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
       return {
        ...state,
        counter: state.counter + 2
        };
        //* do not mutate original state
        //* use spread operator (...Object)
        // https://redux.js.org/recipes/using-object-spread-operator/
    }
    if(action.type === 'ADD_COUNTER') {
       return { 
        ...state,
        counter: state.counter + action.value
        };
    }
    return state;
};

//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// action
// They are the ONLY SOURCE of information for the store.
function incCounter() {
    return { type: 'INC_COUNTER',}
}
function addCounter(val) {
    return { type: 'ADD_COUNTER', value: val }
}

//dispatching action
store.dispatch(incCounter());
store.dispatch(addCounter(10));
console.log(store.getState());
