import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

  openAccordion = () => {
    this.setState({
      active: true
    })
  }

  render() {

    return (
      <>
      <div className='dashboard-grid'>
        <section className='profile'>
          <h3>User Name</h3>
          <img className='profile-image' src={require('../images/Katie1 copy.jpg')} alt='Katie profile'></img>
          <p>Github</p>
          <p>LinkedIn</p>
          <p>Portfolio</p>
          <p>Resume</p>
        </section>
        <section className="resources">
            <div className='resources-grid-container'>
              <h2>Resources</h2>
              <Link className='save' to='/add-resource'> &#65291; Add Resource</Link>
            </div>
            <ul>
                <li className='resource' onClick={this.showContent}>
                    <h2>Resource A</h2>
                    <p>Article</p>
                    <p className="status completed">Completed</p>
                    <p>Date Completed</p>
                    <div className='hidden-content hidden'>
                      <p>This articles summarizes the importance of Design Systems in a complex application</p>
                      <div className='actions'>
                        <Link className='edit' to='/edit-resource'>Edit</Link>
                        <button>Delete</button>
                      </div>
                    </div>
                </li>
                <li className='resource' onClick={this.showContent}>
                  <h2>Thinkful</h2>
                    <p>Bootcamp</p>
                    <p className="status inprogress">In Progress</p>
                    <div className='hidden-content hidden'>
                      <p>This articles summarizes the importance of Design Systems in a complex application</p>
                      <div className='actions'>
                        <Link className='edit' to='/edit-resource'>Edit</Link>
                        <button>Delete</button>
                      </div>
                    </div>
                </li>
                <li className='resource' onClick={this.showContent}>
                  <h2>Resource B</h2>
                    <p>Video</p>
                    <p className="status todo">To Do</p>
                    <div className='hidden-content'>
                      <p>This articles summarizes the importance of Design Systems in a complex application</p>
                      <div className='actions'>
                        <Link className='edit' to='/edit-resource'>Edit</Link>
                        <button>Delete</button>
                      </div>
                    </div>
                </li>
                <li className='resource' onClick={this.showContent}>
                  <h2>Devs at RTP</h2>
                  <p>Meetup</p>
                  <p className="status completed">Completed</p>
                  <p>Date Completed</p>
                    <div className='hidden-content hidden'>
                      <p>This articles summarizes the importance of Design Systems in a complex application</p>
                      <div className='actions'>
                        <Link className='edit' to='/edit-resource'>Edit</Link>
                        <button>Delete</button>
                      </div>
                    </div>
                </li>               
            </ul>
        </section>
      </div>
      </>
    );
  }
  
}

export default Dashboard;