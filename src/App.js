import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

class App extends Component {
  
  onClickModal() {
    console.log("test");
    
  }
  render() {
    return (
      <div className="App">
        <Modal/>
      </div>
    );
  }
}

export default App;
