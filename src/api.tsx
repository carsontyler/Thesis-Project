import axios from 'axios'

let api = axios.create({
    headers: {
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"// "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
        // 'Accept-Language': 'en-US',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin, Access-Control-Allow-Credentials',
        // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        // 'Content-Type': 'application/json'
    },
    baseURL: 'https://m9etsx5qze.execute-api.us-east-1.amazonaws.com/dev/'
})

export default api;