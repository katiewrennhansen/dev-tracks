import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Profile from '../components/Profile'
import ResourceApiService from '../services/resource-api-service'
import ResourceContext from '../contexts/ResourceContext'


class Dashboard extends Component {
  static contextType = ResourceContext

  constructor(props){
    super(props)
    this.state = {
      active: false,
    }
  }

  openAccordion = () => {
    this.setState({
      active: true
    })
  }

  componentDidMount(){
    ResourceApiService.getData()
      .then(data => {
        this.context.setData(data)
      }).catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate(){
    ResourceApiService.getData()
      .then(data => {
        this.context.setData(data)
      }).catch(err => {
        console.log(err)
      })
  }

  deleteData = (id) => {
    ResourceApiService.deleteData(id)
      .then(res => {
        ResourceApiService.getData()
          .then(data => {
            this.context.setData(data)
          })
      })
      .catch(err => {
        console.log(err)
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
              {this.context.data.map(i => (
                  <li key={i.id} className='resource'>
                    <h2>{i.name}</h2>
                    <p>{i.type}</p>
                    <p className={`status completed`}>{i.status}</p>
                    <p className='date-completed'>{i.date_completed}</p>
                    <div className='hidden-content'>
                      <p className='description'>{i.description}</p>
                      <div className='actions'>
                          <Link to={`/edit-resource/${i.id}`} onClick={() => this.context.updateId(i.id)}>Edit</Link>
                          <button onClick={() => this.deleteData(i.id)}>Delete</button>
                      </div>
                    </div>
                </li>
              ))}    
            </ul>
        </section>
      </div>
    );
  }
  
}

export default Dashboard;