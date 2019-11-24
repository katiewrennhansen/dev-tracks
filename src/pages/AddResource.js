import React, { Component } from 'react';
import ResourceApiService from '../services/resource-api-service'

class AddResource extends Component {

  addResource = (e) => {
    e.preventDefault()
    const date = e.target.date_completed.value
    let newResource = {
      name: e.target.title.value,
      type: e.target.type.value,
      status: e.target.status.value,
      url: e.target.url.value,
      description: e.target.description.value,
      user_id: 1
    }
    if(date !== '' && date !== null) {
      newResource.date_completed = date
    }
    ResourceApiService.postData(newResource)
      .catch(err => {
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
                <option value='video'>Video</option>
                <option value='online-class'>Online Class</option>
                <option value='bootcamp'>Bootcamp</option>
                <option value='book'>Book</option>
                <option value='meetup'>Meetup</option>
                <option value='conference'>Conference</option>
                <option value='lecture'>Lecture</option>
                <option value='other'>Other</option>
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