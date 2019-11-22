import React, { Component } from 'react';
import ResourceApiService from '../services/resource-api-service'

class EditResource extends Component {

  updateResource = (e) => {
    const id = 10
    e.preventDefault()
    const updatedResource = {
      name: e.target.title.value || '',
      type: e.target.type.value || '',
      status: e.target.status.value || '',
      url: e.target.url.value || '',
      description: e.target.description.value || '',
      date_completed: e.target.date_completed.value || ''
    }
    ResourceApiService.updateData(id, updatedResource)
      .then(data => {
        console.log('added')
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
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="title"></input>
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