import axios from 'axios';

const {
  REACT_APP_DYTE_BASE_URL: DYTE_BASE_URL,
  REACT_APP_DYTE_ORGANIZATION_ID: ORGANIZATION_ID,
  REACT_APP_DYTE_API_KEY: API_KEY,
} = process.env;

export const meetApi = axios.create({
  baseURL: `${DYTE_BASE_URL}/organizations/${ORGANIZATION_ID}/`,
  headers: {
    Authorization: `${API_KEY}`,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
