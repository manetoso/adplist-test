import axios from 'axios';

export const meetApi = axios.create({
  baseURL:
    'https://api.cluster.dyte.in/v1/organizations/776290c1-b7e6-4999-94ab-0e00dd4e1d40/',
  headers: {
    Authorization: 'e7b90b395031d92d9311',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
