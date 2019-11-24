import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AddItemForm from '../components/AddItemForm'
import AccountApiService from '../services/account-api-service'
import ResourceContext from '../contexts/ResourceContext'
import ProjectApiService from '../services/project-api-service'

class AccountSettings extends Component {
  static contextType = ResourceContext

  componentDidMount(){
    AccountApiService.getAccounts()
      .then(data => {
        this.context.setAccounts(data)
      })
      .catch(error => {
        console.log(error)
      })
    ProjectApiService.getProjects()
    .then(data => {
      this.context.setProjects(data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  // componentDidUpdate(){
  //   AccountApiService.getAccounts()
  //     .then(data => {
  //       this.context.setAccounts(data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  //   ProjectApiService.getProjects()
  //     .then(data => {
  //       this.context.setProjects(data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  postAccount = (e) => {
    e.preventDefault()
    const newAccount = {
      name: e.target.name.value,
      url: e.target.url.value,
      user_id: 1
    }
    AccountApiService.postAccount(newAccount)
      .catch(error => {
        console.log(error)
      })
    e.target.name.value = ''
    e.target.url.value = ''
  }

  submitProject = (e) => {
    e.preventDefault()
    const newProject = {
      name: e.target.name.value,
      url: e.target.url.value,
      user_id: 1
    }
    ProjectApiService.postProject(newProject)
      .catch(error => {
        console.log(error)
      })
    e.target.name.value = ''
    e.target.url.value = ''
  }

  deleteAccount(id){
    AccountApiService.deleteAccount(id)
      .catch(error => {
        console.log(error)
      })
  }

  deleteProject(id){
    ProjectApiService.deleteProject(id)
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className='edit-account'>
        <h1>Edit Account</h1>
        <form>
            <label htmlFor="first">First Name</label>
            <input type="text" name="first" id="first" placeholder="First Name"></input>
            <label htmlFor="last">Last Name</label>
            <input type="text" name="last" id="last" placeholder="Last Name"></input>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email"></input>
            <Link className='save' to='/dashboard'>Save</Link>
        </form>

        <section>
          <h2>Linked Accounts</h2>
          {this.context.accounts.map(a => {
            return (
            <div key={a.id}>
              <p>{a.name}</p>
              <p>{a.url}</p>
              <button>Edit</button>
              <button onClick={() => this.deleteAccount(a.id)}>Delete</button>
            </div>
          )})}
          <AddItemForm 
            title='Account'
            handleSubmit={this.postAccount}
          />
        </section>
        <section>
          <h2>Linked Projects</h2>
          {this.context.projects.map(p => {
            return (
            <div key={p.id}>
              <p>{p.name}</p>
              <p>{p.url}</p>
              <p>{p.description}</p>
              <button>Edit</button>
              <button onClick={() => this.deleteProject(p.id)}>Delete</button>
            </div>
          )})}
          <AddItemForm 
            title='Project'
            handleSubmit={this.submitProject}
          />
        </section>
        
      </div>
    );
  }
  
}

export default AccountSettings;