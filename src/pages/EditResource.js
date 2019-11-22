import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ResourceApiService from '../services/resource-api-service'

class EditResource extends Component {

  updateResource = (e, id) => {
    e.preventDefault()
    const newResource = {
      name: e.target.title.value,
      type: e.target.type.value,
      status: e.target.status.value,
      url: e.target.url.value,
      description: e.target.description.value,
      date_completed: e.target.date_completed.value
    }
    ResourceApiService.updateData(id, newResource)
      .then(data => {
        console.log('added')
      }).catch(err => {
        console.log(err)
      })
  }

  render() {

    return (
      <div className='edit-resource'>
        <h1>Edit Resource</h1>
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="title"></input>
            <label htmlFor="title">Type</label>
            <select>
                <option>Article</option>
                <option>Online Class</option>
                <option>Project</option>
                <option>Meetup</option>
            </select>
            <label htmlFor="url">Url</label>            
            <input type="text" name="url" id="url" placeholder="url"></input>
            <label htmlFor="url">Description</label>            
            <textarea rows="5" cols="20"></textarea>
            <label htmlFor="url">Status</label>            
            <select>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>
            <label htmlFor="date-completed">Date Completed</label>            
            <input type="date" name='date-completed'></input>
            <Link className='save' to='/dashboard'>Save</Link>
        </form>
      </div>
    );
  }
  
}

export default EditResource;