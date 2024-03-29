import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.renderLogutNav = this.renderLogutNav.bind(this)
    this.renderLoginNav = this.renderLoginNav.bind(this)
  }

  renderLogutNav(){
    return (
      <>
        <li></li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li className="log">
          <Link to='/login'>Sign In</Link>
        </li>
      </>
    )
  }

  renderLoginNav(){
    return (
        <>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/account'>Account</Link>
          </li>
          <li className="log">
            <button onClick={() => this.props.handleLogout()}>Logout</button>
          </li>
        </>
    )
  }

  render() {
    return (
      <nav>
        <div className="nav-container">
            <Link to='/' className="company-logo">
              <p>Dev</p>
              Tracks
            </Link>
            <ul>
              {TokenService.hasAuthToken()
                ? this.renderLoginNav()
                : this.renderLogutNav()
              }
            </ul>
        </div>
    </nav>
    );
  }
  
}

export default Nav;