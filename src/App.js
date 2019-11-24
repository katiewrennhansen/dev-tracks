import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import EditResource from './pages/EditResource'
import AddResource from './pages/AddResource'
import AccountSettings from './pages/AccountSettings'
import Login from './pages/Login'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css';
import PrivateRoute from './utilities/PrivateRoute'
import PublicOnlyRoute from './utilities/PublicOnlyRoute'
import NotFound from './pages/NotFound'
import TokenService from './services/token-service'
import Resource from './pages/Resource'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: null
    }
  }

  handleLogout = () => {
    TokenService.clearAuthToken()
    this.props.history.push('/')
  }

  render() {

    return (
      <main className='App'>
        <Nav 
          handleLogout={this.handleLogout}
        />
        <section className='content'>
          <Switch>
            <Route 
              exact path='/'
              component={Landing}
            />
            <Route 
              exact path='/dashboard'
              render={(props) => (
                <Dashboard 
                  updateData={this.updateData}
                />
              )}
            />
            <PrivateRoute 
              path='/add-resource'
              component={AddResource}
            />
            <PrivateRoute 
              path='/dashboard/:id/edit'
              component={EditResource}
            />
            <PrivateRoute
              path='/dashboard/:id'
              component={Resource}
            />
            <PrivateRoute 
              path={'/account'}
              component={AccountSettings}
            />
            <PublicOnlyRoute 
              path='/login'
              component={Login}
            />
            <Route 
              component={NotFound}
            />
          </Switch>
        </section>
        <Footer />
      </main>
    );
  }
  
}

export default withRouter(App);
