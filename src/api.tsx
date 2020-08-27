import axios from 'axios'

let api = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: 'https://t7ftfzwbe5.execute-api.us-east-2.amazonaws.com/dev/'
})

export default api;