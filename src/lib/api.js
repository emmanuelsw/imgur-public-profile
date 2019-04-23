import axios from 'axios'

// Set in .env.local
const TOKEN = process.env.VUE_APP_IMGUR_TOKEN

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL // imgur api endpoint
})

export function get({ url, params }) {
  let options = {
    method: 'GET',
    url: url,
    headers: {
      'Authorization': `Bearer ${TOKEN}`
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
      'Authorization': `Bearer ${TOKEN}`
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
      'Authorization': `Bearer ${TOKEN}`,
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
      'Authorization': `Bearer ${TOKEN}`
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
      'Authorization': `Bearer ${TOKEN}`
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
      'Authorization': `Bearer ${TOKEN}`
    }
  }
  return api(options)
}

