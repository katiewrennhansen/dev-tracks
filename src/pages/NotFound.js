import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'

class NotFound extends Component {

  render() {

    return (
      <div className='landing-content'>
        <h1>Page Not Found</h1>
        <p>We can't seem to find the page you are looking for.</p>
        {TokenService.hasAuthToken()
        ? (<Link className='get-started' to='/dashboard'>Go back</Link>)
        : (<Link className='get-started' to='/login'>Login to get Started</Link>)
        }
      </div>
    );
  }
  
}

export default NotFound;