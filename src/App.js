
import React from 'react';
import './App.css';
import AuthService from "./lib/AuthService";

class App extends React.Component {
  checkCredentials(username, password) {
    AuthService.login(username, password)
  }

  render() {
    return (
      <div className="App">
        {/* Login form will go here */}
      </div>
    );
  }
}

export default App;
