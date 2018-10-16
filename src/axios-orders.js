import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burgerbuilder-198ad.firebaseio.com/'
})

export default instance