import React, { Component } from 'react';
import AccountApiService from '../services/account-api-service'
import ResourceContext from '../contexts/ResourceContext'
import ProjectApiService from '../services/project-api-service'
import UsersApiService from '../services/user-service';

class Profile extends Component {
  static contextType = ResourceContext

  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

  componentDidMount(){
    AccountApiService.getAccounts()
      .then(data => {
        this.context.setAccounts(data)
      })
      .catch(err => {
        console.log(err)
      })
    ProjectApiService.getProjects()
    .then(data => {
      this.context.setProjects(data)
    })
    .catch(err => {
      console.log(err)
    })
    UsersApiService.getUserById('1')
      .then(data => {
        this.context.setUserData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const context = this.context
    return (
        <section className='profile'>
          <h3>{context.userData.full_name}</h3>
          <img className='profile-image' src={require('../images/Katie1 copy.jpg')} alt='Katie profile'></img>
          <p>{context.userData.bio}</p>
          <br></br>
          <div>
            <h4>Linked Accounts</h4>
            {context.accounts.map(a => {
              return (
              <p key={a.id}>
                  <a href={a.url} target='_blank' rel="noopener noreferrer">{a.name}</a>
              </p>
              )
            })}
          </div>
          <br></br>
          <div className='projects'>
            <h4>Projects</h4>
            {context.projects.map(p => {
              return (
              <div key={p.id}>
                  <a href={p.url} target='_blank' rel="noopener noreferrer">{p.name}</a>
                  <p>{p.description}</p>
              </div>
              )
            })}
          </div>
        </section>
    );
  }
  
}

export default Profile;