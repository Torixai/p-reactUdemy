import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './store/reducer';

const logger = ({getState, dispatch}) => {
    return next => {
        return action => {
             // actionのthenプロパティが関数だったら(つまりPromiseオブジェクト) 
            if (typeof action.then === "function") {
                // thenでPromiseの値を取得して
                action.then(res => {
               // 次のmiddlewareにresを渡す、またはdispatch(res) となる。   
                 next(res)
               });
             } else {
               next(action)
             }
        }
    }
}

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
