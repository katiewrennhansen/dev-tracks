import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Dashboard extends Component {

  render() {

    return (
      <>
        <h1>Dashboard</h1>
        <Link to='/add-resource'> &#65291; Add Resource</Link>
        <section class="resources">
            <ul>
                <li>
                    <h2>Resource A</h2>
                    <p>Article</p>
                    <p>This articles summarizes the importance of Design Systems in a complex application</p>
                    <p class="status completed">Completed</p>
                    <Link to='/edit-resource'>Edit</Link>
                    <a>Delete</a>
                </li>
                <li>
                    <h2>Resource B</h2>
                    <p>Video</p>
                    <p>This articles summarizes the importance of Design Systems in a complex application</p>
                    <p class="status todo">To Do</p>
                    <Link to='/edit-resource'>Edit</Link>
                    <a>Delete</a>
                </li>
                <li>
                    <h2>Thinkful</h2>
                    <p>Bootcamp</p>
                    <p>This articles summarizes the importance of Design Systems in a complex application</p>
                    <p class="status inprogress">In Progress</p>
                    <Link to='/edit-resource'>Edit</Link>
                    <a>Delete</a>
                </li>
                <li>
                    <h2>Devs at RTP</h2>
                    <p>Meetup</p>
                    <p>This articles summarizes the importance of Design Systems in a complex application</p>
                    <p class="status completed">Completed</p>
                    <Link to='/edit-resource'>Edit</Link>
                    <a>Delete</a>
                </li>                
            </ul>
        </section>
      </>
    );
  }
  
}

export default Dashboard;