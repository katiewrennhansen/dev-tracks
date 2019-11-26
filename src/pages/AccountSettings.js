import React, { Component } from 'react';
import AddItemForm from '../components/AddItemForm'
import AccountApiService from '../services/account-api-service'
import ResourceContext from '../contexts/ResourceContext'
import ProjectApiService from '../services/project-api-service'
import UsersApiService from '../services/user-service'

class AccountSettings extends Component {
  static contextType = ResourceContext

  constructor(props){
    super(props)
    this.state = {
      error: null
    }
    this.showForm = this.showForm.bind(this)
    this.deleteAccount = this.deleteAccount.bind(this)
    this.deleteProject = this.deleteProject.bind(this)
    this.submitProject = this.submitProject.bind(this)
    this.postAccount = this.postAccount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount(){
    AccountApiService.getAccounts()
      .then(data => {
        this.context.setAccounts(data)
      })
      .catch(error => {
        this.setState({error: error})
      })
    ProjectApiService.getProjects()
    .then(data => {
      this.context.setProjects(data)
    })
    .catch(error => {
        this.setState({error: error})
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

  updateUser = (e) => {
    e.preventDefault()
    const id = 5
    const { full_name, email, bio } = e.target
    let updatedUser = {}

    if(full_name.value !== '' && full_name.value !== null){
      updatedUser.full_name = full_name.value
    }
    if(bio.value !== '' && bio.value !== null){
      updatedUser.bio = bio.value
    }
    if(email.value !== '' && email.value !== null){
      updatedUser.email = email.value
    } 

    UsersApiService.updateUser(id, updatedUser)
      .catch(error => {
        this.setState({ error: error })
      })
    e.target.full_name.value = ''
    e.target.email.value = ''
    e.target.bio.value = ''
  }

  postAccount = (e) => {
    e.preventDefault()
    const newAccount = {
      name: e.target.name.value,
      url: e.target.url.value,
      user_id: 1
    }
    AccountApiService.postAccount(newAccount)
      .catch(error => {
        this.setState({ error: error })
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
        this.setState({ error: error })
      })
    e.target.name.value = ''
    e.target.url.value = ''
  }

  deleteAccount(id){
    AccountApiService.deleteAccount(id)
      .catch(error => {
        this.setState({ error: error })        
      })
  }

  deleteProject(id){
    ProjectApiService.deleteProject(id)
      .catch(error => {
        this.setState({ error: error })        
      })
  }

  showForm = (id) => {
    document.getElementById(id).classList.toggle('hidden')
  }

  render() {
    return (
      <div className="edit-account">
        <section className="account-settings">
          <h1>Account Settings</h1>
          {(this.state.error) && <p className="error">{this.state.error}</p>}
          <button onClick={() => this.showForm('edit-account-form')}>Edit Account Info</button>
          <form className="edit-account-form hidden" id="edit-account-form" onSubmit={(e) => {this.updateUser(e)}}>
              <label htmlFor="full_name">Full Name</label>
              <input type="text" name="full_name" id="full_name" placeholder="Full Name"></input>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email"></input>
              <label htmlFor="bio">Bio</label>
              <textarea name="bio" id="bio" placeholder="Describe Yourself"></textarea>
              <input className="save" type="submit"></input>
          </form>
        </section>
        <section className="linked-accounts">
          <h2>Linked Accounts</h2>
          {this.context.accounts.map(a => {
            return (
              <div className="account" key={a.id}>
                <h3>{a.name}</h3>
                <p>
                  <a href={a.url}>{a.url}</a>
                </p>
                <button>Edit</button>
                <button onClick={() => this.deleteAccount(a.id)}>Delete</button>
              </div>
            )
          })}
          <AddItemForm 
            addItem={this.showForm}
            id="add-account-form"
            title="Account"
            handleSubmit={this.postAccount}
          />
        </section>
        <section>
          <h2>Linked Projects</h2>
          {this.context.projects.map(p => {
            return (
            <div className="project" key={p.id}>
              <h3>{p.name}</h3>
              <p>
                <a href={p.url}>{p.url}</a>
              </p>
              <p>{p.description}</p>
              <button>Edit</button>
              <button onClick={() => this.deleteProject(p.id)}>Delete</button>
            </div>
          )})}
          <AddItemForm
            addItem={this.showForm}
            id="add-project-form"
            title="Project"
            handleSubmit={this.submitProject}
            type="project"
          />
        </section>
      </div>
    );
  }
  
}

export default AccountSettings;