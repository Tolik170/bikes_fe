import axios from 'axios'

export const axiosClient = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:4000'        //import.meta.env.API_BASE_PATH
  
})
