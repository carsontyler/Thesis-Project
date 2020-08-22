import axios from 'axios'

let api = axios.create({
    headers: {
        'Accept-Language': 'en-US',
        // 'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin, Access-Control-Allow-Credentials',
        'Access-Control-Allow-Origin': '*',
        'Allow': 'GET, OPTIONS, POST',
        'Content-Type': 'application/json'
    },
    baseURL: 'http://localhost:8080/api/'
})

export default api;