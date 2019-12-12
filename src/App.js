import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import AccountSettings from './pages/AccountSettings'
import Login from './pages/Login'
import Nav from './components/Nav'
import Footer from './components/Footer'
import PrivateRoute from './utilities/PrivateRoute'
import PublicOnlyRoute from './utilities/PublicOnlyRoute'
import NotFound from './pages/NotFound'
import TokenService from './services/token-service'
import './App.css';
import UpdateResourceContext from './contexts/UpdateResourceContext'
import Register from './pages/Register';


class App extends Component {
  static contextType = UpdateResourceContext

  constructor(props){
    super(props)
    this.state = {
      error: null,
      resources: [],
      singleResource: [],
      accounts: [],
      projects: [],
      userId: 1,
      userData: []
    }
    this.handleLogout = this.handleLogout.bind(this) 
  }

  handleLogout = () => {
    TokenService.clearAuthToken()
    this.props.history.push('/')
  }


  setResources = (data) => {
    this.setState({
      resources: data
    })
  }

  setAccounts = (account) => {
    this.setState({
      accounts: account
    })
  }

  setProjects = (project) => {
    this.setState({
      projects: project
    })
  }

  setSingleResource = (data) => {
    this.setState({
      singleResource: data
    })
  }

  setUserData = (data) => {
    this.setState({
      userData: data
    })
  }

  setError = (error) => {
    this.setState({
      error: error
    })
  }

  deleteResource = (id) => {
    const newResources = this.state.resources.filter(r => {
      return r.id !== id
    })
    this.setState({
      resources: newResources
    })
  }

  deleteAccount = (id) => {
    const newAccounts = this.state.accounts.filter(r => {
      return r.id !== id
    })
    this.setState({
      accounts: newAccounts
    })
  }

  deleteProject = (id) => {
    const newProjects = this.state.projects.filter(r => {
      return r.id !== id
    })
    this.setState({
      projects: newProjects
    })
  }


  render() {
    const contextValue = {
      resources: this.state.resources,
      deleteResource: this.deleteResource,
      setResources: this.setResources,
      singleResource: this.state.singleResource,
      setSingleResource: this.setSingleResource,
      setError: this.setError,
      setAccounts: this.setAccounts,
      accounts: this.state.accounts,
      userId: this.state.userId,
      deleteAccount: this.deleteAccount,
      projects: this.state.projects,
      setProjects: this.setProjects,
      deleteProject:this.deleteProject,
      userData: this.state.userData,
      setUserData: this.setUserData
    }
    return (
      <UpdateResourceContext.Provider value={contextValue}>
      <main className="App">
        <Nav 
          handleLogout={this.handleLogout}
        />
        <section className="content">
          <Switch>
            <Route 
              exact path='/'
              component={Landing}
            />
            <Route 
              path='/dashboard'
              render={(props) => (
                <Dashboard 
                  updateData={this.updateData}
                />
              )}
            />
            <PrivateRoute 
              path='/account'
              component={AccountSettings}
            />
            <PublicOnlyRoute 
              path='/login'
              component={Login}
            />
            <PublicOnlyRoute 
              path='/register'
              component={Register}
            />
            <Route 
              component={NotFound}
            />
          </Switch>
        </section>
        { (this.props.history.location.pathname === '/dashboard') 
          ? <Footer class='margin' />
          : <Footer class='' />                
        }
      </main>
      </UpdateResourceContext.Provider>
    );
  }
}

export default withRouter(App);
