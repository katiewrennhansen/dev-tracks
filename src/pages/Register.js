import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserApiService from '../services/user-service'

class Register extends Component {

    handleRegistration = (e) => {
        e.preventDefault()
        const newUser = {
            user_name: e.target.username.value,
            password: e.target.password.value,
            full_name: e.target.name.value,
        }
        UserApiService.postUser(newUser)
            .then(res => {
                this.props.history.push('/login')
            })
            .catch(error => {
                console.log(error)
            })
    }

  render(){
    return (
      <div className="login-form">
        <form onSubmit={(e) => {this.handleRegistration(e)}}>
            <h1>Register</h1>
            <div className="form-content">
                <label htmlFor="username">Name: </label>
                <input 
                    type="text"
                    id="name" 
                    name="name" 
                    placeholer="name"
                />
                <label htmlFor="username">Username: </label>
                <input 
                    type="text"
                    id="username" 
                    name="username" 
                    placeholer="username"
                />
                <label htmlFor="password">Password: </label>
                <input 
                    type="password"
                    id="password" 
                    name="password" 
                    placeholer="password"
                />
                <input type="submit" value="Register"/>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </form>
      </div>
    );
  }
  
}

export default Register;
