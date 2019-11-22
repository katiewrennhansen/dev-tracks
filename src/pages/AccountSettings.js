import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AccountSettings extends Component {

  render() {

    return (
      <div className='edit-account'>
        <h1>Edit Account</h1>
        <form>
            <label htmlFor="first">First Name</label>
            <input type="text" name="first" id="first" placeholder="First Name"></input>
            <label htmlFor="last">Last Name</label>
            <input type="text" name="last" id="last" placeholder="Last Name"></input>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email"></input>
            <Link className='save' to='/dashboard'>Save</Link>
        </form>
        <form>
            <label htmlFor="name">Name</label>            
            <input type="text" name="name" id="name" placeholder="Account Type"></input>
            <label htmlFor="url">URL</label>  
            <input type="text" name="url" id="url" placeholder="Account URL"></input>
            <Link className='save' to='/dashboard'>Add Account</Link>
        </form>
      </div>
    );
  }
  
}

export default AccountSettings;