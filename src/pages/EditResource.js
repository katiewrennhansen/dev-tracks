import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EditResource extends Component {

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