import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AuthApiService from '../services/auth-service'
import TokenService from '../services/token-service';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onLoginSuccess = this.onLoginSuccess.bind(this)
  }

  onLoginSuccess(){
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

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
        TokenService.saveAuthToken(res.authToken)
        this.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    user_name.value = ''
    password.value = ''
  }

  render() {
    return (
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <h3>Login to your account to get started tracking</h3>
            {(this.state.error) && <p className="error">{this.state.error}</p>}
            <label htmlFor="user_name">Username</label>
            <input type="text" name="user_name" id="user_name" placeholder="Username"></input>
            <label htmlFor="password">Password</label>            
            <input type="password" name="password" id="password" placeholder="Password"></input>
            <input type="submit" value="Login" />
            <p>Already have an account? <Link className="login-link" to='/register'>Register</Link></p>
        </form>

        <div>
          <h3>Test Login</h3>
          <p>Username: kawrenn15</p>
          <p>Pass: pass123</p>
        </div>
      </div>
    );
  } 
}

export default Login;