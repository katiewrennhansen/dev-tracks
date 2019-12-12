import React, { Component } from 'react';
import AccountApiService from '../services/account-api-service'
import UpdateResourceContext from '../contexts/UpdateResourceContext'
import ProjectApiService from '../services/project-api-service'
import UsersApiService from '../services/user-service';

class Profile extends Component {
  static contextType = UpdateResourceContext

  componentDidMount(){
    AccountApiService.getAccounts()
      .then(data => {
        this.context.setAccounts(data)
      })
      .catch(error => {
        this.context.setError(error)
      })
    ProjectApiService.getProjects()
    .then(data => {
      this.context.setProjects(data)
    })
    .catch(error => {
      this.context.setError(error)
    })
    UsersApiService.getUser()
      .then(data => {
        this.context.setUserData(data)
      })
      .catch(error => {
        this.context.setError(error)
      })
  }

  componentWillUnmount(){
    this.context.setAccounts([])
    this.context.setError([])
    this.context.setProjects([])
    this.context.setUserData([])
  }

  render() {
    const context = this.context
    return (
        <section className="profile">
          <h3>{context.userData.full_name}</h3>
          <img className="profile-image" src={require('../images/Katie1 copy.jpg')} alt="Katie profile"></img>
          <p>{context.userData.bio}</p>
          <br></br>
          <div>
            <h4>Linked Accounts</h4>
            {context.accounts.map(a => {
              return (
              <p key={a.id}>
                  <a href={a.url} target="_blank" rel="noopener noreferrer">{a.name}</a>
              </p>
              )
            })}
          </div>
          <br></br>
          <div className="projects">
            <h4>Projects</h4>
            {context.projects.map(p => {
              return (
              <div key={p.id}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
              </div>
              )
            })}
          </div>
        </section>
    );
  }
}

export default Profile;