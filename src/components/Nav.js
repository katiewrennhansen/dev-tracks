import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

  render() {

    return (
        <nav>
        <div class="nav-container">
            <Link to='/' class="company-logo">Company Name</Link>
            <ul>
                <li><Link to='/login'>Sign In</Link></li>
                <li><Link to='/dashboard'>Demo</Link></li>
            </ul>
        </div>
    </nav>
    );
  }
  
}

export default Nav;