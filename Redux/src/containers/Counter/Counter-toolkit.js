import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import toolkitModule from '../../store/toolkitModule';
import { asyncIncrement } from '../../store/toolkitModule'

// to write async transaction use thunk
// https://qiita.com/muijp/items/63386fd65c7e9f06f5d4

// https://medium.com/javascript-in-plain-english/redux-thunk-vs-redux-saga-8c93fc822de
// saga

const ToolkitCounter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    // dispatch
    const increment = () => dispatch(toolkitModule.actions.increment());
    const async = () => dispatch(asyncIncrement());
    const decrement = () => dispatch(toolkitModule.actions.decrement());
    const onAddFive = () => dispatch(toolkitModule.actions.onAddFive());
    const onSubtractFive = () => dispatch(toolkitModule.actions.onSubtractFive());

    return (
        <div>
            <CounterOutput value={counter} />
            <CounterControl label="Increment" clicked={increment} />
            <CounterControl label="asyncIncrement" clicked={async} />
            <CounterControl label="Decrement" clicked={decrement}  />
            <CounterControl label="Add 5" clicked={onAddFive}  />
            <CounterControl label="Subtract 5" clicked={onSubtractFive}  />
        </div>
    );
}

export default ToolkitCounter;