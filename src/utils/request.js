import axios from 'axios'

const server = axios.create({
  timeout: 5000,
})

const errorHandle = error => {
  Promise.reject(error)
}

server.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)

server.interceptors.response.use(response => {
  return response.data
}, errorHandle)

export default server
