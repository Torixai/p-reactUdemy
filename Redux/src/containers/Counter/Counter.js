import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    counterChangedHandler = ( action, value ) => {
        // eslint-disable-next-line default-case
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

// clicked = {} can be like below:
// this.handleIncrement
// (function)
// handleIncrement = () => {
//    this.props.addTodo(this.state.input)
//    this.setState({input: ''})
// }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFiveCounter}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // should be an anonimous function
        // what is dispatch? action?
        // https://qiita.com/yasuhiro-okada-aktsk/items/09ab40af831c6d73491b
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddFiveCounter: () => dispatch({type: 'ONADDFIVE'}),
        onSubtractFiveCounter: () => dispatch({type: 'ONSUBTRACTFIVE'})
    };
};

// connect is HOC (return new component)
// if you have a container which only needs to dispatch actions
// but doesnt need a slice of the state,
// simply pass null as the first argument to connect
export default connect(mapStateToProps, mapDispatchToProps)(Counter);