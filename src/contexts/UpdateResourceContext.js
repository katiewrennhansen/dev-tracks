import React from 'react'

const UpdateResourceContext = React.createContext({
    resources: [],
    accounts: [],
    projects: [],
    userData: [],
    singleResouce: [],
    userId: '',
    error: null,
    setResources: () => {},
    deleteResource: () => {},
    setSingeResource: () => {},
    setError: () => {},
    setAccounts: () => {},
    deleteAccount: () => {},
    setProjects: () => {},
    deleteProject: () => {},
    setUserData: () => {}
})

export default UpdateResourceContext