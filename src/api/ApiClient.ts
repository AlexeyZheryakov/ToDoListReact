import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const ApiClient = axios.create({
  baseURL: API_URL,
  timeout: 60 * 1000,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default ApiClient;
