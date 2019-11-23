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

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: null
    }
  }

  render() {

    return (
      <main className='App'>
        <Nav />
        <section className='content'>
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
              path='/add-resource'
              component={AddResource}
            />
            <PrivateRoute 
              path='/edit-resource/:id'
              render={(histoy) => (
                <EditResource
                  id={this.state.idToEdit}
                  history={this.props.history}
                />
              )}
            />
            <PrivateRoute 
              path={'/account'}
              component={AccountSettings}
            />
            <PublicOnlyRoute 
              path='/login'
              component={Login}
            />
          </Switch>
        </section>
        <Footer />
      </main>
    );
  }
  
}

export default withRouter(App);
