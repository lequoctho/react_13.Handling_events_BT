import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  onClickModal() {
    console.log("test");
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={()=>this.onClickModal()}>Open modal</button>
          </p>
          <a
            className="App-link"
            href="https://coders-x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yêu anh Thịnh
          </a>
        </header>      
      </div>
    );
  }
}

export default App;
