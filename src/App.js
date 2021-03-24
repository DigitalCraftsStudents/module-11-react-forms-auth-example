import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import AuthService from './lib/AuthService';

const authService = new AuthService();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null,
    };
  }

  checkCredentials = (username, password) => {
    authService.login(username, password)
      .then((status) => {
        if (status.isValid) {
          this.setState({
            user: authService.getUser(),
            error: null
          })
        } else {
          this.setState({
            error: status.message
          })
        }
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.user !== null ? (
          <h1>{this.state.user.name}</h1>
        ) : (
          <LoginForm handleSubmit={this.checkCredentials} />
        )}
        { this.state.error && (
          <h3 style={{ color: 'red' }}>{this.state.error}</h3>
        )}
      </div>
    );
  }
}

export default App;
