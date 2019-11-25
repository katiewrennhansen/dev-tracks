import React, { Component } from 'react'


const ResourceContext = React.createContext({
    idToEdit: '',
    error: null,
    fields: [],
    data: [],
    resource: [],
    accounts: [],
    propjects: [],
    userData: [],
    updateId: () => {},
    setData: () => {},
    setResource: () => {},
    setAccounts: () => {},
    setProjects: () => {}
})

export default ResourceContext


export class ResourceProvider extends Component {
    state = {
        idToUpdate: '',
        error: null,
        fields: [],
        data: [],
        resource: [],
        accounts: [],
        projects: [],
        userData: []
    }

    setData = (data) => {
        this.setState({
          data: data
        })
    }

    setResource = (data) => {
      this.setState({
        resource: data
      })
    }

    setAccounts = (data) => {
      this.setState({
        accounts: data
      })
    }

    setProjects = (data) => {
      this.setState({
        projects: data
      })
    }

    setUserData = (data) => {
      this.setState({
        userData: data
      })
    }

    updateId = (id) => {
        this.setState({
          idToEdit: id
        })
      }

    render() {
        const value = {
            updateId: this.updateId,
            idToEdit: this.state.idToEdit,
            error: this.state.error,
            fields: this.state.fields,
            setData: this.setData,
            data: this.state.data,
            resource: this.state.resource,
            setResource: this.setResource,
            accounts: this.state.accounts,
            setAccounts: this.setAccounts,
            projects: this.state.projects,
            setProjects: this.setProjects,
            userData: this.state.userData,
            setUserData: this.setUserData
        }
        return (
          <ResourceContext.Provider value={value}>
            {this.props.children}
          </ResourceContext.Provider>
        )
      }
}