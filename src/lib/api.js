import axios from 'axios'

// Set in .env.local
const CLIENT_ID = process.env.VUE_APP_IMGUR_CLIENT_ID

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL // imgur api endpoint
})

export function get({ url, params }) {
  let options = {
    method: 'GET',
    url: url,
    headers: {
      'Authorization': `Client-ID ${CLIENT_ID}`
    }
  }
  if (params) {
    let newParams = { params: params }
    options = { ...options, ...newParams }
  }  
  return api(options)
}

export function post({ url, data }) {
  let options = {
    method: 'POST',
    url: url,
    data: data,
    headers: {
      'Authorization': `Client-ID ${CLIENT_ID}`
    }
  }
  return api(options)
}

export function postFile({ url, data }) {
  let options = {
    method: 'POST',
    url: url,
    data: data,
    headers: {
      'Authorization': `Client-ID ${CLIENT_ID}`,
      'Content-Type': 'multipart/form-data'
    }
  }
  return api(options)
}

export function put({ url, data }) {
  let options = {
    method: 'PUT',
    url: url,
    data: data,
    headers: {
      'Authorization': `Client-ID ${CLIENT_ID}`
    }
  }
  return api(options)
}

export function byMethod({ url, method, data }) {
  let options = {
    method: method,
    url: url,
    data: data,
    headers: {
      'Authorization': `Client-ID ${CLIENT_ID}`
    }
  }
  return api(options)
}

export function del({ url, data }) {
  let options = {
    method: 'DELETE',
    url: url,
    data: data,
    headers: {
      'Authorization': `Client-ID ${CLIENT_ID}`
    }
  }
  return api(options)
}

