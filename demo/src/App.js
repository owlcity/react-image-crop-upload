import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactQiniuAvatarUpload from './components/react-qiniu-avatar-upload'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ReactQiniuAvatarUpload />
        </header>
      </div>
    );
  }
}

export default App;
