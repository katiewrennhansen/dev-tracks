import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ResourceApiService from '../services/resource-api-service'
import UpdateResourceContext from '../contexts/UpdateResourceContext'
import TokenService from '../services/token-service'
import FunctionService from '../services/function-service'

class Resource extends Component {
  static contextType = UpdateResourceContext

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
        this.context.setSingleResource(data)
      })
      .catch(error => {
        this.context.setError(error)
      })
  }

  componentWillUnmount(){
    this.context.setSingleResource([])
  }

  deleteData = (id) => {
    this.context.deleteResource(id)
    ResourceApiService.deleteData(id)
      .catch(error => {
        this.context.setError(error)
      })
      this.props.history.push('/dashboard')
  }


  render() {
    const i = this.context.singleResource
    return (
      <SingleResource
        i={i}
        deleteData={this.deleteData}
      />
    )
  }    
}

export default Resource;


function SingleResource(props){
  return (
    <UpdateResourceContext.Consumer>
      {(context)=> (
            <div key={props.i.id} className="resource">
                <a href={props.i.url} target="_blank" rel="noopener noreferrer">
                  <h2>{props.i.name}</h2>
                </a>
                <p>{props.i.type}</p>
                <p className={`status ${FunctionService.renderClass(props.i.status)}`}>{props.i.status}</p>
                <p className="date-completed">{props.i.date_completed}</p>
                <div className="hidden-content">
                    <p className="description">{props.i.description}</p>
                <p className="date-created">Created On: {props.i.date_created}</p>
                    {TokenService.hasAuthToken()
                    ? (
                        <div className="actions">
                          <Link to={`/dashboard/${props.i.id}/edit`}>
                              <button>Edit</button>
                          </Link>
                          <button onClick={() => props.deleteData(props.i.id)}>Delete</button>
                        </div>
                      )
                    : null
                    } 
                </div>
            </div>
          )}
    </UpdateResourceContext.Consumer>
    )
  }