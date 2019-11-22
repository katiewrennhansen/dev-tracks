import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

  render() {

    return (
        <nav>
        <div className="nav-container">
            <Link to='/' className="company-logo">Company Name</Link>
            <ul>
                <li><Link to='/login'>Sign In</Link></li>
                <li><Link to='/account'>Account</Link></li>
            </ul>
        </div>
    </nav>
    );
  }
  
}

export default Nav;