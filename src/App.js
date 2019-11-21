import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import EditResource from './pages/EditResource'
import AddResource from './pages/AddResource'
import Login from './pages/Login'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css';

class App extends Component {

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
              component={Dashboard}
            />
            <Route 
              path='/add-resource'
              component={AddResource}
            />
            <Route 
              path='/edit-resource'
              component={EditResource}
            />
            <Route 
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

export default App;
