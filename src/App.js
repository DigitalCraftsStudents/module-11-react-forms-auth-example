
import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import AuthService from "./lib/AuthService";

class App extends React.Component {
  checkCredentials(username, password) {
    AuthService.login(username, password)
  }

  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
