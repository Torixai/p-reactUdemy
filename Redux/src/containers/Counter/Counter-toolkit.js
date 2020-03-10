import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import toolkitModule from '../../store/toolkitModule';

const ToolkitCounter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    // dispatch
    const increment = () => dispatch(toolkitModule.actions.increment());
    const decrement = () => dispatch(toolkitModule.actions.decrement());
    const onAddFive = () => dispatch(toolkitModule.actions.onAddFive());
    const onSubtractFive = () => dispatch(toolkitModule.actions.onSubtractFive());

    return (
        <div>
            <CounterOutput value={counter} />
            <CounterControl label="Increment" clicked={increment} />
            <CounterControl label="Decrement" clicked={decrement}  />
            <CounterControl label="Add 5" clicked={onAddFive}  />
            <CounterControl label="Subtract 5" clicked={onSubtractFive}  />
        </div>
    );
}

export default ToolkitCounter;