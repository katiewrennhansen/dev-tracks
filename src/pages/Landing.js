import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {

  render() {

    return (
      <div className='landing-content'>
        <h1>Welcome to Developer Resource Tracking</h1>
        <p>The site build for career changes looking for a more efficient way to track their non-traditional learning process.</p>
        <Link className='get-started' to='/login'>Get Started</Link>
      </div>
    );
  }
  
}

export default Landing;