import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import Profile from '../components/Profile'
import ResourceApiService from '../services/resource-api-service'
import ResourceContext from '../contexts/ResourceContext'
import TokenService from '../services/token-service'
import PrivateRoute from '../utilities/PrivateRoute'
import AddResource from '../pages/AddResource'
import EditResource from '../pages/EditResource'
import Resource from '../pages/Resource'
import ResourceList from '../pages/ResourceList'

class Dashboard extends Component {
  static contextType = ResourceContext

  constructor(props){
    super(props)
    this.state = {
      active: false,
      data: []
    }
  }

  openAccordion = () => {
    this.setState({
      active: true
    })
  }

  componentDidMount(){
    ResourceApiService.getData()
      .then(data => {
        this.context.setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate(){
      ResourceApiService.getData()
      .then(data => {
        this.context.setData(data)
      })
      .catch(err => {
        console.log(err)
      })
    }

  deleteData = (id) => {
    ResourceApiService.deleteData(id)
      .then(res => {
        ResourceApiService.getData()
          .then(data => {
            this.context.setData(data)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentWillUnmount() {
    this.context.setData([])
}

  render() {
    return (
      <div className='dashboard-grid'>
        <Profile />
        <section className="resources">
            <div className='resources-grid-container'>
              <h2>Resources</h2>
              {TokenService.hasAuthToken()
                ? (<Link className='save' to='/dashboard/add-resource'> &#65291; Add Resource</Link>)
                : null
              }
            </div>
            <div className='resource-content'>
            <Switch>
              <Route 
                exact path='/dashboard'
                component={ResourceList}
              />
             <PrivateRoute
                path='/dashboard/add-resource'
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
            </Switch>
            </div>
        </section>
      </div>
    );
  }
  
}

export default withRouter(Dashboard);