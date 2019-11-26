import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ResourceApiService from '../services/resource-api-service'
import ResourceContext from '../contexts/ResourceContext'
import TokenService from '../services/token-service'
import FunctionService from '../services/function-service'

class Resource extends Component {
  static contextType = ResourceContext

  constructor(props){
    super(props)
    this.state = {
      error: null
    }
    this.deleteData = this.deleteData.bind(this)
  }

  componentDidMount(){
    const id = this.props.match.params.id
    ResourceApiService.getResourceById(id)
      .then(data => {
        data.date_completed = FunctionService.parseDate(data.date_completed)
        data.date_created = FunctionService.parseDate(data.date_created)
        this.context.setResource(data)
      })
      .catch(error => {
        this.setState({ error: error })
      })
  }

  componentWillUnmount(){
    this.context.setResource([])
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
      .catch(error => {
        this.context.setError(error)
      })
      this.props.history.push('/dashboard')
  }

  render() {
    const i = this.context.resource
    return (
        <div key={i.id} className="resource">
            <a href={i.url} target="_blank" rel="noopener noreferrer">
              <h2>{i.name}</h2>
            </a>
            <p>{i.type}</p>
            <p className={`status ${FunctionService.renderClass(i.status)}`}>{i.status}</p>
            <p className="date-completed">{i.date_completed}</p>
            <div className="hidden-content">
                <p className="description">{i.description}</p>
            <p className="date-created">Created On: {i.date_created}</p>
                {TokenService.hasAuthToken()
                ? (
                    <div className="actions">
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
    );
  }
}

export default Resource;