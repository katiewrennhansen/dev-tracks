import React, { Component } from 'react';
import ResourceApiService from '../services/resource-api-service'
import ResourceContext from '../contexts/ResourceContext'
import FunctionService from '../services/function-service'

class AddResource extends Component {
  static contextType = ResourceContext

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
      .then(data => {
        data.date_completed = FunctionService.parseDate(data.date_completed)
        data.date_created = FunctionService.parseDate(data.date_created)
        this.context.addData(data)
      }).then(
        ResourceApiService.getData()
          .then(data => {
            this.props.history.push('/dashboard')
            this.context.setData(data)
          })
      )
      .catch(this.context.setError)
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