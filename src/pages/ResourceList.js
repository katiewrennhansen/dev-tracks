import React, { Component } from 'react';
import ResourceApiService from '../services/resource-api-service'
import ResourceContext from '../contexts/ResourceContext'
import ResourceItem from '../components/ResourceItem'

class ResourceList extends Component {
  static contextType = ResourceContext

  constructor(props){
    super(props)
    this.state = {
      data: []
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

  render() {
    return (
         <ul>
            {this.context.data.map(i => (
                <ResourceItem 
                data={i}
                key={i.id}
                />
            ))}    
        </ul>
    );
  }
}

export default ResourceList;