import axios from 'axios'
import { API_VERSION, BASE_URL } from './endpoints'

axios.defaults.baseURL = BASE_URL + API_VERSION
axios.defaults.withCredentials = true

export default axios
