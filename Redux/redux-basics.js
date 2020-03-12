/**
 * To see how this works...
 * $ cd Redux
 * $ node redux-basics.js
 */
// https://qiita.com/KONDO-Yuuki/items/357abff3fe327cf473b9

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0,
};

// reducer
// reducerはactionとstateから、新しいstateを作成して返すメソッド
// 引数のstateを更新することはせず、新しいstateのオブジェクトを作成して返す
// ラーメン屋の券売機の内部動作（どのラーメンのボタンが押されたか判別してstoreに指示を出す）
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
       return {
        ...state,
        counter: state.counter + 1
        };
        //* stateを直接編集しない。
        //* スプレッド構文spread operator (...Object)を使用してコピー。
        // https://redux.js.org/recipes/using-object-spread-operator/
        // https://ginpen.com/2017/12/18/spread-operator/
    }
    if(action.type === 'ADD_COUNTER') {
       return { 
        ...state,
        counter: state.counter + action.value
        };
    }
    return state;
};

// store
// reducerから指示を受けて該当のstateを変更する。
// とんこつラーメン１杯分の食券を発行する。おめでとう。
const store = createStore(rootReducer);
console.log(store.getState());

// subscription
// stateを監視する。watchみたいなもん
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// action
// They are the ONLY SOURCE of information for the store.
// ストアに渡される値はこれだけ。
// 通牒みたいな感じ。
// ラーメン屋の券売機における「とんこつラーメン」ボタンみたいなやつ。多分。
function incCounter() {
    return { type: 'INC_COUNTER',}
}
function addCounter(val) {
    return { type: 'ADD_COUNTER', value: val }
}

// dispatching action
// dispatchしてstoreに指示を送る。
// ラーメン屋の券売機でボタンを押す動作。多分。
store.dispatch(incCounter());
store.dispatch(addCounter(10));
console.log(store.getState());
