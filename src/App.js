
import React from 'react';
import './App.css';
import AuthService from "./lib/AuthService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
    this.authService = new AuthService();
  }

  checkCredentials = (username, password) => {
    this.authService.login(username, password)
      .then(status => {
        console.log(status)
      })
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
