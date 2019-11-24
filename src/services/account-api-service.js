import config from '../config'
import TokenService from './token-service'

const AccountApiService = {
    getAccounts(){
        return fetch(`${config.API_ENDPOINT}/accounts`,  {
            method: 'GET',
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    getAccountById(id){
        return fetch(`${config.API_ENDPOINT}/accounts/${id}`,  {
            method: 'GET',
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    postAccount(newResource){
        return fetch(`${config.API_ENDPOINT}/accounts`,  {
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
    updateAccount(id, updatedResouce){
        return fetch(`${config.API_ENDPOINT}/accounts/${id}`,  {
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
    deleteAccount(id){
        return fetch(`${config.API_ENDPOINT}/accounts/${id}`,  {
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

export default AccountApiService;