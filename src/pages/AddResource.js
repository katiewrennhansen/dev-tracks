import React, { Component } from 'react';
import ResourceApiService from '../services/resource-api-service'

class AddResource extends Component {

  addResource = (e) => {
    e.preventDefault()
    const newResource = {
      name: e.target.title.value,
      type: e.target.type.value,
      status: e.target.status.value,
      url: e.target.url.value,
      description: e.target.description.value,
      date_completed: e.target.date_completed.value
    }
    ResourceApiService.postData(newResource)
      .then(data => {
        console.log('added')
      }).catch(err => {
        console.log(err)
      })
    this.props.history.push('/dashboard')
  }

  render() {

    return (
      <div className='add-resource'>
        <h1>Add Resource</h1>
        <form onSubmit={(e) => this.addResource(e)}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="Title"></input>
            <label htmlFor="title">Type</label>
            <select name='type'>
                <option>Select a Resource Type</option>
                <option value='article'>Article</option>
                <option value='online-class'>Online Class</option>
                <option value='project'>Project</option>
                <option value='meetup'>Meetup</option>
            </select>
            <label htmlFor="url">URL</label>            
            <input type="text" name="url" id="url" placeholder="URL"></input>
            <label htmlFor="description">Description</label>            
            <textarea rows="5" cols="20" name='description' placeholder='Add a description here'></textarea>
            <label htmlFor="url">Status</label>            
            <select name='status'>
                <option>Select a Status Type</option>
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

export default AddResource;