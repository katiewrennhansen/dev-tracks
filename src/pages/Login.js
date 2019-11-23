import React, { Component } from 'react';
import AuthApiService from '../services/auth-service'
import TokenService from '../services/token-service';

class Login extends Component {
  state = { error: null }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ error: null })
    const {user_name, password } = e.target
    const loginUser = {
      user_name: user_name.value,
      password: password.value
    }

    AuthApiService.postLogin(loginUser)
      .then(res => {
        console.log(res.authToken)
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
      this.props.history.push('/dashboard')

  }

  render() {

    return (
      <div className='login-form'>
        <h1>Login</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <h3>Login to your account to get started tracking</h3>
            <label htmlFor="user_name">Username</label>
            <input type="text" name="user_name" id="username" placeholder="Username"></input>
            <label htmlFor="password">Password</label>            
            <input type="password" name="password" id="password" placeholder="Password"></input>
            <input type='submit'></input>
        </form>
      </div>
    );
  }
  
}

export default Login;