import React, { Component } from 'react';
import ResourceApiService from '../services/resource-api-service'
import ResourceContext from '../contexts/ResourceContext'
import ResourceItem from '../components/ResourceItem'

class ResourceList extends Component {
  static contextType = ResourceContext

  constructor(props){
    super(props)
    this.state = {
      data: [],
      filter: ''
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
  //   ResourceApiService.getData()
  //     .then(data => {
  //       this.context.setData(data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

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
      <>
      <div>
        <select name='filter' onChange={this.filterData}>
          <option value=''>Filter By</option>
          <option value='date_created'>Most Recent</option>
          <option value='namea-z'>Title (A - Z)</option>
          <option value='namez-a'>Title (Z - A)</option>
        </select>
      </div>
         <ul>
            {this.context.data.map(i => (
                <ResourceItem 
                data={i}
                key={i.id}
                />
            ))}    
        </ul>
      </>
    );
  }
}

export default ResourceList;