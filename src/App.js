import React from 'react';
import './App.css';
import{Games} from './Games';
import { dataJson } from './dataJson';

class App extends React.Component{
  render(){
    return (
      <div className = "App">
        <div className = "head">
       <h1 className="hlist">LIST OF GAMES</h1>
        </div>
        <Games/>
      </div>
    )
  }
}

export default App;
