import React, { Component } from 'react';
import AddItemForm from '../components/AddItemForm'
import AccountApiService from '../services/account-api-service'
import UpdateResourceContext from '../contexts/UpdateResourceContext'
import ProjectApiService from '../services/project-api-service'
import UsersApiService from '../services/user-service'

class AccountSettings extends Component {
  static contextType = UpdateResourceContext

  constructor(props){
    super(props)
    this.state = {
      error: null,
      edit: false,
      toedit: []
    }
    this.showForm = this.showForm.bind(this)
    this.deleteAccount = this.deleteAccount.bind(this)
    this.deleteProject = this.deleteProject.bind(this)
    this.postProject = this.postProject.bind(this)
    this.postAccount = this.postAccount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

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
      this.context.setError(error)             
    })
  }

  updateUser = (e) => {
    e.preventDefault()
    const id = this.context.userId
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
      .then(data => {
        UsersApiService.getUserById(id)
          .then(data => {
            this.context.setUserData(data)
          })
      })
      .then(() => {
        this.props.history.push('/dashboard')
      })
      .catch(error => {
        this.context.setError(error)               
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
      user_id: this.context.userId
    }
    AccountApiService.postAccount(newAccount)
      .then(res => {
        AccountApiService.getAccounts()
          .then(data => {
            this.context.setAccounts(data)
          }) 
      })
      .catch(error => {
        this.context.setError(error)
      })
    e.target.name.value = ''
    e.target.url.value = ''
    this.props.history.push('/account')
  }

  postProject = (e) => {
    e.preventDefault()
    const newProject = {
      name: e.target.name.value,
      url: e.target.url.value,
      description: e.target.description.value,
      user_id: this.context.userId
    }
    ProjectApiService.postProject(newProject)
      .then(res => {
        ProjectApiService.getProjects()
          .then(data => {
            this.context.setProjects(data)
          })
      })
      .catch(error => {
        this.context.setError(error)
      })
    e.target.name.value = ''
    e.target.url.value = ''
    e.target.description.value = ''
    this.props.history.push('/account')
  }

  deleteAccount(id){
    this.context.deleteAccount(id)
    AccountApiService.deleteAccount(id)
      .catch(error => {
        this.context.setError(error)                
      })
    this.props.history.push('/account')
  }

  deleteProject(id){
    this.context.deleteProject(id)
    ProjectApiService.deleteProject(id)
      .catch(error => {
        this.context.setError(error)
      })
      this.props.history.push('/account')

  }

  showForm = (id) => {
    document.getElementById(id).classList.toggle('hidden')
  }

  render() {
    return (
      <div className="edit-account">
        <section className="account-settings">
          <h1>Account Settings</h1>
          {(this.context.error) && <p className="error">{this.context.error}</p>}
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
                <button onClick={() => this.deleteAccount(a.id)}>&#x2718;</button>
              </div>
          )})}
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
              <button onClick={() => this.deleteProject(p.id)}>&#x2718;</button>
            </div>
          )})}
          <AddItemForm
            addItem={this.showForm}
            id="add-project-form"
            title="Project"
            handleSubmit={this.postProject}
            type="project"
          />
        </section>
      </div>
    );
  }
  
}

export default AccountSettings;