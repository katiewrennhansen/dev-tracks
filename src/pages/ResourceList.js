import React, { Component } from 'react';
import UpdateResourceContext from '../contexts/UpdateResourceContext'
import ResourceItem from '../components/ResourceItem'

class ResourceList extends Component {
  static contextType = UpdateResourceContext

  render() {
    return (
      <ul>
        {this.context.resources.map(i => (
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