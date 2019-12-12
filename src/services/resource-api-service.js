import config from '../config'
import TokenService from './token-service'

const ResourceApiService = {
    getData(){
        return fetch(`${config.API_ENDPOINT}/resources`,  {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    getDataForUser(user_id){
        return fetch(`${config.API_ENDPOINT}/resources/user/${user_id}`,  {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    getResourceById(id){
        return fetch(`${config.API_ENDPOINT}/resources/${id}`,  {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    postData(newResource){
        return fetch(`${config.API_ENDPOINT}/resources`,  {
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
    updateData(id, updatedResource){
        return fetch(`${config.API_ENDPOINT}/resources/${id}`,  {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(updatedResource)
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res
          )
    },
    deleteData(id){
        return fetch(`${config.API_ENDPOINT}/resources/${id}`,  {
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
    }
}

export default ResourceApiService;