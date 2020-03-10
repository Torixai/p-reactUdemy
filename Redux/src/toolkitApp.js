import React, { Component } from 'react';

import ToolkitCounter from './containers/Counter/Counter-toolkit';
import './App.css';

class ToolkitApp extends Component {
  render() {
    return (
      <div className="toolkitApp">
       <ToolkitCounter />
      </div>
    );
  }
}

export default ToolkitApp;
