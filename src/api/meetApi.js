import axios from 'axios';

const {
  REACT_APP_DYTE_BASE_URL: DYTE_BASE_URL,
  REACT_APP_DYTE_ORGANIZATION_ID: ORGANIZATION_ID,
  REACT_APP_DYTE_API_KEY: API_KEY,
} = process.env;

export const meetApi = axios.create({
  baseURL: `https://api.cluster.dyte.in/v1/organizations/776290c1-b7e6-4999-94ab-0e00dd4e1d40/`,
  // baseURL:
  //   `${DYTE_BASE_URL}/organizations/${ORGANIZATION_ID}/`,
  headers: {
    Authorization: `e7b90b395031d92d9311`,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
