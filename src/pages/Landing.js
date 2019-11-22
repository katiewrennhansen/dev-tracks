import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {

  render() {

    return (
      <div className='landing-content'>
        <h1>Welcome to Developer Resource Tracking</h1>
        <p>This site was build for career changes looking for a better way to track their non-traditional learning</p>
        <Link className='get-started' to='/dashboard'>Get Started</Link>
      </div>
    );
  }
  
}

export default Landing;