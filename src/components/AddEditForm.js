import React, { Component } from 'react';

class AddEditForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e)}>
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
        );
  }
}

export default AddEditForm;