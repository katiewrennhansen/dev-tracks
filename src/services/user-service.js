import config from '../config'
import TokenService from './token-service'

const UsersApiService = {
    getUsers(){
        return fetch(`${config.API_ENDPOINT}/users`,  {
            method: 'GET',
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    postUser(newResource){
        return fetch(`${config.API_ENDPOINT}/users`,  {
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
    updateUser(id, updatedResouce){
        return fetch(`${config.API_ENDPOINT}/users/${id}`,  {
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
    deleteUser(id){
        return fetch(`${config.API_ENDPOINT}/users/${id}`,  {
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

export default UsersApiService;