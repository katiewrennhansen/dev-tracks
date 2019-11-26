import React, { Component } from 'react';
import ResourceContext from '../contexts/ResourceContext'
import ResourceItem from '../components/ResourceItem'

class ResourceList extends Component {
  static contextType = ResourceContext

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