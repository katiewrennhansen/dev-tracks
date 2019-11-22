import React, { Component } from 'react';

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

  render() {

    return (
        <section className='profile'>
          <h3>User Name</h3>
          <img className='profile-image' src={require('../images/Katie1 copy.jpg')} alt='Katie profile'></img>
          <p>Github</p>
          <p>LinkedIn</p>
          <p>Portfolio</p>
          <p>Resume</p>
        </section>
    );
  }
  
}

export default Profile;