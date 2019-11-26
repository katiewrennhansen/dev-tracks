import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'

class Landing extends Component {
  render() {
    return (
      <div className="landing-content">
        <h1>DevTracks</h1>
        <p>The site built for career changers looking for a more efficient way to track their non-traditional learning process.</p>
        { TokenService.hasAuthToken()
          ? <Link className="get-started" to='/dashboard'>Get Started</Link>
          : <Link className="get-started" to='/login'>Get Started</Link>
        }
      </div>
    );
  } 
}

export default Landing;