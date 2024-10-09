import axios from 'axios';
//import { API_KEY } from '../constants/env'; *If its necesary

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
  // Authorization: `Bearer ${API_KEY}` *If its necesary
};

const http = {
  get: async <T>(url: string) => {
    const response = await axios(url, {
      method: 'GET',
      headers
    });

    return response.data as T;
  },
  post: async <T>(url: string, body: Record<string, any>) => {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });

    return response.body as T;
  },
  put: async <T>(url: string, body: Record<string, any>) => {
    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    });

    return response.body as T;
  },
  delete: async <T>(url: string) => {
    const response = await fetch(url, {
      method: 'DELETE',
      headers
    });

    return response.body as T;
  }
};

export default http;
