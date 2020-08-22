import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/matheuscampanhaf/challenge-api-1/',
});

export default api;