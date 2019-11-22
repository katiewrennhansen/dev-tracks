import config from '../config'

const ResourceApiService = {
    getData(){
        return fetch(`${config.API_ENDPOINT}/resources`,  {
            method: 'GET',
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
                'content-type': 'application/json'
            },
            body: JSON.stringify(newResource)
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    updateData(id, updatedResouce){
        return fetch(`${config.API_ENDPOINT}/resources/${id}`,  {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedResouce)
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    },
    deleteData(id){
        return fetch(`${config.API_ENDPOINT}/resources/${id}`,  {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
          }).then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
          )
    }
}

export default ResourceApiService;