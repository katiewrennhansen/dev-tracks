import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {

  render() {
    return (
        <footer className={this.props.class}>
            <Link to='/'>DevTracks</Link>
            <p>Created by Katie Hansen</p>
            <a href="https://katiewrennhansen.com" target="_blank" rel="noopener noreferrer">katiewrennhansen.com</a>
        </footer>
    );
  }
  
}

export default Footer;