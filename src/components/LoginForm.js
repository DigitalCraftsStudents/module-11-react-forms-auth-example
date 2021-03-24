import React, { Component } from 'react'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
