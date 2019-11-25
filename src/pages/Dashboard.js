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
      data: [],
    }
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
  
  // componentDidUpdate(){
  //     ResourceApiService.getData()
  //       .then(data => {
  //         this.context.setData(data)
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })     
  // }

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


  sortAtoZ = (data) => {
    return data.sort((a, b) => {
      if((a.name).toLowerCase() < (b.name).toLowerCase())
        return -1
      if((a.name).toLowerCase() > (b.name).toLowerCase())
        return 1
      return 0
    })
  }

  sortZtoA = (data) => {
    return data.sort((a, b) => {
      if((a.name).toLowerCase() > (b.name).toLowerCase())
        return -1
      if((a.name).toLowerCase() < (b.name).toLowerCase())
        return 1
      return 0
    })
  }

  sortDate = (data) => {
    return data.sort((a, b) => {
      if(a.date_created > b.date_created)
        return -1
      if(a.date_created < b.date_created)
        return 1
      return 0
    })
  }

  filterData = (e) => {
    e.preventDefault()
    const value = e.target.value

    if(value === 'namea-z'){
      ResourceApiService.getData()
      .then(data => {
        this.context.setData(this.sortAtoZ(data))
      })
      .catch(err => {
        console.log(err)
      })
    }
    if(value === 'namez-a'){
      ResourceApiService.getData()
      .then(data => {
        this.context.setData(this.sortZtoA(data))
      })
      .catch(err => {
        console.log(err)
      })
    }
    if(value === 'date_created'){
      ResourceApiService.getData()
      .then(data => {
        this.context.setData(this.sortDate(data))
      })
      .catch(err => {
        console.log(err)
      })
    }
    if(value === ''){
      ResourceApiService.getData()
      .then(data => {
        this.context.setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

  render() {
    return (
      <div className='dashboard-grid'>
        <Profile />
        <section className="resources">
            <div className='resources-grid-container'>
            <h2>
              <Link to='/dashboard'>
                <h2>Resources</h2>
              </Link>
            </h2>
              {TokenService.hasAuthToken()
                ? (<Link className='save' to='/dashboard/add-resource'> &#65291; Add Resource</Link>)
                : null
              }
              <select name='filter' onChange={this.filterData}>
                <option value=''>Filter By</option>
                <option value='date_created'>Most Recent</option>
                <option value='namea-z'>Title (A - Z)</option>
                <option value='namez-a'>Title (Z - A)</option>
              </select>
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