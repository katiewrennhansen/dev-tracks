import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Profile from '../components/Profile'

const data = [
  {
    id: 1,
    name: 'Resource A',
    type: 'Article',
    status: 'Completed',
    class: 'completed',
    description: 'This articles summarizes the importance of Design Systems in a complex application',
    date_completed: '5/18/2019'
  },
  {
    id: 2,
    name: 'Thinkful',
    type: 'Bootcamp',
    status: 'In Progress',
    class: 'inprogress',
    description: 'This articles summarizes the importance of Design Systems in a complex application',
    date_completed: null
  },
  {
    id: 3,
    name: 'Resource B',
    type: 'Video',
    status: 'To Do',
    class: 'todo',
    description: 'This articles summarizes the importance of Design Systems in a complex application',
    date_completed: null
  },
  {
    id: 4,
    name: 'Devs @ RTP',
    type: 'Meetup',
    status: 'Completed',
    class: 'completed',
    description: 'This articles summarizes the importance of Design Systems in a complex application',
    date_completed: '6/10/2019'
  }
]


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
      <div className='dashboard-grid'>
        <Profile />
        <section className="resources">
            <div className='resources-grid-container'>
              <h2>Resources</h2>
              <Link className='save' to='/add-resource'> &#65291; Add Resource</Link>
            </div>
            <ul>
              {data.map(i => {
                return (
                  <li key={i.id} className='resource' onClick={this.showContent}>
                    <h2>{i.name}</h2>
                    <p>{i.type}</p>
                    <p className={`status ${i.class}`}>{i.status}</p>
                    <p className='date-completed'>{i.date_completed}</p>
                    <div className='hidden-content'>
                      <p className='description'>{i.description}</p>
                      <div className='actions'>
                        <Link className='edit' to='/edit-resource'>Edit</Link>
                        <button>Delete</button>
                      </div>
                    </div>
                </li>
                )
              })}    
            </ul>
        </section>
      </div>
    );
  }
  
}

export default Dashboard;