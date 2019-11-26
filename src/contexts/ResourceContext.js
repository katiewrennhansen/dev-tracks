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
    update: false,
    userId: 1,
    updateId: () => {},
    setData: () => {},
    setResource: () => {},
    setAccounts: () => {},
    setProjects: () => {},
    setError: () => {},
    setUpdate: () => {},
    addData: () => {}
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
        userData: [],
        update: false,
        userId: 1,
    }

    setError = error => {
      this.setState({ error })
    }

    setUpdate = update => {
      this.setState({ update })
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

    addData = data => {
      this.setData([
        ...this.state.data,
        data
      ])
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
            setUserData: this.setUserData,
            setError: this.setError,
            update: this.state.update,
            setUpdate: this.setUpdate,
            addData: this.addData,
            user_id:this.state.userId
        }
        return (
          <ResourceContext.Provider value={value}>
            {this.props.children}
          </ResourceContext.Provider>
        )
      }
}