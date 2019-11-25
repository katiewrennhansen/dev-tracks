import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ResourceApiService from '../services/resource-api-service'
import ResourceContext from '../contexts/ResourceContext'
import TokenService from '../services/token-service'
// import Moment from 'moment'

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
        data.date_completed = this.parseDate(data.date_completed)
        data.date_created = this.parseDate(data.date_created)
        this.context.setResource(data)
      })
      .catch(err => {
        console.log(err)
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
      .catch(err => {
        console.log(err)
      })
    this.props.history.push('/dashboard')
  }

  renderClass(css){
    if(css === 'Completed'){
        return 'completed'
    }
    if(css === 'To Do'){
        return 'todo'
    }
    if(css === 'In Progress'){
        return 'inprogress'
    }
}

  parseDate(date){
    if(date !== null){
        const shortDate = date.split('T')[0]
        const dateArray = shortDate.split('-')
        const months = ['January','February','March','April', 'May','June','July','August','September', 'October','November','December'];
        let newDate = []
        let formattedDate = []
        newDate[0] = months[dateArray[1] -1]
        newDate[1] = dateArray[2]
        newDate = newDate.join(' ')
        formattedDate[0] = newDate
        formattedDate[1] = dateArray[0]
        newDate = formattedDate.join(', ')
        return newDate
    }
  }

  render() {
    const i = this.context.resource
    return (
        <div key={i.id} className='resource'>
            <h2><a href={i.url} target='_blank' rel="noopener noreferrer" >{i.name}</a></h2>
            <p>{i.type}</p>
            <p className={`status ${this.renderClass(i.status)}`}>{i.status}</p>
            <p className='date-completed'>{i.date_completed}</p>
            <div className='hidden-content'>
                <p className='description'>{i.description}</p>
            <p className='date-created'>Created On: {i.date_created}</p>
                
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
    );
  }
}

export default Resource;