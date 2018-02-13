import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = "#292929";
let defaultStyle = {
  color: defaultTextColor
};
class Aggregate extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>number and text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render(){
    return(
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}
class Playlist extends Component {
  render(){
    return(
      <div style={{...defaultStyle, display: "inline-block", width: "20%"}}>
        <img/>
        <h3>Playlist Name</h3>
          <ul>
            <li>song</li>
            <li>song</li>
            <li>song</li>
          </ul>
      </div>

    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>

    );
  }
}

export default App;
