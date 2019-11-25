import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {

  render() {

    return (
        <footer>
            <Link to='/'>DevTracks</Link>
            <p>Created by Katie Hansen</p>
            <a href='https://katiewrennhansen.github.io/'>katiewrennhansen.github.io</a>
        </footer>
    );
  }
  
}

export default Footer;