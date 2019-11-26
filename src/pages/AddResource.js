import React, { Component } from 'react';
import ResourceApiService from '../services/resource-api-service'

class AddResource extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: null
    }
    this.addResource = this.addResource.bind(this)
  }

  addResource = (e) => {
    e.preventDefault()
    const date = e.target.date_completed.value
    let newResource = {
      name: e.target.name.value,
      type: e.target.type.value,
      status: e.target.status.value,
      url: e.target.url.value,
      description: e.target.description.value,
      user_id: 5
    }
    if(date !== '' && date !== null) {
      newResource.date_completed = date
    }
    ResourceApiService.postData(newResource)
      .catch(error => {
        this.setState({ error: error })
      })
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div className="add-resource">
        <h2>Add Resource</h2>
        <form onSubmit={(e) => this.addResource(e)}>
                <label htmlFor="name">Title</label>
                <input type="text" name="name" id="name" placeholder="Resource Title"></input>
                <label htmlFor="title">Type</label>
                <select name="type">
                    <option value="">Select a Resource Type</option>
                    <option value="article">Article</option>
                    <option value="online-class">Online Class</option>
                    <option value="project">Project</option>
                    <option value="meetup">Meetup</option>
                </select>
                <label htmlFor="url">Url</label>            
                <input type="text" name="url" id="url" placeholder="URL"></input>
                <label htmlFor="url">Description</label>            
                <textarea rows="5" cols="20" name="description" placeholder="Description"></textarea>
                <label htmlFor="url">Status</label>            
                <select name="status">
                    <option value="">Select a Status Type</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <label htmlFor="date-completed">Date Completed</label>            
                <input type="date" name="date_completed"></input>
                <input type="submit"></input>
            </form>
      </div> 
    );
  }
}

export default AddResource;