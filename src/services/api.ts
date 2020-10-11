import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.cosmos.bluesoft.com.br/',
  headers: {
    'X-Cosmos-Token': 'CDlGFhtH2iLQ55mv5T2frw',
  },
});

export default api;
