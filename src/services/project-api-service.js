import config from '../config'
import TokenService from './token-service'

const ProjectApiService = {
    getProjects(){
        return fetch(`${config.API_ENDPOINT}/projects`,  {
            method: 'GET',
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    getProjectById(id){
        return fetch(`${config.API_ENDPOINT}/projects/${id}`,  {
            method: 'GET',
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    postProject(newResource){
        return fetch(`${config.API_ENDPOINT}/projects`,  {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newResource)
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    updateProject(id, updatedResouce){
        return fetch(`${config.API_ENDPOINT}/projects/${id}`,  {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(updatedResouce)
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    deleteProject(id){
        return fetch(`${config.API_ENDPOINT}/projects/${id}`,  {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
}

export default ProjectApiService;