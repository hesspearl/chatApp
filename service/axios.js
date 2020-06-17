import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-app-database-e9221.cloudfunctions.net',
});

export default api;
