import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import Profile from '../components/Profile'
import ResourceApiService from '../services/resource-api-service'
import TokenService from '../services/token-service'
import PrivateRoute from '../utilities/PrivateRoute'
import AddResource from '../pages/AddResource'
import EditResource from '../pages/EditResource'
import Resource from '../pages/Resource'
import ResourceList from '../pages/ResourceList'
import FunctionService from '../services/function-service'
import UpdateResourceContext from '../contexts/UpdateResourceContext'

class Dashboard extends Component {
  static contextType = UpdateResourceContext

  constructor(props){
    super(props)
    this.state = {
      error: null
    }
    this.filterData = this.filterData.bind(this)
  }

  componentDidMount(){
    ResourceApiService.getData()
      .then(data => {
        this.context.setResources(data)
      })
      .catch(error => {
        this.setState({ error: error })
      })
  }

  filterData = (e) => {
    e.preventDefault()
    const value = e.target.value
    
    if(value === 'namea-z'){
      this.setResources(FunctionService.sortAtoZ(this.state.resources))
    }
    if(value === 'namez-a'){
        this.setResources(FunctionService.sortZtoA(this.state.resources))
    }
    if(value === 'date_created'){
        this.setResources(FunctionService.sortDate(this.state.resources))
    }
    if(value === ''){
      ResourceApiService.getData()
      .then(data => {
        this.setResources(data)
      })
      .catch(error => {
        this.setState({ error: error })
      })
    }
}

  render() {
    return (
      <div className="dashboard-grid">
        <Profile />
        <section className="resources">
            <div className="resources-grid-container">
            <h2>
              <Link to='/dashboard'>
                <h2>Resources</h2>
              </Link>
            </h2>
              { TokenService.hasAuthToken()
                ? <Link className="add-resource-button" to='/dashboard/add-resource'> &#65291; Add Resource</Link>
                : null
              }
              <select name="filter" onChange={this.filterData}>
                <option value="">Filter By</option>
                <option value="date_created">Most Recent</option>
                <option value="namea-z">Title (A - Z)</option>
                <option value="namez-a">Title (Z - A)</option>
              </select>
            </div>
            <div className="resource-content">
              <Switch>
                <Route 
                  exact path='/dashboard'
                  component={ResourceList}
                  updateComponent={this.updateComponent}
                  resources={this.state.resources}
                />
              <PrivateRoute
                  path='/dashboard/add-resource'
                  component={AddResource}
                  updateComponent={this.updateComponent}

                />
                <PrivateRoute 
                  path='/dashboard/:id/edit'
                  component={EditResource}
                  updateComponent={this.updateComponent}
                />
                <Route
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