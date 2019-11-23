import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AddItemForm from '../components/AddItemForm'

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
        <AddItemForm 
          title='Account'
        />
        <AddItemForm 
          title='Project'
        />
      </div>
    );
  }
  
}

export default AccountSettings;