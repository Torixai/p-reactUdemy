import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 

import './index.css';
import ToolkitApp from './toolkitApp'
import registerServiceWorker from './registerServiceWorker';
import { setupStore } from './store/toolkitStore';

const store = setupStore();

ReactDOM.render(<Provider store={store}><ToolkitApp/></Provider>, document.getElementById('root'));
registerServiceWorker();
