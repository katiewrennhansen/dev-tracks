import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import ResourceApiService from '../services/resource-api-service'
import ResourceContext from '../contexts/ResourceContext'

class EditResource extends Component {
  static contextType = ResourceContext

  constructor(props){
    super(props)
    this.state = {
      error: null,
      redirect: false
    }
    this.updateResource = this.updateResource.bind(this)
  }

  componentDidMount(){
    const id = this.props.match.params.id
    ResourceApiService.getResourceById(id)
      .then(data => {
        this.context.setResource(data)
      })
      .catch(error => {
        this.setState({ error: error })
      })
  }

  updateResource = (e) => {
    e.preventDefault()
    const id = this.props.match.params.id
    const { name, type, status, url, description, date_completed } = e.target
    let updatedResource = {}

    if(name.value !== '' && name.value !== null){
      updatedResource.name = name.value
    }
    if(type.value !== '' && type.value !== null){
      updatedResource.type = type.value
    }
    if(status.value !== '' && status.value !== null){
      updatedResource.status = status.value
    }
    if(url.value !== '' && url.value !== null){
      updatedResource.url = url.value
    }
    if(description.value !== '' && description.value !== null){
      updatedResource.description = description.value
    }
    if(date_completed.value !== '' && date_completed.value !== null){
      updatedResource.date_completed = date_completed.value
    }

    ResourceApiService.updateData(id, updatedResource)
      .then(data => {
        ResourceApiService.getData()
          .then(data => {
            this.props.history.push(`/dashboard/${id}`)
            this.context.setData(data)
            this.props.updatedComponent(data)
          })
      }).catch(error => {
        this.context.setError(error)
      })

      this.setState({ redirect: true})

  }


  renderRedirect = () => {
    const id = this.props.match.params.id

    if (this.state.redirect) {
      return <Redirect to={`/dashboard/${id}`} />
    }
  }

  render() {
    const r = this.context.resource
    return (
        <div className="edit-resource">
          {this.renderRedirect()}
        <form onSubmit={(e) => this.updateResource(e)}>
          <h2>Edit {r.name}</h2>
          <label htmlFor="name">Title</label>
          <input type="text" name="name" id="name" defaultValue={r.name}></input>
          <label htmlFor="title">Type</label>
          <select defaultValue={r.type} name="type">
            <option value=''>Select a Resource Type</option>
            <option value='Article'>Article</option>
            <option value='Video'>Video</option>
            <option value='Online-Class'>Online Class</option>
            <option value='Bootcamp'>Bootcamp</option>
            <option value='Book'>Book</option>
            <option value='Meetup'>Meetup</option>
            <option value='Conference'>Conference</option>
            <option value='Lecture'>Lecture</option>
            <option value='Other'>Other</option>
          </select>
          <label htmlFor="url">Url</label>            
          <input type="text" name="url" id="url" defaultValue={r.url}></input>
          <label htmlFor="url">Description</label>            
          <textarea rows="5" cols="20" name="description" defaultValue={r.description}></textarea>
          <label htmlFor="url">Status</label>            
          <select name="status">
              <option value="">Select a Status Type</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
          </select>
          <label htmlFor="date-completed">Date Completed</label>            
          <input type="date" name="date_completed" defaultValue={r.date_completed}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
  
}

export default EditResource;