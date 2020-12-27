import axios from 'axios'

// Import utility
import { SERVER_URI } from '../utility'

const request = axios.create({
  baseURL: SERVER_URI,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json',
})

export { request }