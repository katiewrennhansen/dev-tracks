import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddResource extends Component {

  render() {

    return (
      <div className='add-resource'>
        <h1>Add Resource</h1>
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="Title"></input>
            <label htmlFor="title">Type</label>
            <select>
                <option>Select a Resource Type</option>
                <option>Article</option>
                <option>Online Class</option>
                <option>Project</option>
                <option>Meetup</option>
            </select>
            <label htmlFor="url">URL</label>            
            <input type="text" name="url" id="url" placeholder="URL"></input>
            <label htmlFor="description">Description</label>            
            <textarea rows="5" cols="20" name='description' placeholder='Add a description here'></textarea>
            <label htmlFor="url">Status</label>            
            <select>
              <option>Select a Status Type</option>
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

export default AddResource;