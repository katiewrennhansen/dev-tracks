import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'

class Nav extends Component {

  render() {

    return (
        <nav>
        <div className="nav-container">
            <Link to='/' className="company-logo">Company Name</Link>
            <ul>
              {TokenService.hasAuthToken()
                ? (
                  <>
                    <li><Link to='/account'>Account</Link></li>
                    <li><button onClick={() => TokenService.clearAuthToken()}>Logout</button></li>
                  </>
                )
                : (
                  <>
                    <li><Link to='/dashboard'>Demo</Link></li>
                    <li><Link to='/login'>Sign In</Link></li>
                  </>
                )
              }
            </ul>
        </div>
    </nav>
    );
  }
  
}

export default Nav;