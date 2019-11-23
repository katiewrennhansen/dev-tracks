import React, { Component } from 'react';
import ResourceApiService from '../services/resource-api-service'
import ResourceContext from '../contexts/ResourceContext'

class EditResource extends Component {
  static contextType = ResourceContext

  // componentDidMount(){
  //   const id = this.context.idToEdit
  //   ResourceApiService.getData()
  // }

  updateResource = (e) => {
    e.preventDefault()
    const id = this.context.idToEdit
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
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div className='edit-resource'>
        <h1>Edit Resource</h1>
        <form onSubmit={(e) => this.updateResource(e)}>
            <label htmlFor="name">Title</label>
            <input type="text" name="name" id="name" placeholder="name"></input>
            <label htmlFor="title">Type</label>
            <select name='type'>
                <option value=''>Select a Resource Type</option>
                <option value='article'>Article</option>
                <option value='online-class'>Online Class</option>
                <option value='project'>Project</option>
                <option value='meetup'>Meetup</option>
            </select>
            <label htmlFor="url">Url</label>            
            <input type="text" name="url" id="url" placeholder="url"></input>
            <label htmlFor="url">Description</label>            
            <textarea rows="5" cols="20" name='description'></textarea>
            <label htmlFor="url">Status</label>            
            <select name='status'>
                <option value=''>Select a Status Type</option>
                <option value='To Do'>To Do</option>
                <option value='In Progress'>In Progress</option>
                <option value='Completed'>Completed</option>
            </select>
            <label htmlFor="date-completed">Date Completed</label>            
            <input type="date" name='date_completed'></input>
            <input type='submit'></input>
        </form>
      </div>
    );
  }
  
}

export default EditResource;