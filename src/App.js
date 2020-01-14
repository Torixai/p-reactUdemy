import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'max', age: 38 },
      { name: 'john', age: 38 },
      { name: 'oriens', age: 38 }
    ],
    otherState: 'some other states'
  }
  
  switchNameHandler = (newName) => {
    //console.log('was clicked');
    this.setState({     persons: [
      { name: newName , age: 38 },
      { name: 'aries', age: 38 },
      { name: 'sashe', age: 68 }
    ]})
  }



  render() {
    return (
      <div className="App">
        <h1>hi im react App</h1>
        <button onClick = {() => this.switchNameHandler('odiles')}>switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'odette')}>
          my hobbies : racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
