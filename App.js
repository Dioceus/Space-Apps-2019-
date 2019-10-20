import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import locations from './locations';





class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <div className="App-Component">
          <div className="App-Component">
              <AutoCompleteText items={locations} />
          </div>    
        </div>
      </div>
     );
  }
}
 
export default App;
