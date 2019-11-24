import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Profile from '../components/Profile'
import ResourceApiService from '../services/resource-api-service'
import ResourceContext from '../contexts/ResourceContext'
import TokenService from '../services/token-service'

class Resource extends Component {
  static contextType = ResourceContext

  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  

  componentDidMount(){
    const id = this.props.match.params.id
    ResourceApiService.getResourceById(id)
      .then(data => {
        this.context.setResource(data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  deleteData = (id) => {
    ResourceApiService.deleteData(id)
      .then(res => {
        ResourceApiService.getData()
          .then(data => {
            this.context.setData(data)
            this.context.setResource([])
          })
      })
      .catch(err => {
        console.log(err)
      })
    this.props.history.push('/dashboard')
  }

  render() {
    const i = this.context.resource
    return (
      <div className='dashboard-grid'>
        <Profile />
        <section className='resources'>
            <div key={i.id} className='resource'>
                <h2>{i.name}</h2>
                <p>{i.type}</p>
                <p className={`status completed`}>{i.status}</p>
                <p className='date-completed'>{i.date_completed}</p>
                <div className='hidden-content'>
                    <p className='description'>{i.description}</p>
                    {TokenService.hasAuthToken()
                    ? (
                        <div className='actions'>
                        <Link to={`/dashboard/${i.id}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={() => this.deleteData(i.id)}>Delete</button>
                        </div>
                    )
                    : null
                    } 
                </div>
            </div>
        </section>
      </div>
    );
  }
  
}

export default Resource;