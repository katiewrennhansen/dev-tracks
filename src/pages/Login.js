import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {

  render() {

    return (
      <>
        <h1>Login</h1>
        <form>
            <h3>Login to your account to get started tracking</h3>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="username"></input>
            <label htmlFor="password">Password</label>            
            <input type="password" name="password" id="password" placeholder="password"></input>
            <Link to='/dashboard'>Submit</Link>
        </form>
      </>
    );
  }
  
}

export default Login;